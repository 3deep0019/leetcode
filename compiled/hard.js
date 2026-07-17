#!/usr/bin/env node
/**
 * LeetCode Hard — practice file
 *
 * Implement each function below, then run tests:
 *   node compiled/hard.js
 *   node compiled/hard.js 1-two-sum
 *   node compiled/hard.js twoSum
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


// --- Problems ---
/*
 * 42-trapping-rain-water
 *
 * Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water
 * 
 * Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.
 * 
 * Example 1:
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 * 
 * Example 2:
 * 
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * 
 * Constraints:
 * 
 * 	- `n == height.length`
 * 
 * 	- `1 <= n <= 2 * 10^4`
 * 
 * 	- `0 <= height[i] <= 10^5`
 */

/**
 * @param {number[]} height
 * @return {number}
 */

globalThis.trap = function(height) {
  // Write your solution here
};

/*
 * 220-contains-duplicate-iii
 *
 * Contains Duplicate III
 * https://leetcode.com/problems/contains-duplicate-iii
 * 
 * You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`.
 * 
 * Find a pair of indices `(i, j)` such that:
 * 
 * 	- `i != j`,
 * 
 * 	- `abs(i - j) <= indexDiff`.
 * 
 * 	- `abs(nums[i] - nums[j]) <= valueDiff`, and
 * 
 * Return `true` if such pair exists or `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
 * Output: true
 * Explanation: We can choose (i, j) = (0, 3).
 * We satisfy the three conditions:
 * i != j --> 0 != 3
 * abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
 * abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
 * 
 * Example 2:
 * 
 * Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
 * Output: false
 * Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
 * 
 * Constraints:
 * 
 * 	- `2 <= nums.length <= 10^5`
 * 
 * 	- `-10^9 <= nums[i] <= 10^9`
 * 
 * 	- `1 <= indexDiff <= nums.length`
 * 
 * 	- `0 <= valueDiff <= 10^9`
 */

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */

globalThis.containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  // Write your solution here
};

/*
 * 1234-number-of-paths-with-max-score
 *
 * Number of Paths with Max Score
 * https://leetcode.com/problems/number-of-paths-with-max-score
 * 
 * You are given a square `board` of characters. You can move on the board starting at the bottom right square marked with the character `'S'`.
 * 
 * You need to reach the top left square marked with the character `'E'`. The rest of the squares are labeled either with a numeric character `1, 2, ..., 9` or with an obstacle `'X'`. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.
 * 
 * Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo `10^9 + 7`.
 * 
 * In case there is no path, return `[0, 0]`.
 * 
 * Example 1:
 * 
 * Input: board = ["E23","2X2","12S"]
 * Output: [7,1]
 * 
 * Example 2:
 * 
 * Input: board = ["E12","1X1","21S"]
 * Output: [4,2]
 * 
 * Example 3:
 * 
 * Input: board = ["E11","XXX","11S"]
 * Output: [0,0]
 * 
 * Constraints:
 * 
 * 	- `2 <= board.length == board[i].length <= 100`
 */

/**
 * @param {string[]} board
 * @return {number[]}
 */

globalThis.pathsWithMaxScore = function(board) {
  // Write your solution here
};

/*
 * 2605-count-anagrams
 *
 * Count Anagrams
 * https://leetcode.com/problems/count-anagrams
 * 
 * You are given a string `s` containing one or more words. Every consecutive pair of words is separated by a single space `' '`.
 * 
 * A string `t` is an anagram of string `s` if the `i^th` word of `t` is a permutation of the `i^th` word of `s`.
 * 
 * 	- For example, `"acb dfe"` is an anagram of `"abc def"`, but `"def cab"` and `"adc bef"` are not.
 * 
 * Return the number of distinct anagrams of `s`. Since the answer may be very large, return it modulo `10^9 + 7`.
 * 
 * Example 1:
 * 
 * Input: s = "too hot"
 * Output: 18
 * Explanation: Some of the anagrams of the given string are "too hot", "oot hot", "oto toh", "too toh", and "too oht".
 * 
 * Example 2:
 * 
 * Input: s = "aa"
 * Output: 1
 * Explanation: There is only one anagram possible for the given string.
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 10^5`
 * 
 * 	- `s` consists of lowercase English letters and spaces `' '`.
 * 
 * 	- There is single space between consecutive words.
 */

