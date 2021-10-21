window.BENCHMARK_DATA = {
  "lastUpdate": 1634848021976,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7b5be4e56d4726cdedbb114d8a6bdc0e0ed2c44",
          "message": "Client: README Overhaul (#1488)",
          "timestamp": "2021-09-22T20:52:51-07:00",
          "tree_id": "401468017173e032969a94df22d4b3c081388713",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b7b5be4e56d4726cdedbb114d8a6bdc0e0ed2c44"
        },
        "date": 1632371180241,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16692,
            "range": "±6.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16796,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17576,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14015,
            "range": "±11.05%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422909",
            "value": 13651,
            "range": "±12.39%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16709,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422911",
            "value": 16739,
            "range": "±3.60%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422912",
            "value": 16102,
            "range": "±4.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422913",
            "value": 11994,
            "range": "±15.43%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10136,
            "range": "±18.72%",
            "unit": "ops/sec",
            "extra": "56 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d361b55a3ff60f6450c6971ee56a92e7836d5057",
          "message": "client: add miner london hf switch test (#1490)",
          "timestamp": "2021-09-23T11:04:41+02:00",
          "tree_id": "d5a22e3768ffffab0567a448192f76f1ccae39fe",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d361b55a3ff60f6450c6971ee56a92e7836d5057"
        },
        "date": 1632388258471,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14449,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13995,
            "range": "±6.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15481,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14896,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10984,
            "range": "±16.18%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13141,
            "range": "±4.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14315,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13846,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13985,
            "range": "±4.65%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13329,
            "range": "±7.08%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8fecf712c5983b18c8b465ed9979888b2daa191",
          "message": "VM: Fix Blake2B with messages with a length >= 5 (#1486)\n\n* vm: blake2f: add test\r\n\r\n* vm: blake2f: fix Uint32 little-endian conversion\r\nvm: lint\r\n\r\n* vm: blake2f: cleanup fixed code\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-23T11:24:43+02:00",
          "tree_id": "0d3e24e378ca8b028940ea32e1ca72467188d198",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c8fecf712c5983b18c8b465ed9979888b2daa191"
        },
        "date": 1632389439704,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20068,
            "range": "±6.01%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20794,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20224,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14378,
            "range": "±13.72%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19570,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19682,
            "range": "±3.85%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18662,
            "range": "±6.11%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10865,
            "range": "±18.68%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13841,
            "range": "±16.17%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17161,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "63 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36d4a06a9590644b2cf20262b74bd53570cf20cd",
          "message": "Ethash: add CPU miner (#1475)\n\n* ethash: add cpu miner\r\n\r\n* ethash: add miner tests, expand miner features\r\n\r\n* ethash: address type check using instanceof\r\nethash: copy common when mining\r\nethash: add common copy test\r\n\r\n* ethash: add common as devDependency\r\n\r\n* ethash: moved @ethereumjs/block library to dependencies\r\n\r\n* ethash -> miner: do not expose class members as public\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-23T14:18:17+02:00",
          "tree_id": "ffb54b15304f5ebfc9a8706843b02dc0f854d4f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/36d4a06a9590644b2cf20262b74bd53570cf20cd"
        },
        "date": 1632399804351,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16926,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18083,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19876,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 16143,
            "range": "±11.34%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422909",
            "value": 18506,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19308,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18665,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14154,
            "range": "±14.16%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422913",
            "value": 12457,
            "range": "±13.65%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17260,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf95e04c6a2769865999a4262705a7adf6db416c",
          "message": "util, ethash, common, tx, block, blockchain, devp2p, vm: Client preparing Releases (#1491)\n\n* ethash -> miner: made solution property public\r\n\r\n* util: bumped version to v7.1.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* common -> release: bumped version to v2.5.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json, updated typedoc dev dependency from 0.21.5 to 0.22.4\r\n\r\n* common -> release: rebuild documentation\r\n\r\n* tx -> release: bumped version to v3.3.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* tx -> release: rebuild documentation\r\n\r\n* block -> release: bumped version to v3.5.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* ethash -> release: bumped version to v1.1.0, added CHANGELOG entry, updated README, updated upstream dependency versions\r\n\r\n* ethash -> release: build documentation, replaced manual API docs with auto-generated documentation\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* blockchain -> release: bumped version to v5.4.1, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* blockchain -> release: rebuild documentation\r\n\r\n* devp2p -> release: bumped version to v4.2.0, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* vm -> release: bumped version to v5.5.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\n* add tiny fixes from #905\r\n\r\n* Update packages/util/CHANGELOG.md\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\n\r\n* from tiny fixes issue: add calcNextBaseFee() example to block README\r\n\r\n* fix typos (preceeding -> preceding, analogue -> analog for american english variant)\r\n\r\n* from tiny fixes: remove old reference to node-devp2p, update latest implementations to eth/66 and les/4\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-27T11:50:17+02:00",
          "tree_id": "c5a6289659d4503985bb7c6bd86d547e8add1543",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cf95e04c6a2769865999a4262705a7adf6db416c"
        },
        "date": 1632736595750,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15953,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15285,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16018,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15540,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11526,
            "range": "±14.77%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14667,
            "range": "±4.01%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14917,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15249,
            "range": "±4.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14411,
            "range": "±6.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9146,
            "range": "±18.25%",
            "unit": "ops/sec",
            "extra": "46 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b86cc169686c30e052bc0b77442aacd91a96b2f",
          "message": "client: add dev param to start devnet with miner (#1492)\n\n* client: add dev param to start ephemeral devnet with miner\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-27T21:45:39-04:00",
          "tree_id": "f31a11439c1266bef287b6bfe7208b1a5f08de7e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5b86cc169686c30e052bc0b77442aacd91a96b2f"
        },
        "date": 1632793861558,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24260,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24932,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19484,
            "range": "±11.95%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21896,
            "range": "±4.52%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23130,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21773,
            "range": "±4.18%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11263,
            "range": "±13.95%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Block 9422912",
            "value": 18870,
            "range": "±9.84%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19076,
            "range": "±8.40%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 8668,
            "range": "±15.07%",
            "unit": "ops/sec",
            "extra": "38 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02d93307386096a2be278df486e5636adfe2cb7a",
          "message": "client: readme updates for new dev param (#1496)",
          "timestamp": "2021-09-28T08:21:42-07:00",
          "tree_id": "7c75d25e53ae367dd601d2dbfbd5713e0c1018f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/02d93307386096a2be278df486e5636adfe2cb7a"
        },
        "date": 1632847183062,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25269,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26348,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20629,
            "range": "±11.82%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 24545,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24591,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21839,
            "range": "±7.97%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422911",
            "value": 11219,
            "range": "±23.81%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422912",
            "value": 22707,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13486,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17001,
            "range": "±20.66%",
            "unit": "ops/sec",
            "extra": "60 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0477d64c259b354ff57bab7e77be43081216fea",
          "message": "Block, Blockchain: bugfix releases (client preparation) fixing London HF at block 0 or 1 handling (#1495)",
          "timestamp": "2021-09-28T10:36:54-07:00",
          "tree_id": "a2dbe5dfd627bc2d25934d4619a3e747fc0a6969",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b0477d64c259b354ff57bab7e77be43081216fea"
        },
        "date": 1632850981925,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15003,
            "range": "±4.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15201,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14671,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14712,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11717,
            "range": "±11.71%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14884,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14278,
            "range": "±4.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14490,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15330,
            "range": "±4.17%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10706,
            "range": "±17.76%",
            "unit": "ops/sec",
            "extra": "54 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "346dde294bb23d6acd6b4df3e6d7a26fb46555cb",
          "message": "Client: first stable release v0.1.0 🎉 (#1499)\n\n* client -> release: bumped version to v0.1.0, added CHANGELOG entry\r\n\r\n* client -> release: updated README\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* delete removed readme section\r\n\r\n* run prettier\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>",
          "timestamp": "2021-09-29T23:19:17+02:00",
          "tree_id": "e9e124e7f20afde58790aa5dd90a664f88fdb1cf",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/346dde294bb23d6acd6b4df3e6d7a26fb46555cb"
        },
        "date": 1632950705403,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14872,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 14367,
            "range": "±6.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15351,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15309,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11020,
            "range": "±15.78%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14120,
            "range": "±3.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14793,
            "range": "±3.90%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14661,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14151,
            "range": "±4.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11069,
            "range": "±16.02%",
            "unit": "ops/sec",
            "extra": "57 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "531e4b3a1843833b3015ab185fc610f4f2da5d67",
          "message": "Tx/Util: ensure only integers are allowed as input (#1500)\n\n* util: verify intToBuffer/intToHex inputs are integers\r\ntx: add checks to verify decimal values cannot be used\r\n\r\n* util/tx: check max safe integer, add string tests\r\n\r\n* util: simplify intToHex\r\n\r\n* tx: add test cases\r\n\r\n* tx/util: add test cases\r\n\r\n* tx: 1 more test failing input test case\r\n\r\n* tx: remove console.log\r\n\r\n* Update packages/util/test/bytes.spec.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\n* Update packages/util/test/bytes.spec.ts\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\n\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-30T00:06:39+02:00",
          "tree_id": "e2ce055bf1b6a2c53a38ada77f0198fed1dcea3d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/531e4b3a1843833b3015ab185fc610f4f2da5d67"
        },
        "date": 1632953512322,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24136,
            "range": "±6.99%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24584,
            "range": "±2.24%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22587,
            "range": "±6.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15956,
            "range": "±18.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422909",
            "value": 22502,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22040,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12798,
            "range": "±17.62%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11380,
            "range": "±37.05%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Block 9422913",
            "value": 20377,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11305,
            "range": "±11.79%",
            "unit": "ops/sec",
            "extra": "37 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e41fb32a4916cff53ec940d94e3c238f3c20d5f",
          "message": "Util v7.1.2 and Tx v3.3.2 Releases (#1501)\n\n* util -> release: bumped version to v7.1.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* tx -> release: bumped version to v3.3.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* monorepo: updated package-lock.json\r\n\r\n* util -> release: updated exclude directive in typedoc.js, rebuild documentation",
          "timestamp": "2021-09-30T01:26:36+02:00",
          "tree_id": "e235ea6f73852f5fc35377ac443788383f569998",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6e41fb32a4916cff53ec940d94e3c238f3c20d5f"
        },
        "date": 1632958360482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20342,
            "range": "±6.13%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20887,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21199,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13610,
            "range": "±15.58%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19000,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19751,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18741,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11158,
            "range": "±18.47%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 11123,
            "range": "±24.34%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17113,
            "range": "±4.97%",
            "unit": "ops/sec",
            "extra": "62 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8979852695df7fa7c33858e744ce185f985aade",
          "message": "client: merge related work (#1493)",
          "timestamp": "2021-09-30T06:49:49-07:00",
          "tree_id": "af3b95b56bdbc8919110dbf8ab8d94e59a858ac8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8979852695df7fa7c33858e744ce185f985aade"
        },
        "date": 1633010116578,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18442,
            "range": "±6.12%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18862,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19186,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14447,
            "range": "±11.29%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17649,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18852,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18661,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15430,
            "range": "±12.05%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 10690,
            "range": "±16.55%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16931,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05f6f7a904302129ea1c89d22efcb043d92881e1",
          "message": "client: add RPC help (--helprpc) (#1505)",
          "timestamp": "2021-10-01T22:56:22+02:00",
          "tree_id": "64fa970c0f2ce20a0759e3672dbd70b7adc0a14d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05f6f7a904302129ea1c89d22efcb043d92881e1"
        },
        "date": 1633122083231,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24019,
            "range": "±6.44%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25727,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21582,
            "range": "±9.39%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19509,
            "range": "±16.66%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24172,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23212,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 12100,
            "range": "±15.10%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Block 9422912",
            "value": 21050,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 16251,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422914",
            "value": 12898,
            "range": "±21.54%",
            "unit": "ops/sec",
            "extra": "53 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "501be8da11b07d138bb4497f8a18bdf0fa2d11d7",
          "message": "client: merge work continued (#1509)\n\n* improve logs\r\n\r\n* simplify scripts, upgrade webpack dep to latest\r\n\r\n* Engine API: make preparePayload return an object (https://github.com/ethereum/execution-apis/commit/bd4389dea0f1c4bbf9d08e7bfc13d8bbded51224)\r\n\r\n* parseGethParams: add baseFeePerGas and terminalTotalDifficulty for taunas testnet\r\ncheckDAOExtraData: skip if DAOActivationBlock is zero\r\n\r\n* rename block.header.bloom to block.header.logsBloom and add backwards compatibility\r\n\r\n* remove unnecessary toNumber() and toString() within string literals\r\n\r\n* improve inTurn log language\r\n\r\n* replace JsonHeader.baseFee with baseFeePerGas (geth updated to this so we should also for consistency)\r\n\r\n* fixes",
          "timestamp": "2021-10-02T14:11:17+02:00",
          "tree_id": "1eaac9d91f2970faf3505d56aa6e5cfb17c307af",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/501be8da11b07d138bb4497f8a18bdf0fa2d11d7"
        },
        "date": 1633177053037,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16470,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15721,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16691,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15216,
            "range": "±12.78%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11777,
            "range": "±13.73%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15576,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15939,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15317,
            "range": "±3.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15422,
            "range": "±4.94%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 7440,
            "range": "±23.43%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pilll.PL22@gmail.com",
            "name": "v 1 r t l",
            "username": "talentlessguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fefc5f9a43baebc2f77388a533fc06dd534adf8",
          "message": "feat(vm): use promisify from node.js (#1514)\n\n* feat: use promisify from node.js\r\n* chore: remove util.promisify from dependencies",
          "timestamp": "2021-10-03T17:20:23-07:00",
          "tree_id": "61bbda057bb9c7dd7f3fcd4cdf7528d663599f16",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3fefc5f9a43baebc2f77388a533fc06dd534adf8"
        },
        "date": 1633308071979,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13856,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13434,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14072,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14057,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10620,
            "range": "±16.52%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13006,
            "range": "±6.06%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13242,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13683,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13738,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13411,
            "range": "±4.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30843294+Aniket-Engg@users.noreply.github.com",
            "name": "Aniket",
            "username": "Aniket-Engg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ca7ffdeb880431b39e39df60f27b264553a9ea8",
          "message": "trie: add try-catch for \"Missing node in DB\" in ReadStream (#1515)",
          "timestamp": "2021-10-06T08:00:06-07:00",
          "tree_id": "2f19eea8b1a8ab23e8fc3d04c1d3373500a89c0c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6ca7ffdeb880431b39e39df60f27b264553a9ea8"
        },
        "date": 1633534433937,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24561,
            "range": "±5.95%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25563,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19349,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23069,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23958,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22803,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10959,
            "range": "±14.36%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 21109,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17415,
            "range": "±12.59%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 10155,
            "range": "±22.64%",
            "unit": "ops/sec",
            "extra": "45 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a50fb5f97331b54dc596d19e6798dcce6ede0f3f",
          "message": "prep MPT release v4.2.2 (#1518)",
          "timestamp": "2021-10-06T09:19:48-07:00",
          "tree_id": "dc1367d7f8529707cb64fa2849a8673ca26fedf8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a50fb5f97331b54dc596d19e6798dcce6ede0f3f"
        },
        "date": 1633539116909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15079,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13859,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15032,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15002,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11196,
            "range": "±13.02%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13622,
            "range": "±4.00%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14227,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14007,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13651,
            "range": "±4.25%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13323,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb4c15e10d89101ec62a64b75f7ab003d39cda75",
          "message": "vm: fix accountexists bug in pre-SD hardforks (#1516)\n\n* vm: fix accountexists bug in pre-SD hardforks\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2021-10-06T14:33:16-04:00",
          "tree_id": "fa7be6fedafa98cca960e98446e1cd22f926d59d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4c15e10d89101ec62a64b75f7ab003d39cda75"
        },
        "date": 1633545577162,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 13661,
            "range": "±4.90%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 12771,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14154,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13617,
            "range": "±4.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11188,
            "range": "±14.19%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Block 9422910",
            "value": 12763,
            "range": "±6.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13831,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14395,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14092,
            "range": "±4.15%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13542,
            "range": "±6.22%",
            "unit": "ops/sec",
            "extra": "68 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb4c15e10d89101ec62a64b75f7ab003d39cda75",
          "message": "vm: fix accountexists bug in pre-SD hardforks (#1516)\n\n* vm: fix accountexists bug in pre-SD hardforks\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2021-10-06T14:33:16-04:00",
          "tree_id": "fa7be6fedafa98cca960e98446e1cd22f926d59d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4c15e10d89101ec62a64b75f7ab003d39cda75"
        },
        "date": 1633562942123,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20289,
            "range": "±7.96%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21663,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17129,
            "range": "±11.47%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20485,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422909",
            "value": 20169,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19710,
            "range": "±5.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14084,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422912",
            "value": 12791,
            "range": "±28.52%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422913",
            "value": 18267,
            "range": "±4.31%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422914",
            "value": 14212,
            "range": "±14.53%",
            "unit": "ops/sec",
            "extra": "54 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab31013d154cc7be157daf21a3b534413dec2547",
          "message": "client: non-merge related changes (#1519)",
          "timestamp": "2021-10-07T08:50:33-07:00",
          "tree_id": "41e8b09b864202b8f77829e9c44dd6589e12ca96",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ab31013d154cc7be157daf21a3b534413dec2547"
        },
        "date": 1633622277886,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20253,
            "range": "±6.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21170,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20777,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14830,
            "range": "±12.20%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19515,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20320,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18896,
            "range": "±5.69%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10441,
            "range": "±15.25%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Block 9422913",
            "value": 15948,
            "range": "±14.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17896,
            "range": "±4.43%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pilll.PL22@gmail.com",
            "name": "v 1 r t l",
            "username": "talentlessguy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94373a5b6b7f832c5fa468ca5c1a8564f284b32b",
          "message": "feat(util): remove ethjs-util dependency (#1517)",
          "timestamp": "2021-10-07T13:59:48-07:00",
          "tree_id": "73777365aafdf3fab2da553d6fda67a5ec47be35",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94373a5b6b7f832c5fa468ca5c1a8564f284b32b"
        },
        "date": 1633640759184,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14450,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13714,
            "range": "±5.81%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 14529,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14306,
            "range": "±4.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 10838,
            "range": "±13.28%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13430,
            "range": "±3.92%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422911",
            "value": 13945,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 13654,
            "range": "±4.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13631,
            "range": "±4.49%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13381,
            "range": "±6.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88327f441cbe01c066da8d911b22174cf8a45785",
          "message": "block: add dynamic base fee instantiation example to the 1559 examples",
          "timestamp": "2021-10-11T11:22:24+02:00",
          "tree_id": "6b82af86a5da90ebeb8dfa8fcf283d0a2a7de61b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/88327f441cbe01c066da8d911b22174cf8a45785"
        },
        "date": 1633944516499,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16844,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 15499,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16703,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15840,
            "range": "±5.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11406,
            "range": "±15.62%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422910",
            "value": 15518,
            "range": "±4.05%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 15962,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422912",
            "value": 15273,
            "range": "±4.24%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14964,
            "range": "±6.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422914",
            "value": 5948,
            "range": "±19.69%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "986eb64dde1fa3761b19749d3d6aab8b06b6cbc7",
          "message": "block: small README update",
          "timestamp": "2021-10-11T11:23:20+02:00",
          "tree_id": "3c958e91d5d1204705fedfac812e9ff841981774",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/986eb64dde1fa3761b19749d3d6aab8b06b6cbc7"
        },
        "date": 1633944797439,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22685,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25341,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20377,
            "range": "±13.05%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20269,
            "range": "±11.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24161,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23057,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10380,
            "range": "±13.49%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Block 9422912",
            "value": 19673,
            "range": "±13.51%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17430,
            "range": "±12.59%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422914",
            "value": 9206,
            "range": "±17.54%",
            "unit": "ops/sec",
            "extra": "41 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vasiliy.serpokryl@mail.ru",
            "name": "Vasiliy Serpokryl",
            "username": "vserpokryl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5254d2c62115c54fc9233968c186dfae480f026b",
          "message": "Util: fix toUtf8() when there is a zero at the end of a line (#1522)",
          "timestamp": "2021-10-12T17:54:26+02:00",
          "tree_id": "72e8c7723de8db0a2994c2800a82824b3fa0348f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5254d2c62115c54fc9233968c186dfae480f026b"
        },
        "date": 1634054378374,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23902,
            "range": "±6.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25492,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19594,
            "range": "±10.78%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23085,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422909",
            "value": 23732,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22548,
            "range": "±4.30%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10791,
            "range": "±15.27%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 20378,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422913",
            "value": 17046,
            "range": "±12.92%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Block 9422914",
            "value": 11365,
            "range": "±26.42%",
            "unit": "ops/sec",
            "extra": "48 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5de1a012ef5870574d419003ad7fd5effe80e70",
          "message": "VM: Fix accountExists inconsistency in StateManager (#1524)\n\n* vm -> StateManager, Cache: added a new virtual flag to indicate an account doesn't exist in the trie\r\n\r\n* vm -> Cache: fixed small virtual account value setting inconsistency on Cache delete update, added virtual param code docs\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-10-13T14:16:17+02:00",
          "tree_id": "edf876a6f049e25c19e48ea08eaa141eafb4bdfa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a5de1a012ef5870574d419003ad7fd5effe80e70"
        },
        "date": 1634127735252,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20595,
            "range": "±6.02%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21198,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20718,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15072,
            "range": "±13.71%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19352,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19575,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18957,
            "range": "±5.41%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422912",
            "value": 10839,
            "range": "±16.85%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14906,
            "range": "±14.04%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422914",
            "value": 17645,
            "range": "±5.03%",
            "unit": "ops/sec",
            "extra": "63 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58e5e0d059d55965b349c922af0ca6177bcb7f26",
          "message": "Util: New Release v7.1.3 (#1525), rewrite of ethjs-util toUtf8 method, additional tests\n\n* util: rewrote toUtf8 method and removed from ethjs-util internal.ts import, added code docs, expanded tests\r\n\r\n* util: throw in toUtf8() method on uneven hex string input\r\n\r\n* util -> release: bumped version to v7.1.3, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* util -> release: rebuild documentation\r\n\r\n* Updated package-lock.json\r\n\r\n* Apply suggestions from code review\r\n\r\nchangelog grammar improvements\r\n\r\n* util -> release: added README note on ethjs-util internalization, temporary module doc links fix\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-10-14T13:04:35+02:00",
          "tree_id": "713e316ce01252008d2e291b4d79e02ce18ff907",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/58e5e0d059d55965b349c922af0ca6177bcb7f26"
        },
        "date": 1634209867344,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17549,
            "range": "±7.77%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18630,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18387,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14098,
            "range": "±14.48%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Block 9422909",
            "value": 17848,
            "range": "±4.50%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17950,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422911",
            "value": 17433,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422912",
            "value": 16840,
            "range": "±6.86%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422913",
            "value": 7009,
            "range": "±14.18%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16669,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "65 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fd401cc2ec1ab6cd78211851a7c9c8fe63f32e1",
          "message": "client, blockchain, block, common: merge work continued (part 2) (#1512) (continued engine work, eth_getLogs stub, small additions, other)\n\n* tidy up, use Hardfork enum in common usage, re-add resolve comments to webpack config\r\n\r\n* add object, array, value validators\r\n\r\n* continue implementing engine endpoints\r\n\r\n* wip work\r\n\r\n* rpc:\r\n  align rpc block response with standard fields\r\n  ensure errors are thrown not returned for jayson to return error object in response\r\n\r\n* search for parents in forkchoiceUpdated\r\nadd variable for last finalized block\r\npass common from header.validate to blockchain.cliqueActiveSigners so it can respect the set consensus type from the block\r\n\r\n* fixes\r\n\r\n* miner: store bound event handlers so they can be properly removed\r\n\r\n* fixes\r\n\r\n* client: temporary eth_getLogs RPC mockup method for Merge interoperability with Lodestar\r\n\r\n* client: adopt merge with-signer genesis with generated test account address\r\n\r\n* fixes\r\n\r\n* update readme example with standardized fields\r\n\r\n* client: merge fixes\r\n\r\n* client: fixed getLogs RPC method validation triggering error messages on Lodestar M3 sync\r\n\r\n* tidy up\r\n\r\n* updates\r\n\r\n* client: switched to a more robust consensus type selection when reading geth genesis configuration files\r\n\r\n* block, common: allow baseFeePerGas as an optional field for a genesis header, fix bug in Block not considering baseFeePerGas for genesis header instantiation when HF is london or higher\r\n\r\n* client: fixed a bug not setting TD correctly on ETH STATUS msg exchange for TD being 0\r\n\r\n* client: made consensus type choice in Geth parameter parsing more robust, merge interop hotfixes\r\n\r\n* updates\r\n\r\n* client: fixed baseFeePerGas parsing, some clean-up\r\n\r\n* client: added logger output on fetcher result storing error\r\n\r\n* client: more granular chain updates to update along with TD for precise Merge detection, option to only add non-Merge headers/blocks to chain\r\n\r\n* changes\r\n\r\n* client: extracted extensive RPC logging to dedicated rpcDebug option, added compact RPC logging to regular debug logger\r\n\r\n* updates\r\n\r\n* add object, array, value validators\r\n\r\n* non merge-related client changes\r\n\r\n* client: clear fetcher task queue on Merge to ensure fetcher stops fetching blocks, Merge log msg improvements\r\n\r\n* client: rework double calling of Chain update() within putBlocks() (prevents miner continuation on Merge)\r\n\r\n* blockchain: fixed a bug in copy() not properly copying the Common instance (leading to unintentionally modifying client execution Common)\r\n\r\n* client: fixed setting HF in engine getPayload RPC method\r\n\r\n* Minor\r\n\r\n* lint fixes\r\n\r\n* common: fixed common forkHash parameter name for shanghai and merge HF sections in chain files, fixed fork hash calculation for TD forks\r\n\r\n* client: fixed RPC debug output for batch requests\r\n\r\n* small updates\r\n\r\n* remove interop hack of passing common to cliqueActiveSigners\r\n\r\n* assume sync'd in rpc test setup\r\n\r\n* add block header test for genesis with baseFeePerGas defined\r\n\r\n* add cli option `--rpcStubGetLogs` until implemented\r\n\r\n* add test for clearing fetcher queue\r\n\r\n* add merge integration tests\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-10-16T10:10:32+02:00",
          "tree_id": "1d70dbf816da1b4bb291c0ae3fff51736cbae6b5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4fd401cc2ec1ab6cd78211851a7c9c8fe63f32e1"
        },
        "date": 1634372152611,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23685,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 24809,
            "range": "±2.18%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19680,
            "range": "±11.31%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20117,
            "range": "±12.74%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422909",
            "value": 24042,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21348,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422911",
            "value": 10990,
            "range": "±14.76%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Block 9422912",
            "value": 17966,
            "range": "±9.76%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19543,
            "range": "±7.15%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422914",
            "value": 7725,
            "range": "±27.41%",
            "unit": "ops/sec",
            "extra": "35 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e001ba033b751e47d2691355e51abd9eda2b9b00",
          "message": "client: fix hanging integration test (#1531)\n\n(reverts sync event handler changes)",
          "timestamp": "2021-10-16T17:34:35-07:00",
          "tree_id": "05296ecf0d9212272e04daa9833dc950ed5336ef",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e001ba033b751e47d2691355e51abd9eda2b9b00"
        },
        "date": 1634431611120,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20600,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21238,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21007,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15572,
            "range": "±15.17%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Block 9422909",
            "value": 19650,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20314,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422911",
            "value": 18840,
            "range": "±5.35%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422912",
            "value": 8980,
            "range": "±18.05%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Block 9422913",
            "value": 13458,
            "range": "±33.99%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422914",
            "value": 16993,
            "range": "±4.54%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ce67138360db3a0bc9344377aa14038d1d98571",
          "message": "client: Pithos, Docker, Common/VM Genesis-With-Contracts Extension, Client Log Files, JSON RPC Server Separation, client node-gyp removal, Code Cleanup (#1530)\n\n* add genesis code and storage to cli parsing/common/stateManager for pithos genesis support for deposit contract at 0x0000...0000\r\n\r\n* small fixes\r\n\r\n* engine code tidying\r\n\r\n* split Engine API onto own port (default: 8550)\r\n\r\n* add cli --extIP\r\n\r\n* quicken eth_blockNumber\r\n\r\n* improve speed and resilience\r\n\r\n* add pithos folder with readme, config and docker\r\n\r\n* add blockBuilder option to not insert block into blockchain (improves engine api speed/efficiency)\r\n\r\n* consensusValidated: check if block exists in the canonical chain before throwing unknown header\r\n\r\n* add lighthouse to pithos readme\r\n\r\n* tidy / fixes / updates\r\n\r\n* don't respond to eth protocol reqs for block ranges greater than current height (fixes geth disconnect on pithos)\r\ni first modified the query to contain the max query size but geth didn't like the results, while valid, disconnected with subprotocol_error\r\n\r\n* merge codeAndStorage into GenesisState\r\n\r\n* extend builder opts from block opts, more informative rpc endpoint opened message\r\n\r\n* update yargs to latest\r\nclean up unneeded rpc options from config\r\nadd log file saving and rotate functionality\r\noutput client version in logger and json rpc namespaces\r\nadd basic Dockerfile and docker-compose\r\nupdate libp2p-noise to new chainsafe maintained version to drop bcrypto dep which used node-gyp rebuild\r\n\r\n* set config init with no loggers to default to level error, simplifies use (sorry about this one! getting a little carried away ^_^)",
          "timestamp": "2021-10-21T10:34:44+02:00",
          "tree_id": "0584037704d058db946a525b2f8d223495d6faa0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1ce67138360db3a0bc9344377aa14038d1d98571"
        },
        "date": 1634805637559,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21293,
            "range": "±7.04%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22459,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422907",
            "value": 22304,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422908",
            "value": 15577,
            "range": "±13.82%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422909",
            "value": 20222,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22871,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422911",
            "value": 16528,
            "range": "±14.00%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Block 9422912",
            "value": 11346,
            "range": "±18.17%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Block 9422913",
            "value": 19286,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422914",
            "value": 12481,
            "range": "±19.34%",
            "unit": "ops/sec",
            "extra": "40 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2dfa7ee48ace1366f06f111797aae6b69b0d7b41",
          "message": "Client: Add executeBlocks debug option (#1538)\n\n* client: added start/stop logic to PeerPool for a cleaner separation of initialization and execution logic\r\n\r\n* client: added --executeBlocks debug option",
          "timestamp": "2021-10-21T22:21:21+02:00",
          "tree_id": "501b194c4b9f52b6a8ed2a61a418887bfcb3f7d4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2dfa7ee48ace1366f06f111797aae6b69b0d7b41"
        },
        "date": 1634848020810,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 14973,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 13990,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15108,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14881,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422909",
            "value": 11209,
            "range": "±13.97%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422910",
            "value": 13614,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422911",
            "value": 14390,
            "range": "±4.02%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422912",
            "value": 14332,
            "range": "±3.96%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422913",
            "value": 14328,
            "range": "±4.33%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 13689,
            "range": "±6.23%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      }
    ]
  }
}