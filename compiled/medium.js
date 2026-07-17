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
 * 11-container-with-most-water
 *
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water
 * 
 * You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i^th` line are `(i, 0)` and `(i, height[i])`.
 * 
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * Example 1:
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * 
 * Example 2:
 * 
 * Input: height = [1,1]
 * Output: 1
 * 
 * Constraints:
 * 
 * 	- `n == height.length`
 * 
 * 	- `2 <= n <= 10^5`
 * 
 * 	- `0 <= height[i] <= 10^4`
 */

/**
 * @param {number[]} height
 * @return {number}
 */

globalThis.maxArea = function(height) {
  // Write your solution here
};

/*
 * 15-3sum
 *
 * 3Sum
 * https://leetcode.com/problems/3sum
 * 
 * Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Example 1:
 * 
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 * 
 * Example 2:
 * 
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * 
 * Example 3:
 * 
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 * 
 * Constraints:
 * 
 * 	- `3 <= nums.length <= 3000`
 * 
 * 	- `-10^5 <= nums[i] <= 10^5`
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

globalThis.threeSum = function(nums) {
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
 * 75-sort-colors
 *
 * Sort Colors
 * https://leetcode.com/problems/sort-colors
 * 
 * Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * 
 * We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.
 * 
 * You must solve this problem without using the library's sort function.
 * 
 * Example 1:
 * 
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Example 2:
 * 
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 * 
 * Constraints:
 * 
 * 	- `n == nums.length`
 * 
 * 	- `1 <= n <= 300`
 * 
 * 	- `nums[i]` is either `0`, `1`, or `2`.
 * 
 * Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

globalThis.sortColors = function(nums) {
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
 * 167-two-sum-ii-input-array-is-sorted
 *
 * Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 * 
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.
 * 
 * Return the indices of the two numbers `index1` and `index2`, each incremented by one, as an integer array `[index1, index2]` of length 2.
 * 
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * 
 * Your solution must use only constant extra space.
 * 
 * Example 1:
 * 
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 * 
 * Example 2:
 * 
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 * Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
 * 
 * Example 3:
 * 
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 * Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 * 
 * Constraints:
 * 
 * 	- `2 <= numbers.length <= 3 * 10^4`
 * 
 * 	- `-1000 <= numbers[i] <= 1000`
 * 
 * 	- `numbers` is sorted in non-decreasing order.
 * 
 * 	- `-1000 <= target <= 1000`
 * 
 * 	- The tests are generated such that there is exactly one solution.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

globalThis.twoSum = function(numbers, target) {
  // Write your solution here
};

/*
 * 189-rotate-array
 *
 * Rotate Array
 * https://leetcode.com/problems/rotate-array
 * 
 * Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * Example 2:
 * 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 10^5`
 * 
 * 	- `-2^31 <= nums[i] <= 2^31 - 1`
 * 
 * 	- `0 <= k <= 10^5`
 * 
 * Follow up:
 * 
 * 	- Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
 * 
 * 	- Could you do it in-place with `O(1)` extra space?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

globalThis.rotate = function(nums, k) {
  // Write your solution here
};

/*
 * 611-valid-triangle-number
 *
 * Valid Triangle Number
 * https://leetcode.com/problems/valid-triangle-number
 * 
 * Given an integer array `nums`, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
 * 
 * Example 1:
 * 
 * Input: nums = [2,2,3,4]
 * Output: 3
 * Explanation: Valid combinations are:
 * 2,3,4 (using the first 2)
 * 2,3,4 (using the second 2)
 * 2,2,3
 * 
 * Example 2:
 * 
 * Input: nums = [4,2,3,4]
 * Output: 4
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 1000`
 * 
 * 	- `0 <= nums[i] <= 1000`
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.triangleNumber = function(nums) {
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
 * 1138-grumpy-bookstore-owner
 *
 * Grumpy Bookstore Owner
 * https://leetcode.com/problems/grumpy-bookstore-owner
 * 
 * There is a bookstore owner that has a store open for `n` minutes. You are given an integer array `customers` of length `n` where `customers[i]` is the number of the customers that enter the store at the start of the `i^th` minute and all those customers leave after the end of that minute.
 * 
 * During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where `grumpy[i]` is `1` if the bookstore owner is grumpy during the `i^th` minute, and is `0` otherwise.
 * 
 * When the bookstore owner is grumpy, the customers entering during that minute are not satisfied. Otherwise, they are satisfied.
 * 
 * The bookstore owner knows a secret technique to remain not grumpy for `minutes` consecutive minutes, but this technique can only be used once.
 * 
 * Return the maximum number of customers that can be satisfied throughout the day.
 * 
 * Example 1:
 * 
 * Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
 * 
 * Output: 16
 * 
 * Explanation:
 * 
 * The bookstore owner keeps themselves not grumpy for the last 3 minutes.
 * 
 * The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
 * 
 * Example 2:
 * 
 * Input: customers = [1], grumpy = [0], minutes = 1
 * 
 * Output: 1
 * 
 * Constraints:
 * 
 * 	- `n == customers.length == grumpy.length`
 * 
 * 	- `1 <= minutes <= n <= 2 * 10^4`
 * 
 * 	- `0 <= customers[i] <= 1000`
 * 
 * 	- `grumpy[i]` is either `0` or `1`.
 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */

globalThis.maxSatisfied = function(customers, grumpy, minutes) {
  // Write your solution here
};

/*
 * 1212-sequential-digits
 *
 * Sequential Digits
 * https://leetcode.com/problems/sequential-digits
 * 
 * An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
 * 
 * Return a sorted list of all the integers in the range `[low, high]` inclusive that have sequential digits.
 * 
 * Example 1:
 * 
 * Input: low = 100, high = 300
 * Output: [123,234]
 * 
 * Example 2:
 * 
 * Input: low = 1000, high = 13000
 * Output: [1234,2345,3456,4567,5678,6789,12345]
 * 
 * Constraints:
 * 
 * 	- `10 <= low <= high <= 10^9`
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

globalThis.sequentialDigits = function(low, high) {
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
 * 2552-maximum-sum-of-distinct-subarrays-with-length-k
 *
 * Maximum Sum of Distinct Subarrays With Length K
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k
 * 
 * You are given an integer array `nums` and an integer `k`. Find the maximum subarray sum of all the subarrays of `nums` that meet the following conditions:
 * 
 * 	- The length of the subarray is `k`, and
 * 
 * 	- All the elements of the subarray are distinct.
 * 
 * Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return `0`.
 * 
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * Example 1:
 * 
 * Input: nums = [1,5,4,2,9,9,9], k = 3
 * Output: 15
 * Explanation: The subarrays of nums with length 3 are:
 * - [1,5,4] which meets the requirements and has a sum of 10.
 * - [5,4,2] which meets the requirements and has a sum of 11.
 * - [4,2,9] which meets the requirements and has a sum of 15.
 * - [2,9,9] which does not meet the requirements because the element 9 is repeated.
 * - [9,9,9] which does not meet the requirements because the element 9 is repeated.
 * We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
 * 
 * Example 2:
 * 
 * Input: nums = [4,4,4], k = 3
 * Output: 0
 * Explanation: The subarrays of nums with length 3 are:
 * - [4,4,4] which does not meet the requirements because the element 4 is repeated.
 * We return 0 because no subarrays meet the conditions.
 * 
 * Constraints:
 * 
 * 	- `1 <= k <= nums.length <= 10^5`
 * 
 * 	- `1 <= nums[i] <= 10^5`
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

globalThis.maximumSubarraySum = function(nums, k) {
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
 * 2793-count-the-number-of-complete-components
 *
 * Count the Number of Complete Components
 * https://leetcode.com/problems/count-the-number-of-complete-components
 * 
 * You are given an integer `n`. There is an undirected graph with `n` vertices, numbered from `0` to `n - 1`. You are given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there exists an undirected edge connecting vertices `ai` and `bi`.
 * 
 * Return the number of complete connected components of the graph.
 * 
 * A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.
 * 
 * A connected component is said to be complete if there exists an edge between every pair of its vertices.
 * 
 * Example 1:
 * 
 * Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
 * Output: 3
 * Explanation: From the picture above, one can see that all of the components of this graph are complete.
 * 
 * Example 2:
 * 
 * Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
 * Output: 1
 * Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.
 * 
 * Constraints:
 * 
 * 	- `1 <= n <= 50`
 * 
 * 	- `0 <= edges.length <= n * (n - 1) / 2`
 * 
 * 	- `edges[i].length == 2`
 * 
 * 	- `0 <= ai, bi <= n - 1`
 * 
 * 	- `ai != bi`
 * 
 * 	- There are no repeated edges.
 */

