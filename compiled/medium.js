#!/usr/bin/env node
/**
 * LeetCode Medium — practice file
 *
 * Implement each function below, then run tests:
 *   node compiled/medium.js
 *   node compiled/medium.js 1-two-sum
 *   node compiled/medium.js twoSum
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
 * 2-add-two-numbers
 *
 * Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * Example 2:
 * 
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3:
 * 
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
 * Constraints:
 * 
 * 	- The number of nodes in each linked list is in the range `[1, 100]`.
 * 
 * 	- `0 <= Node.val <= 9`
 * 
 * 	- It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

globalThis.addTwoNumbers = function(l1, l2) {
  // Write your solution here
};

/*
 * 49-group-anagrams
 *
 * Group Anagrams
 * https://leetcode.com/problems/group-anagrams
 * 
 * Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * 
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Explanation:
 * 
 * 	- There is no string in strs that can be rearranged to form `"bat"`.
 * 
 * 	- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
 * 
 * 	- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.
 * 
 * Example 2:
 * 
 * Input: strs = [""]
 * 
 * Output: [[""]]
 * 
 * Example 3:
 * 
 * Input: strs = ["a"]
 * 
 * Output: [["a"]]
 * 
 * Constraints:
 * 
 * 	- `1 <= strs.length <= 10^4`
 * 
 * 	- `0 <= strs[i].length <= 100`
 * 
 * 	- `strs[i]` consists of lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

globalThis.groupAnagrams = function(strs) {
  // Write your solution here
};

/*
 * 150-evaluate-reverse-polish-notation
 *
 * Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 * 
 * You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.
 * 
 * Evaluate the expression. Return an integer that represents the value of the expression.
 * 
 * Note that:
 * 
 * 	- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
 * 
 * 	- Each operand may be an integer or another expression.
 * 
 * 	- The division between two integers always truncates toward zero.
 * 
 * 	- There will not be any division by zero.
 * 
 * 	- The input represents a valid arithmetic expression in a reverse polish notation.
 * 
 * 	- The answer and all the intermediate calculations can be represented in a 32-bit integer.
 * 
 * Example 1:
 * 
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * 
 * Example 2:
 * 
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 * 
 * Example 3:
 * 
 * Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * Output: 22
 * Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 * Constraints:
 * 
 * 	- `1 <= tokens.length <= 10^4`
 * 
 * 	- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */

globalThis.evalRPN = function(tokens) {
  // Write your solution here
};

