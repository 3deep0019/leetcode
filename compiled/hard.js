#!/usr/bin/env node
/**
 * LeetCode Hard — practice file
 *
 * Run all tests:  node compiled/hard.js
 * Run one problem: node compiled/hard.js 1-two-sum
 *                  node compiled/hard.js twoSum
 */

// Shared helpers for linked-list problems
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(values) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return values;
}


// --- Solutions ---
// 220-contains-duplicate-iii (containsNearbyAlmostDuplicate)
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
globalThis.containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
        if (indexDiff <= 0 || valueDiff < 0) return false;
    const buckets = new Map();
    const width = valueDiff + 1; 
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        const bucketId = Math.floor(num / width);
        
        if (buckets.has(bucketId)) {
            return true;
        }
        
        if (buckets.has(bucketId - 1) && Math.abs(num - buckets.get(bucketId - 1)) <= valueDiff) {
            return true;
        }
        
        if (buckets.has(bucketId + 1) && Math.abs(num - buckets.get(bucketId + 1)) <= valueDiff) {
            return true;
        }
        
        buckets.set(bucketId, num);
        
        if (i >= indexDiff) {
            const oldBucketId = Math.floor(nums[i - indexDiff] / width);
            buckets.delete(oldBucketId);
        }
    }
    
    return false;
};

// 2605-count-anagrams (countAnagrams)
/**
 * @param {string} s
 * @return {number}
 */
globalThis.countAnagrams = function(s) {
const MOD = 1000000007n;

    const factorial = (n) => {
        let result = 1n;

        for (let i = 2n; i <= n; i++) {
            result = (result * i) % MOD;
        }

        return result;
    };

    const modPow = (base, exp) => {
        let result = 1n;

        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % MOD;
            }

            base = (base * base) % MOD;
            exp /= 2n;
        }

        return result;
    };

    const modInverse = (n) => {
        return modPow(n, MOD - 2n);
    };

    let answer = 1n;

    for (const word of s.split(' ')) {
        const count = {};

        for (const char of word) {
            count[char] = (count[char] || 0) + 1;
        }

        let ways = factorial(BigInt(word.length));

        for (const char in count) {
            ways =
                (ways *
                    modInverse(
                        factorial(BigInt(count[char]))
                    )) % MOD;
        }

        answer = (answer * ways) % MOD;
    }

    return Number(answer);
};

// 3919-network-recovery-pathways (findMaxPathScore)
/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
globalThis.findMaxPathScore = function(edges, online, k) {
    const n = online.length;

    let minCost = Infinity;
    let maxCost = 0;

    const adj = Array.from({ length: n }, () => []);

    for (const [u, v, cost] of edges) {
        adj[u].push([v, cost]);
        minCost = Math.min(minCost, cost);
        maxCost = Math.max(maxCost, cost);
    }

    function can(score) {
        const indegree = new Array(n).fill(0);

        for (const [u, v, cost] of edges) {
            if (cost < score) continue;

            if (u !== 0 && u !== n - 1 && !online[u]) continue;
            if (v !== 0 && v !== n - 1 && !online[v]) continue;

            indegree[v]++;
        }

        const queue = [];
        let head = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        const topo = [];

        while (head < queue.length) {
            const node = queue[head++];
            topo.push(node);

            for (const [next, cost] of adj[node]) {
                if (cost < score) continue;

                if (node !== 0 && node !== n - 1 && !online[node]) continue;
                if (next !== 0 && next !== n - 1 && !online[next]) continue;

                if (--indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        const dist = new Array(n).fill(Infinity);
        dist[0] = 0;

        for (const node of topo) {
            if (dist[node] === Infinity) continue;

            for (const [next, cost] of adj[node]) {
                if (cost < score) continue;

                if (node !== 0 && node !== n - 1 && !online[node]) continue;
                if (next !== 0 && next !== n - 1 && !online[next]) continue;

                const newCost = dist[node] + cost;

                if (newCost < dist[next]) {
                    dist[next] = newCost;
                }
            }
        }

        return dist[n - 1] <= k;
    }

    let left = minCost;
    let right = maxCost;
    let ans = -1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = [
  {
    "id": "220-contains-duplicate-iii",
    "fn": "containsNearbyAlmostDuplicate",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            1
          ],
          3,
          0
        ],
        "expected": true
      },
      {
        "args": [
          [
            1,
            5,
            9,
            1,
            5,
            9
          ],
          2,
          3
        ],
        "expected": false
      }
    ]
  },
  {
    "id": "2605-count-anagrams",
    "fn": "countAnagrams",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3919-network-recovery-pathways",
    "fn": "findMaxPathScore",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  }
];

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function normalizeGroupAnagrams(value) {
  return value
    .map((group) => [...group].sort())
    .sort((left, right) => left.join("").localeCompare(right.join("")));
}

function runCase(problem, testCase, index) {
  const fn = globalThis[problem.fn];
  if (typeof fn !== "function") {
    throw new Error("Function " + problem.fn + " is not defined");
  }

  let args = JSON.parse(JSON.stringify(testCase.args)).map((arg) =>
    problem.usesListNode && Array.isArray(arg) ? arrayToList(arg) : arg
  );
  let result = fn(...args);

  if (problem.mutatesInput) {
    result = args[0];
  } else if (problem.usesListNode && Array.isArray(testCase.expected)) {
    result = listToArray(result);
  }

  let passed = deepEqual(result, testCase.expected);
  if (!passed && problem.fn === "groupAnagrams") {
    passed = deepEqual(
      normalizeGroupAnagrams(result),
      normalizeGroupAnagrams(testCase.expected)
    );
  }

  const label = problem.id + " example " + (index + 1);
  if (passed) {
    console.log("PASS " + label);
    return true;
  }

  console.log("FAIL " + label);
  console.log("  got     ", JSON.stringify(result));
  console.log("  expected", JSON.stringify(testCase.expected));
  return false;
}

function runTests(filter) {
  const normalizedFilter = filter ? filter.toLowerCase() : null;
  const selected = PROBLEM_TESTS.filter((problem) => {
    if (!normalizedFilter) return true;
    return (
      problem.id.toLowerCase() === normalizedFilter ||
      (problem.fn && problem.fn.toLowerCase() === normalizedFilter)
    );
  });

  if (selected.length === 0) {
    console.error("No problems matched filter:", filter);
    console.error("Available:", PROBLEM_TESTS.map((p) => p.id + (p.fn ? " (" + p.fn + ")" : "")).join(", "));
    process.exit(1);
  }

  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (const problem of selected) {
    if (problem.cases.length === 0) {
      console.log("SKIP " + problem.id + " (no parsed examples — add cases manually)");
      skipped++;
      continue;
    }

    for (let i = 0; i < problem.cases.length; i++) {
      if (runCase(problem, problem.cases[i], i)) passed++;
      else failed++;
    }
  }

  console.log("");
  console.log(passed + " passed, " + failed + " failed, " + skipped + " skipped");
  if (failed > 0) process.exit(1);
}

const filter = process.argv[2];
if (require.main === module) {
  runTests(filter);
}