/**
 * @param {string} s
 * @return {number}
 */

globalThis.countAnagrams = function(s) {
  // Write your solution here
};

/*
 * 3583-sorted-gcd-pair-queries
 *
 * Sorted GCD Pair Queries
 * https://leetcode.com/problems/sorted-gcd-pair-queries
 * 
 * You are given an integer array `nums` of length `n` and an integer array `queries`.
 * 
 * Let `gcdPairs` denote an array obtained by calculating the GCD of all possible pairs `(nums[i], nums[j])`, where `0 <= i < j < n`, and then sorting these values in ascending order.
 * 
 * For each query `queries[i]`, you need to find the element at index `queries[i]` in `gcdPairs`.
 * 
 * Return an integer array `answer`, where `answer[i]` is the value at `gcdPairs[queries[i]]` for each query.
 * 
 * The term `gcd(a, b)` denotes the greatest common divisor of `a` and `b`.
 * 
 * Example 1:
 * 
 * Input: nums = [2,3,4], queries = [0,2,2]
 * 
 * Output: [1,2,2]
 * 
 * Explanation:
 * 
 * `gcdPairs = [gcd(nums[0], nums[1]), gcd(nums[0], nums[2]), gcd(nums[1], nums[2])] = [1, 2, 1]`.
 * 
 * After sorting in ascending order, `gcdPairs = [1, 1, 2]`.
 * 
 * So, the answer is `[gcdPairs[queries[0]], gcdPairs[queries[1]], gcdPairs[queries[2]]] = [1, 2, 2]`.
 * 
 * Example 2:
 * 
 * Input: nums = [4,4,2,1], queries = [5,3,1,0]
 * 
 * Output: [4,2,1,1]
 * 
 * Explanation:
 * 
 * `gcdPairs` sorted in ascending order is `[1, 1, 1, 2, 2, 4]`.
 * 
 * Example 3:
 * 
 * Input: nums = [2,2], queries = [0,0]
 * 
 * Output: [2,2]
 * 
 * Explanation:
 * 
 * `gcdPairs = [2]`.
 * 
 * Constraints:
 * 
 * 	- `2 <= n == nums.length <= 10^5`
 * 
 * 	- `1 <= nums[i] <= 5 * 10^4`
 * 
 * 	- `1 <= queries.length <= 10^5`
 * 
 * 	- `0 <= queries[i] < n * (n - 1) / 2`
 */

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */

globalThis.gcdValues = function(nums, queries) {
  // Write your solution here
};