/*
 * 636-exclusive-time-of-functions
 *
 * Exclusive Time of Functions
 * https://leetcode.com/problems/exclusive-time-of-functions
 * 
 * On a single-threaded CPU, we execute a program containing `n` functions. Each function has a unique ID between 0 and `n - 1`.
 * 
 * Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp.
 * 
 * You are given a list `logs`, where `logs[i]` represents the `i^th` log message formatted as a string `"{function_id}:{"start" | "end"}:{timestamp}"`. For example, `"0:start:3"` means a function call with function ID 0 started at the beginning of timestamp 3, and `"1:end:2"` means a function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively.
 * 
 * A function's exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice, one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is `2 + 1 = 3`.
 * 
 * Return the exclusive time of each function in an array, where the value at the `i^th` index represents the exclusive time for the function with ID `i`.
 * 
 * Example 1:
 * 
 * Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
 * Output: [3,4]
 * Explanation:
 * Function 0 starts at the beginning of time 0, then it executes 2 for units of time and reaches the end of time 1.
 * Function 1 starts at the beginning of time 2, executes for 4 units of time, and ends at the end of time 5.
 * Function 0 resumes execution at the beginning of time 6 and executes for 1 unit of time.
 * So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.
 * 
 * Example 2:
 * 
 * Input: n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]
 * Output: [8]
 * Explanation:
 * Function 0 starts at the beginning of time 0, executes for 2 units of time, and recursively calls itself.
 * Function 0 (recursive call) starts at the beginning of time 2 and executes for 4 units of time.
 * Function 0 (initial call) resumes execution then immediately calls itself again.
 * Function 0 (2nd recursive call) starts at the beginning of time 6 and executes for 1 unit of time.
 * Function 0 (initial call) resumes execution at the beginning of time 7 and executes for 1 unit of time.
 * So function 0 spends 2 + 4 + 1 + 1 = 8 units of total time executing.
 * 
 * Example 3:
 * 
 * Input: n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]
 * Output: [7,1]
 * Explanation:
 * Function 0 starts at the beginning of time 0, executes for 2 units of time, and recursively calls itself.
 * Function 0 (recursive call) starts at the beginning of time 2 and executes for 4 units of time.
 * Function 0 (initial call) resumes execution then immediately calls function 1.
 * Function 1 starts at the beginning of time 6, executes 1 unit of time, and ends at the end of time 6.
 * Function 0 resumes execution at the beginning of time 7 and executes for 1 unit of time.
 * So function 0 spends 2 + 4 + 1 = 7 units of total time executing, and function 1 spends 1 unit of total time executing.
 * 
 * Constraints:
 * 
 * 	- `1 <= n <= 100`
 * 
 * 	- `2 <= logs.length <= 500`
 * 
 * 	- `0 <= function_id < n`
 * 
 * 	- `0 <= timestamp <= 10^9`
 * 
 * 	- No two start events will happen at the same timestamp.
 * 
 * 	- No two end events will happen at the same timestamp.
 * 
 * 	- Each function has an `"end"` log for each `"start"` log.
 */

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

globalThis.exclusiveTime = function(n, logs) {
  // Write your solution here
};

/*
 * 686-repeated-string-match
 *
 * Repeated String Match
 * https://leetcode.com/problems/repeated-string-match
 * 
 * Given two strings `a` and `b`, return the minimum number of times you should repeat string `a` so that string `b` is a substring of it. If it is impossible for `b`​​​​​​ to be a substring of `a` after repeating it, return `-1`.
 * 
 * Notice: string `"abc"` repeated 0 times is `""`, repeated 1 time is `"abc"` and repeated 2 times is `"abcabc"`.
 * 
 * Example 1:
 * 
 * Input: a = "abcd", b = "cdabcdab"
 * Output: 3
 * Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
 * 
 * Example 2:
 * 
 * Input: a = "a", b = "aa"
 * Output: 2
 * 
 * Constraints:
 * 
 * 	- `1 <= a.length, b.length <= 10^4`
 * 
 * 	- `a` and `b` consist of lowercase English letters.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

globalThis.repeatedStringMatch = function(a, b) {
  // Write your solution here
};

/*
 * 739-daily-temperatures
 *
 * Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures
 * 
 * Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i^th` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.
 * 
 * Example 1:
 * 
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * 
 * Example 2:
 * 
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 * 
 * Example 3:
 * 
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 * 
 * Constraints:
 * 
 * 	- `1 <= temperatures.length <= 10^5`
 * 
 * 	- `30 <= temperatures[i] <= 100`
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

globalThis.dailyTemperatures = function(temperatures) {
  // Write your solution here
};

/*
 * 1222-remove-covered-intervals
 *
 * Remove Covered Intervals
 * https://leetcode.com/problems/remove-covered-intervals
 * 
 * Given an array `intervals` where `intervals[i] = [li, ri]` represent the interval `[li, ri)`, remove all intervals that are covered by another interval in the list.
 * 
 * The interval `[a, b)` is covered by the interval `[c, d)` if and only if `c <= a` and `b <= d`.
 * 
 * Return the number of remaining intervals.
 * 
 * Example 1:
 * 
 * Input: intervals = [[1,4],[3,6],[2,8]]
 * Output: 2
 * Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
 * 
 * Example 2:
 * 
 * Input: intervals = [[1,4],[2,3]]
 * Output: 1
 * 
 * Constraints:
 * 
 * 	- `1 <= intervals.length <= 1000`
 * 
 * 	- `intervals[i].length == 2`
 * 
 * 	- `0 <= li < ri <= 10^5`
 * 
 * 	- All the given intervals are unique.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */

globalThis.removeCoveredIntervals = function(intervals) {
  // Write your solution here
};

/*
 * 1460-number-of-substrings-containing-all-three-characters
 *
 * Number of Substrings Containing All Three Characters
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
 * 
 * Given a string `s` consisting only of characters a, b and c.
 * 
 * Return the number of substrings containing at least one occurrence of all these characters a, b and c.
 * 
 * Example 1:
 * 
 * Input: s = "abcabc"
 * Output: 10
 * Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
 * 
 * Example 2:
 * 
 * Input: s = "aaacb"
 * Output: 3
 * Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
 * 
 * Example 3:
 * 
 * Input: s = "abc"
 * Output: 1
 * 
 * Constraints:
 * 
 * 	- `3 <= s.length <= 5 x 10^4`
 * 
 * 	- `s` only consists of a, b or c characters.
 */

/**
 * @param {string} s
 * @return {number}
 */

globalThis.numberOfSubstrings = function(s) {
  // Write your solution here
};

/*
 * 1552-build-an-array-with-stack-operations
 *
 * Build an Array With Stack Operations
 * https://leetcode.com/problems/build-an-array-with-stack-operations
 * 
 * You are given an integer array `target` and an integer `n`.
 * 
 * You have an empty stack with the two following operations:
 * 
 * 	- `"Push"`: pushes an integer to the top of the stack.
 * 
 * 	- `"Pop"`: removes the integer on the top of the stack.
 * 
 * You also have a stream of the integers in the range `[1, n]`.
 * 
 * Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to `target`. You should follow the following rules:
 * 
 * 	- If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
 * 
 * 	- If the stack is not empty, pop the integer at the top of the stack.
 * 
 * 	- If, at any moment, the elements in the stack (from the bottom to the top) are equal to `target`, do not read new integers from the stream and do not do more operations on the stack.
 * 
 * Return the stack operations needed to build `target` following the mentioned rules. If there are multiple valid answers, return any of them.
 * 
 * Example 1:
 * 
 * Input: target = [1,3], n = 3
 * Output: ["Push","Push","Pop","Push"]
 * Explanation: Initially the stack s is empty. The last element is the top of the stack.
 * Read 1 from the stream and push it to the stack. s = [1].
 * Read 2 from the stream and push it to the stack. s = [1,2].
 * Pop the integer on the top of the stack. s = [1].
 * Read 3 from the stream and push it to the stack. s = [1,3].
 * 
 * Example 2:
 * 
 * Input: target = [1,2,3], n = 3
 * Output: ["Push","Push","Push"]
 * Explanation: Initially the stack s is empty. The last element is the top of the stack.
 * Read 1 from the stream and push it to the stack. s = [1].
 * Read 2 from the stream and push it to the stack. s = [1,2].
 * Read 3 from the stream and push it to the stack. s = [1,2,3].
 * 
 * Example 3:
 * 
 * Input: target = [1,2], n = 4
 * Output: ["Push","Push"]
 * Explanation: Initially the stack s is empty. The last element is the top of the stack.
 * Read 1 from the stream and push it to the stack. s = [1].
 * Read 2 from the stream and push it to the stack. s = [1,2].
 * Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
 * The answers that read integer 3 from the stream are not accepted.
 * 
 * Constraints:
 * 
 * 	- `1 <= target.length <= 100`
 * 
 * 	- `1 <= n <= 100`
 * 
 * 	- `1 <= target[i] <= n`
 * 
 * 	- `target` is strictly increasing.
 */

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

globalThis.buildArray = function(target, n) {
  // Write your solution here
};

