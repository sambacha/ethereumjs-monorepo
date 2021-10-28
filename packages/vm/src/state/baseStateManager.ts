import Common, { Chain, Hardfork } from '@ethereumjs/common'
import { AccessList, AccessListItem } from '@ethereumjs/tx'
import { debug as createDebugLogger, Debugger } from 'debug'
import { Account, Address } from 'ethereumjs-util'
import { getActivePrecompiles, ripemdPrecompileAddress } from '../evm/precompiles'
import Cache from './cache'
import { DefaultStateManagerOpts } from './stateManager'

type AddressHex = string

/**
 * BaseStateManager implementation for the non-storage-backend
 * related functionality parts of a StateManager like keeping
 * track of accessed storage (`EIP-2929`) or touched accounts
 * (`EIP-158`).
 *
 * This is not a full StateManager implementation in itself but
 * can be used to ease implementing an own StateManager.
 *
 * Note that the implementation is pretty new (October 2021)
 * and we cannot guarantee a stable interface yet.
 */
export abstract class BaseStateManager {
  _common: Common
  _debug: Debugger
  _cache!: Cache

  _touched: Set<AddressHex>
  _touchedStack: Set<AddressHex>[]
  _originalStorageCache: Map<AddressHex, Map<AddressHex, Buffer>>

  // EIP-2929 address/storage trackers.
  // This maps both the accessed accounts and the accessed storage slots.
  // It is a Map(Address => StorageSlots)
  // It is possible that the storage slots set is empty. This means that the address is warm.
  // It is not possible to have an accessed storage slot on a cold address (which is why this structure works)
  // Each call level tracks their access themselves.
  // In case of a commit, copy everything if the value does not exist, to the level above
  // In case of a revert, discard any warm slots.
  _accessedStorage: Map<string, Set<string>>[]

  // Backup structure for address/storage tracker frames on reverts
  // to also include on access list generation
  _accessedStorageReverted: Map<string, Set<string>>[]

  _checkpointCount: number

  protected readonly DEBUG: boolean = false