// 2793-count-the-number-of-complete-components — implement your solution below
// globalThis.myFunction = function(...) {
//   // your code
// };

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
 * 3838-path-existence-queries-in-a-graph-i
 *
 * Path Existence Queries in a Graph I
 * https://leetcode.com/problems/path-existence-queries-in-a-graph-i
 * 
 * You are given an integer `n` representing the number of nodes in a graph, labeled from 0 to `n - 1`.
 * 
 * You are also given an integer array `nums` of length `n` sorted in non-decreasing order, and an integer `maxDiff`.
 * 
 * An undirected edge exists between nodes `i` and `j` if the absolute difference between `nums[i]` and `nums[j]` is at most `maxDiff` (i.e., `|nums[i] - nums[j]| <= maxDiff`).
 * 
 * You are also given a 2D integer array `queries`. For each `queries[i] = [ui, vi]`, determine whether there exists a path between nodes `ui` and `vi`.
 * 
 * Return a boolean array `answer`, where `answer[i]` is `true` if there exists a path between `ui` and `vi` in the `i^th` query and `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: n = 2, nums = [1,3], maxDiff = 1, queries = [[0,0],[0,1]]
 * 
 * Output: [true,false]
 * 
 * Explanation:
 * 
 * 	- Query `[0,0]`: Node 0 has a trivial path to itself.
 * 
 * 	- Query `[0,1]`: There is no edge between Node 0 and Node 1 because `|nums[0] - nums[1]| = |1 - 3| = 2`, which is greater than `maxDiff`.
 * 
 * 	- Thus, the final answer after processing all the queries is `[true, false]`.
 * 
 * Example 2:
 * 
 * Input: n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]
 * 
 * Output: [false,false,true,true]
 * 
 * Explanation:
 * 
 * The resulting graph is:
 * 
 * 	- Query `[0,1]`: There is no edge between Node 0 and Node 1 because `|nums[0] - nums[1]| = |2 - 5| = 3`, which is greater than `maxDiff`.
 * 
 * 	- Query `[0,2]`: There is no edge between Node 0 and Node 2 because `|nums[0] - nums[2]| = |2 - 6| = 4`, which is greater than `maxDiff`.
 * 
 * 	- Query `[1,3]`: There is a path between Node 1 and Node 3 through Node 2 since `|nums[1] - nums[2]| = |5 - 6| = 1` and `|nums[2] - nums[3]| = |6 - 8| = 2`, both of which are within `maxDiff`.
 * 
 * 	- Query `[2,3]`: There is an edge between Node 2 and Node 3 because `|nums[2] - nums[3]| = |6 - 8| = 2`, which is equal to `maxDiff`.
 * 
 * 	- Thus, the final answer after processing all the queries is `[false, false, true, true]`.
 * 
 * Constraints:
 * 
 * 	- `1 <= n == nums.length <= 10^5`
 * 
 * 	- `0 <= nums[i] <= 10^5`
 * 
 * 	- `nums` is sorted in non-decreasing order.
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
 * @return {boolean[]}
 */

globalThis.pathExistenceQueries = function(n, nums, maxDiff, queries) {
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

/*
 * 4242-sum-of-gcd-of-formed-pairs
 *
 * Sum of GCD of Formed Pairs
 * https://leetcode.com/problems/sum-of-gcd-of-formed-pairs
 * 
 * You are given an integer array `nums` of length `n`.
 * 
 * Construct an array `prefixGcd` where for each index `i`:
 * 
 * 	- Let `mxi = max(nums[0], nums[1], ..., nums[i])`.
 * 
 * 	- `prefixGcd[i] = gcd(nums[i], mxi)`.
 * 
 * After constructing `prefixGcd`:
 * 
 * 	- Sort `prefixGcd` in non-decreasing order.
 * 
 * 	- Form pairs by taking the smallest unpaired element and the largest unpaired element.
 * 
 * 	- Repeat this process until no more pairs can be formed.
 * 
 * 	- For each formed pair, compute the `gcd` of the two elements.
 * 
 * 	- If `n` is odd, the middle element in the `prefixGcd` array remains unpaired and should be ignored.
 * 
 * Return an integer denoting the sum of the GCD values of all formed pairs.
 * 
 * The term `gcd(a, b)` denotes the greatest common divisor of `a` and `b`.
 * 
 * Example 1:
 * 
 * Input: nums = [2,6,4]
 * 
 * Output: 2
 * 
 * Explanation:
 * 
 * Construct `prefixGcd`:
 * 
 * 			`i`
 * 			`nums[i]`
 * 			`mxi`
 * 			`prefixGcd[i]`
 * 
 * 			0
 * 			2
 * 			2
 * 			2
 * 
 * 			1
 * 			6
 * 			6
 * 			6
 * 
 * 			2
 * 			4
 * 			6
 * 			2
 * 
 * `prefixGcd = [2, 6, 2]`. After sorting, it forms `[2, 2, 6]`.
 * 
 * Pair the smallest and largest elements: `gcd(2, 6) = 2`. The remaining middle element 2 is ignored. Thus, the sum is 2.
 * 
 * Example 2:
 * 
 * Input: nums = [3,6,2,8]
 * 
 * Output: 5
 * 
 * Explanation:
 * 
 * Construct `prefixGcd`:
 * 
 * 			`i`
 * 			`nums[i]`
 * 			`mxi`
 * 			`prefixGcd[i]`
 * 
 * 			0
 * 			3
 * 			3
 * 			3
 * 
 * 			1
 * 			6
 * 			6
 * 			6
 * 
 * 			2
 * 			2
 * 			6
 * 			2
 * 
 * 			3
 * 			8
 * 			8
 * 			8
 * 
 * `prefixGcd = [3, 6, 2, 8]`. After sorting, it forms `[2, 3, 6, 8]`.
 * 
 * Form pairs: `gcd(2, 8) = 2` and `gcd(3, 6) = 3`. Thus, the sum is `2 + 3 = 5`.
 * 
 * Constraints:
 * 
 * 	- `1 <= n == nums.length <= 10^5`
 * 
 * 	- `1 <= nums[i] <= 10^​​​​​​​9`
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.gcdSum = function(nums) {
  // Write your solution here
};

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
    "id": "11-container-with-most-water",
    "fn": "maxArea",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        ],
        "expected": 49
      },
      {
        "args": [
          [
            1,
            1
          ]
        ],
        "expected": 1
      }
    ]
  },
  {
    "id": "15-3sum",
    "fn": "threeSum",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        ],
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "args": [
          [
            0,
            1,
            1
          ]
        ],
        "expected": []
      },
      {
        "args": [
          [
            0,
            0,
            0
          ]
        ],
        "expected": [
          [
            0,
            0,
            0
          ]
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
    "id": "75-sort-colors",
    "fn": "sortColors",
    "usesListNode": false,
    "mutatesInput": true,
    "cases": [
      {
        "args": [
          [
            2,
            0,
            2,
            1,
            1,
            0
          ]
        ],
        "expected": [
          0,
          0,
          1,
          1,
          2,
          2
        ]
      },
      {
        "args": [
          [
            2,
            0,
            1
          ]
        ],
        "expected": [
          0,
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "150-evaluate-reverse-polish-notation",
    "fn": "evalRPN",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "167-two-sum-ii-input-array-is-sorted",
    "fn": "twoSum",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            2,
            7,
            11,
            15
          ],
          9
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            2,
            3,
            4
          ],
          6
        ],
        "expected": [
          1,
          3
        ]
      },
      {
        "args": [
          [
            -1,
            0
          ],
          -1
        ],
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "189-rotate-array",
    "fn": "rotate",
    "usesListNode": false,
    "mutatesInput": true,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          3
        ],
        "expected": [
          5,
          6,
          7,
          1,
          2,
          3,
          4
        ]
      },
      {
        "args": [
          [
            -1,
            -100,
            3,
            99
          ],
          2
        ],
        "expected": [
          3,
          99,
          -1,
          -100
        ]
      }
    ]
  },
  {
    "id": "611-valid-triangle-number",
    "fn": "triangleNumber",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            2,
            2,
            3,
            4
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            4,
            2,
            3,
            4
          ]
        ],
        "expected": 4
      }
    ]
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
    "id": "1138-grumpy-bookstore-owner",
    "fn": "maxSatisfied",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "1212-sequential-digits",
    "fn": "sequentialDigits",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          100,
          300
        ],
        "expected": [
          123,
          234
        ]
      },
      {
        "args": [
          1000,
          13000
        ],
        "expected": [
          1234,
          2345,
          3456,
          4567,
          5678,
          6789,
          12345
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
    "id": "2552-maximum-sum-of-distinct-subarrays-with-length-k",
    "fn": "maximumSubarraySum",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            5,
            4,
            2,
            9,
            9,
            9
          ],
          3
        ],
        "expected": 15
      },
      {
        "args": [
          [
            4,
            4,
            4
          ],
          3
        ],
        "expected": 0
      }
    ]
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
    "id": "2793-count-the-number-of-complete-components",
    "fn": "countCompleteComponents",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          6,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ],
            [
              3,
              4
            ]
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          6,
          [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ],
            [
              3,
              4
            ],
            [
              3,
              5
            ]
          ]
        ],
        "expected": 1
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
    "id": "3838-path-existence-queries-in-a-graph-i",
    "fn": "pathExistenceQueries",
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
  },
  {
    "id": "4242-sum-of-gcd-of-formed-pairs",
    "fn": "gcdSum",
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