/*
 * 3608-find-the-number-of-subsequences-with-equal-gcd
 *
 * Find the Number of Subsequences With Equal GCD
 * https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd
 * 
 * You are given an integer array `nums`.
 * 
 * Your task is to find the number of pairs of non-empty subsequences `(seq1, seq2)` of `nums` that satisfy the following conditions:
 * 
 * 	- The subsequences `seq1` and `seq2` are disjoint, meaning no index of `nums` is common between them.
 * 
 * 	- The GCD of the elements of `seq1` is equal to the GCD of the elements of `seq2`.
 * 
 * Return the total number of such pairs.
 * 
 * Since the answer may be very large, return it modulo `10^9 + 7`.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4]
 * 
 * Output: 10
 * 
 * Explanation:
 * 
 * The subsequence pairs which have the GCD of their elements equal to 1 are:
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * 	- `([1, 2, 3, 4], [1, 2, 3, 4])`
 * 
 * Example 2:
 * 
 * Input: nums = [10,20,30]
 * 
 * Output: 2
 * 
 * Explanation:
 * 
 * The subsequence pairs which have the GCD of their elements equal to 10 are:
 * 
 * 	- `([10, 20, 30], [10, 20, 30])`
 * 
 * 	- `([10, 20, 30], [10, 20, 30])`
 * 
 * Example 3:
 * 
 * Input: nums = [1,1,1,1]
 * 
 * Output: 50
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 200`
 * 
 * 	- `1 <= nums[i] <= 200`
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.subsequencePairCount = function(nums) {
  // Write your solution here
};

/*
 * 3852-path-existence-queries-in-a-graph-ii
 *
 * Path Existence Queries in a Graph II
 * https://leetcode.com/problems/path-existence-queries-in-a-graph-ii
 * 
 * You are given an integer `n` representing the number of nodes in a graph, labeled from 0 to `n - 1`.
 * 
 * You are also given an integer array `nums` of length `n` and an integer `maxDiff`.
 * 
 * An undirected edge exists between nodes `i` and `j` if the absolute difference between `nums[i]` and `nums[j]` is at most `maxDiff` (i.e., `|nums[i] - nums[j]| <= maxDiff`).
 * 
 * You are also given a 2D integer array `queries`. For each `queries[i] = [ui, vi]`, find the minimum distance between nodes `ui` and `vi`. If no path exists between the two nodes, return -1 for that query.
 * 
 * Return an array `answer`, where `answer[i]` is the result of the `i^th` query.
 * 
 * Note: The edges between the nodes are unweighted.
 * 
 * Example 1:
 * 
 * Input: n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]
 * 
 * Output: [1,1]
 * 
 * Explanation:
 * 
 * The resulting graph is:
 * 
 * 			Query
 * 			Shortest Path
 * 			Minimum Distance
 * 
 * 			[0, 3]
 * 			0 &rarr; 3
 * 			1
 * 
 * 			[2, 4]
 * 			2 &rarr; 4
 * 			1
 * 
 * Thus, the output is `[1, 1]`.
 * 
 * Example 2:
 * 
 * Input: n = 5, nums = [5,3,1,9,10], maxDiff = 2, queries = [[0,1],[0,2],[2,3],[4,3]]
 * 
 * Output: [1,2,-1,1]
 * 
 * Explanation:
 * 
 * The resulting graph is:
 * 
 * 			Query
 * 			Shortest Path
 * 			Minimum Distance
 * 
 * 			[0, 1]
 * 			0 &rarr; 1
 * 			1
 * 
 * 			[0, 2]
 * 			0 &rarr; 1 &rarr; 2
 * 			2
 * 
 * 			[2, 3]
 * 			None
 * 			-1
 * 
 * 			[4, 3]
 * 			3 &rarr; 4
 * 			1
 * 
 * Thus, the output is `[1, 2, -1, 1]`.
 * 
 * Example 3:
 * 
 * Input: n = 3, nums = [3,6,1], maxDiff = 1, queries = [[0,0],[0,1],[1,2]]
 * 
 * Output: [0,-1,-1]
 * 
 * Explanation:
 * 
 * There are no edges between any two nodes because:
 * 
 * 	- Nodes 0 and 1: `|nums[0] - nums[1]| = |3 - 6| = 3 > 1`
 * 
 * 	- Nodes 0 and 2: `|nums[0] - nums[2]| = |3 - 1| = 2 > 1`
 * 
 * 	- Nodes 1 and 2: `|nums[1] - nums[2]| = |6 - 1| = 5 > 1`
 * 
 * Thus, no node can reach any other node, and the output is `[0, -1, -1]`.
 * 
 * Constraints:
 * 
 * 	- `1 <= n == nums.length <= 10^5`
 * 
 * 	- `0 <= nums[i] <= 10^5`
 * 
 * 	- `0 <= maxDiff <= 10^5`
 * 
 * 	- `1 <= queries.length <= 10^5`
 * 
 * 	- `queries[i] == [ui, vi]`
 * 
 * 	- `0 <= ui, vi < n`
 */

/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */

globalThis.pathExistenceQueries = function(n, nums, maxDiff, queries) {
  // Write your solution here
};