/*
 * 2582-minimum-score-of-a-path-between-two-cities
 *
 * Minimum Score of a Path Between Two Cities
 * https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities
 * 
 * You are given a positive integer `n` representing `n` cities numbered from `1` to `n`. You are also given a 2D array `roads` where `roads[i] = [ai, bi, distancei]` indicates that there is a bidirectional road between cities `ai` and `bi` with a distance equal to `distancei`. The cities graph is not necessarily connected.
 * 
 * The score of a path between two cities is defined as the minimum distance of a road in this path.
 * 
 * Return the minimum possible score of a path between cities `1` and `n`.
 * 
 * Note:
 * 
 * 	- A path is a sequence of roads between two cities.
 * 
 * 	- It is allowed for a path to contain the same road multiple times, and you can visit cities `1` and `n` multiple times along the path.
 * 
 * 	- The test cases are generated such that there is at least one path between `1` and `n`.
 * 
 * Example 1:
 * 
 * Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
 * Output: 5
 * Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
 * It can be shown that no other path has less score.
 * 
 * Example 2:
 * 
 * Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
 * Output: 2
 * Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.
 * 
 * Constraints:
 * 
 * 	- `2 <= n <= 10^5`
 * 
 * 	- `1 <= roads.length <= 10^5`
 * 
 * 	- `roads[i].length == 3`
 * 
 * 	- `1 <= ai, bi <= n`
 * 
 * 	- `ai != bi`
 * 
 * 	- `1 <= distancei <= 10^4`
 * 
 * 	- There are no repeated edges.
 * 
 * 	- There is at least one path between `1` and `n`.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

globalThis.minScore = function(n, roads) {
  // Write your solution here
};

/*
 * 2914-find-the-safest-path-in-a-grid
 *
 * Find the Safest Path in a Grid
 * https://leetcode.com/problems/find-the-safest-path-in-a-grid
 * 
 * You are given a 0-indexed 2D matrix `grid` of size `n x n`, where `(r, c)` represents:
 * 
 * 	- A cell containing a thief if `grid[r][c] = 1`
 * 
 * 	- An empty cell if `grid[r][c] = 0`
 * 
 * You are initially positioned at cell `(0, 0)`. In one move, you can move to any adjacent cell in the grid, including cells containing thieves.
 * 
 * The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.
 * 
 * Return the maximum safeness factor of all paths leading to cell `(n - 1, n - 1)`.
 * 
 * An adjacent cell of cell `(r, c)`, is one of the cells `(r, c + 1)`, `(r, c - 1)`, `(r + 1, c)` and `(r - 1, c)` if it exists.
 * 
 * The Manhattan distance between two cells `(a, b)` and `(x, y)` is equal to `|a - x| + |b - y|`, where `|val|` denotes the absolute value of val.
 * 
 * Example 1:
 * 
 * Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
 * Output: 0
 * Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
 * 
 * Example 2:
 * 
 * Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
 * Output: 2
 * Explanation: The path depicted in the picture above has a safeness factor of 2 since:
 * - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
 * It can be shown that there are no other paths with a higher safeness factor.
 * 
 * Example 3:
 * 
 * Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
 * Output: 2
 * Explanation: The path depicted in the picture above has a safeness factor of 2 since:
 * - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
 * - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
 * It can be shown that there are no other paths with a higher safeness factor.
 * 
 * Constraints:
 * 
 * 	- `1 <= grid.length == n <= 400`
 * 
 * 	- `grid[i].length == n`
 * 
 * 	- `grid[i][j]` is either `0` or `1`.
 * 
 * 	- There is at least one thief in the `grid`.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

globalThis.maximumSafenessFactor = function(grid) {
  // Write your solution here
};

/*
 * 3558-find-a-safe-walk-through-a-grid
 *
 * Find a Safe Walk Through a Grid
 * https://leetcode.com/problems/find-a-safe-walk-through-a-grid
 * 
 * You are given an `m x n` binary matrix `grid` and an integer `health`.
 * 
 * You start on the upper-left corner `(0, 0)` and would like to get to the lower-right corner `(m - 1, n - 1)`.
 * 
 * You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains positive.
 * 
 * Cells `(i, j)` with `grid[i][j] = 1` are considered unsafe and reduce your health by 1.
 * 
 * Return `true` if you can reach the final cell with a health value of 1 or more, and `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1
 * 
 * Output: true
 * 
 * Explanation:
 * 
 * The final cell can be reached safely by walking along the gray cells below.
 * 
 * Example 2:
 * 
 * Input: grid = [[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], health = 3
 * 
 * Output: false
 * 
 * Explanation:
 * 
 * A minimum of 4 health points is needed to reach the final cell safely.
 * 
 * Example 3:
 * 
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]], health = 5
 * 
 * Output: true
 * 
 * Explanation:
 * 
 * The final cell can be reached safely by walking along the gray cells below.
 * 
 * Any path that does not go through the cell `(1, 1)` is unsafe since your health will drop to 0 when reaching the final cell.
 * 
 * Constraints:
 * 
 * 	- `m == grid.length`
 * 
 * 	- `n == grid[i].length`
 * 
 * 	- `1 <= m, n <= 50`
 * 
 * 	- `2 <= m * n`
 * 
 * 	- `1 <= health <= m + n`
 * 
 * 	- `grid[i][j]` is either 0 or 1.
 */