  /**
   * StateManager is run in DEBUG mode (default: false)
   * Taken from DEBUG environment variable
   *
   * Safeguards on debug() calls are added for
   * performance reasons to avoid string literal evaluation
   * @hidden
   */
  constructor(opts: DefaultStateManagerOpts) {
    let common = opts.common
    if (!common) {
      common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Petersburg })
    }
    this._common = common

    this._touched = new Set()
    this._touchedStack = []
    this._originalStorageCache = new Map()

    this._accessedStorage = [new Map()]
    this._accessedStorageReverted = [new Map()]

    this._checkpointCount = 0

    // Safeguard if "process" is not available (browser)
    if (process !== undefined && process.env.DEBUG) {
      this.DEBUG = true
    }
    this._debug = createDebugLogger('vm:state')
  }

  /**
   * Gets the account associated with `address`. Returns an empty account if the account does not exist.
   * @param address - Address of the `account` to get
   */
  async getAccount(address: Address): Promise<Account> {
    const account = await this._cache.getOrLoad(address)
    return account
  }

  /**
   * Saves an account into state under the provided `address`.
   * @param address - Address under which to store `account`
   * @param account - The account to store
   */
  async putAccount(address: Address, account: Account): Promise<void> {
    if (this.DEBUG) {
      this._debug(
        `Save account address=${address} nonce=${account.nonce} balance=${
          account.balance
        } contract=${account.isContract() ? 'yes' : 'no'} empty=${account.isEmpty() ? 'yes' : 'no'}`
      )
    }
    this._cache.put(address, account)
    this.touchAccount(address)
  }

  /**
   * Deletes an account from state under the provided `address`. The account will also be removed from the state trie.
   * @param address - Address of the account which should be deleted
   */
  async deleteAccount(address: Address) {
    if (this.DEBUG) {
      this._debug(`Delete account ${address}`)
    }
    this._cache.del(address)
    this.touchAccount(address)
  }

  abstract getContractStorage(address: Address, key: Buffer): Promise<Buffer>

  /**
   * Caches the storage value associated with the provided `address` and `key`
   * on first invocation, and returns the cached (original) value from then
   * onwards. This is used to get the original value of a storage slot for
   * computing gas costs according to EIP-1283.
   * @param address - Address of the account to get the storage for
   * @param key - Key in the account's storage to get the value for. Must be 32 bytes long.
   */
  async getOriginalContractStorage(address: Address, key: Buffer): Promise<Buffer> {
    if (key.length !== 32) {
      throw new Error('Storage key must be 32 bytes long')
    }

    const addressHex = address.buf.toString('hex')
    const keyHex = key.toString('hex')

    let map: Map<AddressHex, Buffer>
    if (!this._originalStorageCache.has(addressHex)) {
      map = new Map()
      this._originalStorageCache.set(addressHex, map)
    } else {
      map = this._originalStorageCache.get(addressHex)!
    }

    if (map.has(keyHex)) {
      return map.get(keyHex)!
    } else {
      const current = await this.getContractStorage(address, key)
      map.set(keyHex, current)
      return current
    }
  }

  /**
   * Clears the original storage cache. Refer to {@link StateManager.getOriginalContractStorage}
   * for more explanation.
   */
  _clearOriginalStorageCache(): void {
    this._originalStorageCache = new Map()
  }

  /**
   * Clears the original storage cache. Refer to {@link StateManager.getOriginalContractStorage}
   * for more explanation. Alias of the internal {@link StateManager._clearOriginalStorageCache}
   */
  clearOriginalStorageCache(): void {
    this._clearOriginalStorageCache()
  }

  /**
   * Checkpoints the current state of the StateManager instance.
   * State changes that follow can then be committed by calling
   * `commit` or `reverted` by calling rollback.
   */
  async checkpoint(): Promise<void> {
    this._cache.checkpoint()
    this._touchedStack.push(new Set(Array.from(this._touched)))
    this._accessedStorage.push(new Map())
    this._checkpointCount++
  }

  /**
   * Merges a storage map into the last item of the accessed storage stack
   */
  private _accessedStorageMerge(
    storageList: Map<string, Set<string>>[],
    storageMap: Map<string, Set<string>>
  ) {
    const mapTarget = storageList[storageList.length - 1]

    if (mapTarget) {
      // Note: storageMap is always defined here per definition (TypeScript cannot infer this)
      storageMap?.forEach((slotSet: Set<string>, addressString: string) => {
        const addressExists = mapTarget.get(addressString)
        if (!addressExists) {
          mapTarget.set(addressString, new Set())
        }
        const storageSet = mapTarget.get(addressString)
        slotSet.forEach((value: string) => {
          storageSet!.add(value)
        })
      })
    }
  }

  /**
   * Commits the current change-set to the instance since the
   * last call to checkpoint.
   */
  async commit(): Promise<void> {
    // setup cache checkpointing
    this._cache.commit()
    this._touchedStack.pop()
    this._checkpointCount--

    // Copy the contents of the map of the current level to a map higher.
    const storageMap = this._accessedStorage.pop()
    if (storageMap) {
      this._accessedStorageMerge(this._accessedStorage, storageMap)
    }

    if (this._checkpointCount === 0) {
      await this._cache.flush()
      this._clearOriginalStorageCache()
    }
  }

  /**
   * Reverts the current change-set to the instance since the
   * last call to checkpoint.
   */
  async revert(): Promise<void> {
    // setup cache checkpointing
    this._cache.revert()
    const lastItem = this._accessedStorage.pop()
    if (lastItem) {
      this._accessedStorageReverted.push(lastItem)
    }
    const touched = this._touchedStack.pop()
    if (!touched) {
      throw new Error('Reverting to invalid state checkpoint failed')
    }
    // Exceptional case due to consensus issue in Geth and Parity.
    // See [EIP issue #716](https://github.com/ethereum/EIPs/issues/716) for context.
    // The RIPEMD precompile has to remain *touched* even when the call reverts,
    // and be considered for deletion.
    if (this._touched.has(ripemdPrecompileAddress)) {
      touched.add(ripemdPrecompileAddress)
    }
    this._touched = touched
    this._checkpointCount--

    if (this._checkpointCount === 0) {
      await this._cache.flush()
      this._clearOriginalStorageCache()
    }
  }

  /**
   * Generates an EIP-2930 access list
   *
   * Note: this method is not yet part of the {@link StateManager} interface.
   * If not implemented, {@link VM.runTx} is not allowed to be used with the
   * `reportAccessList` option and will instead throw.
   *
   * Note: there is an edge case on accessList generation where an
   * internal call might revert without an accessList but pass if the
   * accessList is used for a tx run (so the subsequent behavior might change).
   * This edge case is not covered by this implementation.
   *
   * @param addressesRemoved - List of addresses to be removed from the final list
   * @param addressesOnlyStorage - List of addresses only to be added in case of present storage slots
   *
   * @returns - an [@ethereumjs/tx](https://github.com/ethereumjs/ethereumjs-monorepo/packages/tx) `AccessList`
   */
  generateAccessList(
    addressesRemoved: Address[] = [],
    addressesOnlyStorage: Address[] = []
  ): AccessList {
    // Merge with the reverted storage list
    const mergedStorage = [...this._accessedStorage, ...this._accessedStorageReverted]

    // Fold merged storage array into one Map
    while (mergedStorage.length >= 2) {
      const storageMap = mergedStorage.pop()
      if (storageMap) {
        this._accessedStorageMerge(mergedStorage, storageMap)
      }
    }
    const folded = new Map([...mergedStorage[0].entries()].sort())

    // Transfer folded map to final structure
    const accessList: AccessList = []
    folded.forEach((slots, addressStr) => {
      const address = Address.fromString(`0x${addressStr}`)
      const check1 = getActivePrecompiles(this._common).find((a) => a.equals(address))
      const check2 = addressesRemoved.find((a) => a.equals(address))
      const check3 =
        addressesOnlyStorage.find((a) => a.equals(address)) !== undefined && slots.size === 0

      if (!check1 && !check2 && !check3) {
        const storageSlots = Array.from(slots)
          .map((s) => `0x${s}`)
          .sort()
        const accessListItem: AccessListItem = {
          address: `0x${addressStr}`,
          storageKeys: storageSlots,
        }
        accessList!.push(accessListItem)
      }
    })

    return accessList
  }

  /**
   * Marks an account as touched, according to the definition
   * in [EIP-158](https://eips.ethereum.org/EIPS/eip-158).
   * This happens when the account is triggered for a state-changing
   * event. Touched accounts that are empty will be cleared
   * at the end of the tx.
   */
  touchAccount(address: Address): void {
    this._touched.add(address.buf.toString('hex'))
  }
}