/*
 * 3919-network-recovery-pathways
 *
 * Network Recovery Pathways
 * https://leetcode.com/problems/network-recovery-pathways
 * 
 * You are given a directed acyclic graph of `n` nodes numbered from 0 to `n &minus; 1`. This is represented by a 2D array edges of length `m`, where edges[i] = [ui, vi, costi] indicates a one‑way communication from node ui to node vi with a recovery cost of costi.
 * 
 * Some nodes may be offline. You are given a boolean array online where online[i] = true means node i is online. Nodes 0 and `n &minus; 1` are always online.
 * 
 * A path from 0 to `n &minus; 1` is valid if:
 * 
 * 	- All intermediate nodes on the path are online.
 * 
 * 	The total recovery cost of all edges on the path does not exceed `k`.
 * 
 * For each valid path, define its score as the minimum edge‑cost along that path.
 * 
 * Return the maximum path score (i.e., the largest minimum-edge cost) among all valid paths. If no valid path exists, return -1.
 * 
 * Example 1:
 * 
 * Input: edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10
 * 
 * Output: 3
 * 
 * Explanation:
 * 
 * The graph has two possible routes from node 0 to node 3:
 * 
 * Path `0 &rarr; 1 &rarr; 3`
 * 
 * Total cost = `5 + 10 = 15`, which exceeds k (`15 > 10`), so this path is invalid.
 * 
 * Path `0 &rarr; 2 &rarr; 3`
 * 
 * Total cost = `3 + 4 = 7 <= k`, so this path is valid.
 * 
 * The minimum edge‐cost along this path is `min(3, 4) = 3`.
 * 
 * There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.
 * 
 * Example 2:
 * 
 * Input: edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12
 * 
 * Output: 6
 * 
 * Explanation:
 * 
 * Node 3 is offline, so any path passing through 3 is invalid.
 * 
 * Consider the remaining routes from 0 to 4:
 * 
 * Path `0 &rarr; 1 &rarr; 4`
 * 
 * Total cost = `7 + 5 = 12 <= k`, so this path is valid.
 * 
 * The minimum edge‐cost along this path is `min(7, 5) = 5`.
 * 
 * Path `0 &rarr; 2 &rarr; 3 &rarr; 4`
 * 
 * Node 3 is offline, so this path is invalid regardless of cost.
 * 
 * Path `0 &rarr; 2 &rarr; 4`
 * 
 * Total cost = `6 + 6 = 12 <= k`, so this path is valid.
 * 
 * The minimum edge‐cost along this path is `min(6, 6) = 6`.
 * 
 * Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.
 * 
 * Constraints:
 * 
 * 	n == online.length
 * 	2 <= n <= 5 * 10^4
 * 	0 <= m == edges.length <= `min(10^5, n * (n - 1) / 2)`
 * 	edges[i] = [ui, vi, costi]
 * 	0 <= ui, vi < n
 * 	ui != vi
 * 	0 <= costi <= 10^9
 * 	0 <= k <= 5 * 10^13
 * 	online[i] is either true or false, and both online[0] and online[n &minus; 1] are true.
 * 	The given graph is a directed acyclic graph.
 */

/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */

globalThis.findMaxPathScore = function(edges, online, k) {
  // Write your solution here
};

// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = [
  {
    "id": "42-trapping-rain-water",
    "fn": "trap",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            0,
            1,
            0,
            2,
            1,
            0,
            1,
            3,
            2,
            1,
            2,
            1
          ]
        ],
        "expected": 6
      },
      {
        "args": [
          [
            4,
            2,
            0,
            3,
            2,
            5
          ]
        ],
        "expected": 9
      }
    ]
  },
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
    "id": "1234-number-of-paths-with-max-score",
    "fn": "pathsWithMaxScore",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            "E23",
            "2X2",
            "12S"
          ]
        ],
        "expected": [
          7,
          1
        ]
      },
      {
        "args": [
          [
            "E12",
            "1X1",
            "21S"
          ]
        ],
        "expected": [
          4,
          2
        ]
      },
      {
        "args": [
          [
            "E11",
            "XXX",
            "11S"
          ]
        ],
        "expected": [
          0,
          0
        ]
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
    "id": "3583-sorted-gcd-pair-queries",
    "fn": "gcdValues",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3608-find-the-number-of-subsequences-with-equal-gcd",
    "fn": "subsequencePairCount",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3852-path-existence-queries-in-a-graph-ii",
    "fn": "pathExistenceQueries",
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