/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */

globalThis.findSafeWalk = function(grid, health) {
  // Write your solution here
};

/*
 * 4136-concatenate-non-zero-digits-and-multiply-by-sum-ii
 *
 * Concatenate Non-Zero Digits and Multiply by Sum II
 * https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii
 * 
 * You are given a string `s` of length `m` consisting of digits. You are also given a 2D integer array `queries`, where `queries[i] = [li, ri]`.
 * 
 * For each `queries[i]`, extract the substring `s[li..ri]`. Then, perform the following:
 * 
 * 	- Form a new integer `x` by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, `x = 0`.
 * 
 * 	- Let `sum` be the sum of digits in `x`. The answer is `x * sum`.
 * 
 * Return an array of integers `answer` where `answer[i]` is the answer to the `i^th` query.
 * 
 * Since the answers may be very large, return them modulo `10^9 + 7`.
 * 
 * Example 1:
 * 
 * Input: s = "10203004", queries = [[0,7],[1,3],[4,6]]
 * 
 * Output: [12340, 4, 9]
 * 
 * Explanation:
 * 
 * 	- `s[0..7] = "10203004"`
 * 
 * 		`x = 1234`
 * 
 * 		- `sum = 1 + 2 + 3 + 4 = 10`
 * 
 * 		- Therefore, answer is `1234 * 10 = 12340`.
 * 
 * 	- `s[1..3] = "020"`
 * 
 * 		`x = 2`
 * 
 * 		- `sum = 2`
 * 
 * 		- Therefore, the answer is `2 * 2 = 4`.
 * 
 * 	- `s[4..6] = "300"`
 * 
 * 		`x = 3`
 * 
 * 		- `sum = 3`
 * 
 * 		- Therefore, the answer is `3 * 3 = 9`.
 * 
 * Example 2:
 * 
 * Input: s = "1000", queries = [[0,3],[1,1]]
 * 
 * Output: [1, 0]
 * 
 * Explanation:
 * 
 * 	- `s[0..3] = "1000"`
 * 
 * 		`x = 1`
 * 
 * 		- `sum = 1`
 * 
 * 		- Therefore, the answer is `1 * 1 = 1`.
 * 
 * 	- `s[1..1] = "0"`
 * 
 * 		`x = 0`
 * 
 * 		- `sum = 0`
 * 
 * 		- Therefore, the answer is `0 * 0 = 0`.
 * 
 * Example 3:
 * 
 * Input: s = "9876543210", queries = [[0,9]]
 * 
 * Output: [444444137]
 * 
 * Explanation:
 * 
 * 	- `s[0..9] = "9876543210"`
 * 
 * 		`x = 987654321`
 * 
 * 		- `sum = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45`
 * 
 * 		- Therefore, the answer is `987654321 * 45 = 44444444445`.
 * 
 * 		- We return `44444444445 modulo (10^9 + 7) = 444444137`.
 * 
 * Constraints:
 * 
 * 	- `1 <= m == s.length <= 10^5`
 * 
 * 	- `s` consists of digits only.
 * 
 * 	- `1 <= queries.length <= 10^5`
 * 
 * 	- `queries[i] = [li, ri]`
 * 
 * 	- `0 <= li <= ri < m`
 */

// 4136-concatenate-non-zero-digits-and-multiply-by-sum-ii — implement your solution below
// globalThis.myFunction = function(...) {
//   // your code
// };

// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = [
  {
    "id": "2-add-two-numbers",
    "fn": "addTwoNumbers",
    "usesListNode": true,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            2,
            4,
            3
          ],
          [
            5,
            6,
            4
          ]
        ],
        "expected": [
          7,
          0,
          8
        ]
      },
      {
        "args": [
          [
            0
          ],
          [
            0
          ]
        ],
        "expected": [
          0
        ]
      },
      {
        "args": [
          [
            9,
            9,
            9,
            9,
            9,
            9,
            9
          ],
          [
            9,
            9,
            9,
            9
          ]
        ],
        "expected": [
          8,
          9,
          9,
          9,
          0,
          0,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "49-group-anagrams",
    "fn": "groupAnagrams",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "150-evaluate-reverse-polish-notation",
    "fn": "evalRPN",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "636-exclusive-time-of-functions",
    "fn": "exclusiveTime",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          2
        ],
        "expected": [
          3,
          4
        ]
      },
      {
        "args": [
          1
        ],
        "expected": [
          8
        ]
      },
      {
        "args": [
          2
        ],
        "expected": [
          7,
          1
        ]
      }
    ]
  },
  {
    "id": "686-repeated-string-match",
    "fn": "repeatedStringMatch",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "739-daily-temperatures",
    "fn": "dailyTemperatures",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            73,
            74,
            75,
            71,
            69,
            72,
            76,
            73
          ]
        ],
        "expected": [
          1,
          1,
          4,
          2,
          1,
          1,
          0,
          0
        ]
      },
      {
        "args": [
          [
            30,
            40,
            50,
            60
          ]
        ],
        "expected": [
          1,
          1,
          1,
          0
        ]
      },
      {
        "args": [
          [
            30,
            60,
            90
          ]
        ],
        "expected": [
          1,
          1,
          0
        ]
      }
    ]
  },
  {
    "id": "1222-remove-covered-intervals",
    "fn": "removeCoveredIntervals",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            [
              1,
              4
            ],
            [
              3,
              6
            ],
            [
              2,
              8
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              1,
              4
            ],
            [
              2,
              3
            ]
          ]
        ],
        "expected": 1
      }
    ]
  },
  {
    "id": "1460-number-of-substrings-containing-all-three-characters",
    "fn": "numberOfSubstrings",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "1552-build-an-array-with-stack-operations",
    "fn": "buildArray",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "2582-minimum-score-of-a-path-between-two-cities",
    "fn": "minScore",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          4,
          [
            [
              1,
              2,
              9
            ],
            [
              2,
              3,
              6
            ],
            [
              2,
              4,
              5
            ],
            [
              1,
              4,
              7
            ]
          ]
        ],
        "expected": 5
      },
      {
        "args": [
          4,
          [
            [
              1,
              2,
              2
            ],
            [
              1,
              3,
              4
            ],
            [
              3,
              4,
              7
            ]
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "2914-find-the-safest-path-in-a-grid",
    "fn": "maximumSafenessFactor",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            [
              1,
              0,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              0,
              0,
              0,
              1
            ],
            [
              0,
              0,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0
            ],
            [
              1,
              0,
              0,
              0
            ]
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "3558-find-a-safe-walk-through-a-grid",
    "fn": "findSafeWalk",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "4136-concatenate-non-zero-digits-and-multiply-by-sum-ii",
    "fn": "MOD",
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
