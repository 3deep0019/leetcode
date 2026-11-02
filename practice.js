#!/usr/bin/env node
/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  DAILY PRACTICE FILE
 *  197 problems · Easy 83 · Medium 81 · Hard 33
 *  (187 runnable with tests · 10 SQL problems)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  HOW TO USE  (needs Node 16+, no installs)
 *
 *    node practice.js daily                  today's problems (1 Easy + 1 Medium) + runs your code
 *    node practice.js daily --hard 1         add a Hard one  (also --easy N --medium N)
 *    node practice.js daily --pattern "Two Pointers"
 *
 *    node practice.js run 1                  run problem #1  (several: run 1 15 42)
 *    node practice.js desc 1                 print the problem statement in the terminal
 *    node practice.js all                    run everything you have attempted
 *    node practice.js all --difficulty easy --pattern "Stack & Parentheses"
 *
 *    node practice.js list                   all problems with status
 *    node practice.js list --todo --difficulty medium
 *    node practice.js patterns               pattern list with solved counts
 *    node practice.js status                 progress + streak
 *    node practice.js done 176               manually mark solved (use for SQL problems)
 *    node practice.js undone 176             clear a solved mark
 *
 *  WORKFLOW
 *    1. Run `node practice.js daily`, it prints today's problems.
 *    2. Search this file for `#<number>`, read the statement, fill in the `solve:` function.
 *    3. Run the same command again. A problem that passes all tests is saved to
 *       practice-progress.json (same folder) and won't be picked again.
 *
 *  Notes
 *    • Each problem has `tests` (taken from the examples in the statement) and a
 *      `solve` function, edit only the body of `solve`.
 *    • Problems are grouped by Easy / Medium / Hard, then by pattern.
 *    • ListNode / TreeNode are provided below; tests pass arrays that are converted
 *      for you (and converted back from your returned list).
 *    • Each problem runs in its own process with a timeout (default 10s, --timeout ms).
 */
"use strict";

// ── LeetCode helper types (available to your solutions) ────────────────────
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// ── Problem registry ───────────────────────────────────────────────────────
const PROBLEMS = {};
function problem(def) {
  PROBLEMS[def.number] = def;
}
function sqlProblem(def) {
  PROBLEMS[def.number] = Object.assign({ kind: "sql" }, def);
}

// ═══════════════════════════════════════════════════════════════════════════
//  EASY  (83)
// ═══════════════════════════════════════════════════════════════════════════

// ── Easy · Array & Hashing (13) ─────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1 · Two Sum · Easy · Array & Hashing
 https://leetcode.com/problems/two-sum
 ──────────────────────────────────────────────────────────────────────

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

  - `2 <= nums.length <= 10^4`
  - `-10^9 <= nums[i] <= 10^9`
  - `-10^9 <= target <= 10^9`
  - Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than `O(n^2)` time complexity?
*/
problem({
  number: 1,
  title: "Two Sum",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/two-sum",
  compare: "unordered", // answer order doesn't matter
  tests: [
    { args: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { args: [[3, 2, 4], 6], expected: [1, 2] },
    { args: [[3, 3], 6], expected: [0, 1] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  solve: function twoSum(nums, target) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #169 · Majority Element · Easy · Array & Hashing
 https://leetcode.com/problems/majority-element
 ──────────────────────────────────────────────────────────────────────

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

  - `n == nums.length`
  - `1 <= n <= 5 * 10^4`
  - `-10^9 <= nums[i] <= 10^9`
  - The input is generated such that a majority element will exist in the array.

Follow-up: Could you solve the problem in linear time and in `O(1)` space?
*/
problem({
  number: 169,
  title: "Majority Element",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/majority-element",
  tests: [
    { args: [[3, 2, 3]], expected: 3 },
    { args: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function majorityElement(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #217 · Contains Duplicate · Easy · Array & Hashing
 https://leetcode.com/problems/contains-duplicate
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:

  - `1 <= nums.length <= 10^5`
  - `-10^9 <= nums[i] <= 10^9`
*/
problem({
  number: 217,
  title: "Contains Duplicate",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/contains-duplicate",
  tests: [
    { args: [[1, 2, 3, 1]], expected: true },
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
  ],
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  solve: function containsDuplicate(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #219 · Contains Duplicate II · Easy · Array & Hashing
 https://leetcode.com/problems/contains-duplicate-ii
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:

  - `1 <= nums.length <= 10^5`
  - `-10^9 <= nums[i] <= 10^9`
  - `0 <= k <= 10^5`
*/
problem({
  number: 219,
  title: "Contains Duplicate II",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/contains-duplicate-ii",
  tests: [
    { args: [[1, 2, 3, 1], 3], expected: true },
    { args: [[1, 0, 1, 1], 1], expected: true },
    { args: [[1, 2, 3, 1, 2, 3], 2], expected: false },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  solve: function containsNearbyDuplicate(nums, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #242 · Valid Anagram · Easy · Array & Hashing
 https://leetcode.com/problems/valid-anagram
 ──────────────────────────────────────────────────────────────────────

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

  - `1 <= s.length, t.length <= 5 * 10^4`
  - `s` and `t` consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
problem({
  number: 242,
  title: "Valid Anagram",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/valid-anagram",
  tests: [
    { args: ["anagram", "nagaram"], expected: true },
    { args: ["rat", "car"], expected: false },
  ],
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  solve: function isAnagram(s, t) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #448 · Find All Numbers Disappeared in an Array · Easy · Array & Hashing
 https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 ──────────────────────────────────────────────────────────────────────

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:

Input: nums = [1,1]
Output: [2]

Constraints:

  - `n == nums.length`
  - `1 <= n <= 10^5`
  - `1 <= nums[i] <= n`

Follow up: Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.
*/
problem({
  number: 448,
  title: "Find All Numbers Disappeared in an Array",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",
  compare: "unordered", // answer order doesn't matter
  tests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [5, 6] },
    { args: [[1, 1]], expected: [2] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function findDisappearedNumbers(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #645 · Set Mismatch · Easy · Array & Hashing
 https://leetcode.com/problems/set-mismatch
 ──────────────────────────────────────────────────────────────────────

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:

Input: nums = [1,1]
Output: [1,2]

Constraints:

  - `2 <= nums.length <= 10^4`
  - `1 <= nums[i] <= 10^4`
*/
problem({
  number: 645,
  title: "Set Mismatch",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/set-mismatch",
  tests: [
    { args: [[1, 2, 2, 4]], expected: [2, 3] },
    { args: [[1, 1]], expected: [1, 2] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function findErrorNums(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1256 · Rank Transform of an Array · Easy · Array & Hashing
 https://leetcode.com/problems/rank-transform-of-an-array
 ──────────────────────────────────────────────────────────────────────

Given an array of integers `arr`, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

  - Rank is an integer starting from 1.
  - The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
  - Rank should be as small as possible.

Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

Example 2:

Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Example 3:

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]

Constraints:

  - `0 <= arr.length <= 10^5`
  - `-10^9 <= arr[i] <= 10^9`
*/
problem({
  number: 1256,
  title: "Rank Transform of an Array",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/rank-transform-of-an-array",
  tests: [
    { args: [[40, 10, 20, 30]], expected: [4, 1, 2, 3] },
    { args: [[100, 100, 100]], expected: [1, 1, 1] },
    {
      args: [[37, 12, 28, 9, 100, 56, 80, 5, 12]],
      expected: [5, 3, 4, 2, 8, 6, 7, 1, 3],
    },
  ],
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  solve: function arrayRankTransform(arr) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1482 · How Many Numbers Are Smaller Than the Current Number · Easy · Array & Hashing
 https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
 ──────────────────────────────────────────────────────────────────────

Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` and `nums[j] < nums[i]`.

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]

Constraints:

  - `2 <= nums.length <= 500`
  - `0 <= nums[i] <= 100`
*/
problem({
  number: 1482,
  title: "How Many Numbers Are Smaller Than the Current Number",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number",
  tests: [
    { args: [[8, 1, 2, 2, 3]], expected: [4, 0, 1, 1, 3] },
    { args: [[6, 5, 4, 8]], expected: [2, 1, 0, 3] },
    { args: [[7, 7, 7, 7]], expected: [0, 0, 0, 0] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function smallerNumbersThanCurrent(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1960 · Check if the Sentence Is Pangram · Easy · Array & Hashing
 https://leetcode.com/problems/check-if-the-sentence-is-pangram
 ──────────────────────────────────────────────────────────────────────

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string `sentence` containing only lowercase English letters, return `true` if `sentence` is a pangram, or `false` otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false

Constraints:

  - `1 <= sentence.length <= 1000`
  - `sentence` consists of lowercase English letters.
*/
problem({
  number: 1960,
  title: "Check if the Sentence Is Pangram",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/check-if-the-sentence-is-pangram",
  tests: [
    { args: ["thequickbrownfoxjumpsoverthelazydog"], expected: true },
    { args: ["leetcode"], expected: false },
  ],
  /**
   * @param {string} sentence
   * @return {boolean}
   */
  solve: function checkIfPangram(sentence) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3163 · Subarrays Distinct Element Sum of Squares I · Easy · Array & Hashing
 https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed integer array `nums`.

The distinct count of a subarray of `nums` is defined as:

  - Let `nums[i..j]` be a subarray of `nums` consisting of all the indices from `i` to `j` such that `0 <= i <= j < nums.length`. Then the number of distinct values in `nums[i..j]` is called the distinct count of `nums[i..j]`.

Return the sum of the squares of distinct counts of all subarrays of `nums`.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,1]
Output: 15
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 1^2 + 1^2 + 1^2 + 2^2 + 2^2 + 2^2 = 15.

Example 2:

Input: nums = [1,1]
Output: 3
Explanation: Three possible subarrays are:
[1]: 1 distinct value
[1]: 1 distinct value
[1,1]: 1 distinct value
The sum of the squares of the distinct counts in all subarrays is equal to 1^2 + 1^2 + 1^2 = 3.

Constraints:

  - `1 <= nums.length <= 100`
  - `1 <= nums[i] <= 100`
*/
problem({
  number: 3163,
  title: "Subarrays Distinct Element Sum of Squares I",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i",
  tests: [
    { args: [[1, 2, 1]], expected: 15 },
    { args: [[1, 1]], expected: 3 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function sumCounts(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4080 · Smallest Missing Multiple of K · Easy · Array & Hashing
 https://leetcode.com/problems/smallest-missing-multiple-of-k
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` and an integer `k`, return the smallest positive multiple of `k` that is missing from `nums`.

A multiple of `k` is any positive integer divisible by `k`.

Example 1:

Input: nums = [8,2,3,4,6], k = 2

Output: 10

Explanation:

The multiples of `k = 2` are 2, 4, 6, 8, 10, 12... and the smallest multiple missing from `nums` is 10.

Example 2:

Input: nums = [1,4,7,10,15], k = 5

Output: 5

Explanation:

The multiples of `k = 5` are 5, 10, 15, 20... and the smallest multiple missing from `nums` is 5.

Constraints:

  - `1 <= nums.length <= 100`
  - `1 <= nums[i] <= 100`
  - `1 <= k <= 100`
*/
problem({
  number: 4080,
  title: "Smallest Missing Multiple of K",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/smallest-missing-multiple-of-k",
  tests: [
    { args: [[8, 2, 3, 4, 6], 2], expected: 10 },
    { args: [[1, 4, 7, 10, 15], 5], expected: 5 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  solve: function missingMultiple(nums, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4107 · Find Missing Elements · Easy · Array & Hashing
 https://leetcode.com/problems/find-missing-elements
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` consisting of unique integers.

Originally, `nums` contained every integer within a certain range. However, some integers might have gone missing from the array.

The smallest and largest integers of the original range are still present in `nums`.

Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.

Example 1:

Input: nums = [1,4,2,5]

Output: [3]

Explanation:

The smallest integer is 1 and the largest is 5, so the full range should be `[1,2,3,4,5]`. Among these, only 3 is missing.

Example 2:

Input: nums = [7,8,6,9]

Output: []

Explanation:

The smallest integer is 6 and the largest is 9, so the full range is `[6,7,8,9]`. All integers are already present, so no integer is missing.

Example 3:

Input: nums = [5,1]

Output: [2,3,4]

Explanation:

The smallest integer is 1 and the largest is 5, so the full range should be `[1,2,3,4,5]`. The missing integers are 2, 3, and 4.

Constraints:

  - `2 <= nums.length <= 100`
  - `1 <= nums[i] <= 100`
*/
problem({
  number: 4107,
  title: "Find Missing Elements",
  difficulty: "Easy",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/find-missing-elements",
  tests: [
    { args: [[1, 4, 2, 5]], expected: [3] },
    { args: [[7, 8, 6, 9]], expected: [] },
    { args: [[5, 1]], expected: [2, 3, 4] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function findMissingElements(nums) {
    // Write your solution here
  },
});

// ── Easy · Two Pointers (7) ────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #26 · Remove Duplicates from Sorted Array · Easy · Two Pointers
 https://leetcode.com/problems/remove-duplicates-from-sorted-array
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in `nums` to be `k`. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in sorted order. The remaining elements beyond index `k - 1` can be ignored.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

  - `1 <= nums.length <= 3 * 10^4`
  - `-100 <= nums[i] <= 100`
  - `nums` is sorted in non-decreasing order.
*/
problem({
  number: 26,
  title: "Remove Duplicates from Sorted Array",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
  check: true, // validated by a custom checker (see CHECKERS in the runner)
  tests: [
    { args: [[1, 1, 2]], expected: 2 },
    { args: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], expected: 5 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function removeDuplicates(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #27 · Remove Element · Easy · Two Pointers
 https://leetcode.com/problems/remove-element
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

  - Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
  - Return `k`.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

  - `0 <= nums.length <= 100`
  - `0 <= nums[i] <= 50`
  - `0 <= val <= 100`
*/
problem({
  number: 27,
  title: "Remove Element",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/remove-element",
  check: true, // validated by a custom checker (see CHECKERS in the runner)
  tests: [
    { args: [[3, 2, 2, 3], 3], expected: 2 },
    { args: [[0, 1, 2, 2, 3, 0, 4, 2], 2], expected: 5 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} val
   * @return {number}
   */
  solve: function removeElement(nums, val) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #88 · Merge Sorted Array · Easy · Two Pointers
 https://leetcode.com/problems/merge-sorted-array
 ──────────────────────────────────────────────────────────────────────

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

  - `nums1.length == m + n`
  - `nums2.length == n`
  - `0 <= m, n <= 200`
  - `1 <= m + n <= 200`
  - `-10^9 <= nums1[i], nums2[j] <= 10^9`

Follow up: Can you come up with an algorithm that runs in `O(m + n)` time?
*/
problem({
  number: 88,
  title: "Merge Sorted Array",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/merge-sorted-array",
  inPlace: true, // the function modifies its first argument; that array is what gets checked
  tests: [
    {
      args: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
      expected: [1, 2, 2, 3, 5, 6],
    },
    { args: [[1], 1, [], 0], expected: [1] },
    { args: [[0], 0, [1], 1], expected: [1] },
  ],
  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void}
   */
  solve: function merge(nums1, m, nums2, n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #125 · Valid Palindrome · Easy · Two Pointers
 https://leetcode.com/problems/valid-palindrome
 ──────────────────────────────────────────────────────────────────────

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

  - `1 <= s.length <= 2 * 10^5`
  - `s` consists only of printable ASCII characters.
*/
problem({
  number: 125,
  title: "Valid Palindrome",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/valid-palindrome",
  tests: [
    { args: ["A man, a plan, a canal: Panama"], expected: true },
    { args: ["race a car"], expected: false },
    { args: [" "], expected: true },
  ],
  /**
   * @param {string} s
   * @return {boolean}
   */
  solve: function isPalindrome(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #283 · Move Zeroes · Easy · Two Pointers
 https://leetcode.com/problems/move-zeroes
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

  - `1 <= nums.length <= 10^4`
  - `-2^31 <= nums[i] <= 2^31 - 1`

Follow up: Could you minimize the total number of operations done?
*/
problem({
  number: 283,
  title: "Move Zeroes",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/move-zeroes",
  inPlace: true, // the function modifies its first argument; that array is what gets checked
  tests: [
    { args: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
    { args: [[0]], expected: [0] },
  ],
  /**
   * @param {number[]} nums
   * @return {void}
   */
  solve: function moveZeroes(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #344 · Reverse String · Easy · Two Pointers
 https://leetcode.com/problems/reverse-string
 ──────────────────────────────────────────────────────────────────────

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with `O(1)` extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

  - `1 <= s.length <= 10^5`
  - `s[i]` is a printable ascii character.
*/
problem({
  number: 344,
  title: "Reverse String",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/reverse-string",
  inPlace: true, // the function modifies its first argument; that array is what gets checked
  tests: [
    { args: [["h", "e", "l", "l", "o"]], expected: ["o", "l", "l", "e", "h"] },
    {
      args: [["H", "a", "n", "n", "a", "h"]],
      expected: ["h", "a", "n", "n", "a", "H"],
    },
  ],
  /**
   * @param {character[]} s
   * @return {void}
   */
  solve: function reverseString(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #392 · Is Subsequence · Easy · Two Pointers
 https://leetcode.com/problems/is-subsequence
 ──────────────────────────────────────────────────────────────────────

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

  - `0 <= s.length <= 100`
  - `0 <= t.length <= 10^4`
  - `s` and `t` consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10^9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?
*/
problem({
  number: 392,
  title: "Is Subsequence",
  difficulty: "Easy",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/is-subsequence",
  tests: [
    { args: ["abc", "ahbgdc"], expected: true },
    { args: ["axc", "ahbgdc"], expected: false },
  ],
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  solve: function isSubsequence(s, t) {
    // Write your solution here
  },
});

// ── Easy · Sliding Window (3) ──────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #643 · Maximum Average Subarray I · Easy · Sliding Window
 https://leetcode.com/problems/maximum-average-subarray-i
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value. Any answer with a calculation error less than `10^-5` will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

  - `n == nums.length`
  - `1 <= k <= n <= 10^5`
  - `-10^4 <= nums[i] <= 10^4`
*/
problem({
  number: 643,
  title: "Maximum Average Subarray I",
  difficulty: "Easy",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/maximum-average-subarray-i",
  tests: [
    { args: [[5], 1], expected: 5 },
    { args: [[1, 12, -5, -6, 50, 3], 4], expected: 12.75 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  solve: function findMaxAverage(nums, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1755 · Defuse the Bomb · Easy · Sliding Window
 https://leetcode.com/problems/defuse-the-bomb
 ──────────────────────────────────────────────────────────────────────

You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array `code` of length of `n` and a key `k`.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

  - If `k > 0`, replace the `i^th` number with the sum of the next `k` numbers.
  - If `k < 0`, replace the `i^th` number with the sum of the previous -`k` numbers.
  - If `k == 0`, replace the `i^th` number with `0`.

As `code` is circular, the next element of `code[n-1]` is `code[0]`, and the previous element of `code[0]` is `code[n-1]`.

Given the circular array `code` and an integer key `k`, return the decrypted code to defuse the bomb!

Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

Example 2:

Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0.

Example 3:

Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.

Constraints:

  - `n == code.length`
  - `1 <= n <= 100`
  - `1 <= code[i] <= 100`
  - `-(n - 1) <= k <= n - 1`
*/
problem({
  number: 1755,
  title: "Defuse the Bomb",
  difficulty: "Easy",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/defuse-the-bomb",
  tests: [
    { args: [[5, 7, 1, 4], 3], expected: [12, 10, 16, 13] },
    { args: [[1, 2, 3, 4], 0], expected: [0, 0, 0, 0] },
    { args: [[2, 4, 9, 3], -2], expected: [12, 5, 6, 13] },
  ],
  /**
   * @param {number[]} code
   * @param {number} k
   * @return {number[]}
   */
  solve: function decrypt(code, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3349 · Maximum Length Substring With Two Occurrences · Easy · Sliding Window
 https://leetcode.com/problems/maximum-length-substring-with-two-occurrences
 ──────────────────────────────────────────────────────────────────────

Given a string `s`, return the maximum length of a substring such that it contains at most two occurrences of each character.

Example 1:

Input: s = "bcbbbcba"

Output: 4

Explanation:

The following substring has a length of 4 and contains at most two occurrences of each character: `"bcbbbcba"`.

Example 2:

Input: s = "aaaa"

Output: 2

Explanation:

The following substring has a length of 2 and contains at most two occurrences of each character: `"aaaa"`.

Constraints:

  - `2 <= s.length <= 100`
  - `s` consists only of lowercase English letters.
*/
problem({
  number: 3349,
  title: "Maximum Length Substring With Two Occurrences",
  difficulty: "Easy",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/maximum-length-substring-with-two-occurrences",
  tests: [
    { args: ["bcbbbcba"], expected: 4 },
    { args: ["aaaa"], expected: 2 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function maximumLengthSubstring(s) {
    // Write your solution here
  },
});

// ── Easy · Prefix Sum (3) ──────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1603 · Running Sum of 1d Array · Easy · Prefix Sum
 https://leetcode.com/problems/running-sum-of-1d-array
 ──────────────────────────────────────────────────────────────────────

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]...nums[i])`.

Return the running sum of `nums`.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

Constraints:

  - `1 <= nums.length <= 1000`
  - `-10^6 <= nums[i] <= 10^6`
*/
problem({
  number: 1603,
  title: "Running Sum of 1d Array",
  difficulty: "Easy",
  pattern: "Prefix Sum",
  url: "https://leetcode.com/problems/running-sum-of-1d-array",
  tests: [
    { args: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] },
    { args: [[1, 1, 1, 1, 1]], expected: [1, 2, 3, 4, 5] },
    { args: [[3, 1, 2, 10, 1]], expected: [3, 4, 6, 16, 17] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function runningSum(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3236 · Smallest Missing Integer Greater Than Sequential Prefix Sum · Easy · Prefix Sum
 https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed array of integers `nums`.

A prefix `nums[0..i]` is sequential if, for all `1 <= j <= i`, `nums[j] = nums[j - 1] + 1`. In particular, the prefix consisting only of `nums[0]` is sequential.

Return the smallest integer `x` missing from `nums` such that `x` is greater than or equal to the sum of the longest sequential prefix.

Example 1:

Input: nums = [1,2,3,2,5]
Output: 6
Explanation: The longest sequential prefix of nums is [1,2,3] with a sum of 6. 6 is not in the array, therefore 6 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.

Example 2:

Input: nums = [3,4,5,1,12,14,13]
Output: 15
Explanation: The longest sequential prefix of nums is [3,4,5] with a sum of 12. 12, 13, and 14 belong to the array while 15 does not. Therefore 15 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.

Constraints:

  - `1 <= nums.length <= 50`
  - `1 <= nums[i] <= 50`
*/
problem({
  number: 3236,
  title: "Smallest Missing Integer Greater Than Sequential Prefix Sum",
  difficulty: "Easy",
  pattern: "Prefix Sum",
  url: "https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",
  tests: [
    { args: [[1, 2, 3, 2, 5]], expected: 6 },
    { args: [[3, 4, 5, 1, 12, 14, 13]], expected: 15 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function missingInteger(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4284 · Smallest Stable Index I · Easy · Prefix Sum
 https://leetcode.com/problems/smallest-stable-index-i
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n` and an integer `k`.

For each index `i`, define its instability score as `max(nums[0..i]) - min(nums[i..n - 1])`.

In other words:

  - `max(nums[0..i])` is the largest value among the elements from index 0 to index `i`.
  - `min(nums[i..n - 1])` is the smallest value among the elements from index `i` to index `n - 1`.

An index `i` is called stable if its instability score is less than or equal to `k`.

Return the smallest stable index. If no such index exists, return -1.

Example 1:

Input: nums = [5,0,1,4], k = 3

Output: 3

Explanation:

  - At index 0: The maximum in `[5]` is 5, and the minimum in `[5, 0, 1, 4]` is 0, so the instability score is `5 - 0 = 5`.
  - At index 1: The maximum in `[5, 0]` is 5, and the minimum in `[0, 1, 4]` is 0, so the instability score is `5 - 0 = 5`.
  - At index 2: The maximum in `[5, 0, 1]` is 5, and the minimum in `[1, 4]` is 1, so the instability score is `5 - 1 = 4`.
  - At index 3: The maximum in `[5, 0, 1, 4]` is 5, and the minimum in `[4]` is 4, so the instability score is `5 - 4 = 1`.
  - This is the first index with an instability score less than or equal to `k = 3`. Thus, the answer is 3.

Example 2:

Input: nums = [3,2,1], k = 1

Output: -1

Explanation:

  - At index 0, the instability score is `3 - 1 = 2`.
  - At index 1, the instability score is `3 - 1 = 2`.
  - At index 2, the instability score is `3 - 1 = 2`.
  - None of these values is less than or equal to `k = 1`, so the answer is -1.

Example 3:

Input: nums = [0], k = 0

Output: 0

Explanation:

At index 0, the instability score is `0 - 0 = 0`, which is less than or equal to `k = 0`. Therefore, the answer is 0.

Constraints:

  - `1 <= nums.length <= 100`
  - `0 <= nums[i] <= 10^9`
  - `0 <= k <= 10^9`
*/
problem({
  number: 4284,
  title: "Smallest Stable Index I",
  difficulty: "Easy",
  pattern: "Prefix Sum",
  url: "https://leetcode.com/problems/smallest-stable-index-i",
  tests: [
    { args: [[5, 0, 1, 4], 3], expected: 3 },
    { args: [[3, 2, 1], 1], expected: -1 },
    { args: [[0], 0], expected: 0 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  solve: function firstStableIndex(nums, k) {
    // Write your solution here
  },
});

// ── Easy · Binary Search (3) ───────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #35 · Search Insert Position · Easy · Binary Search
 https://leetcode.com/problems/search-insert-position
 ──────────────────────────────────────────────────────────────────────

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:

  - `1 <= nums.length <= 10^4`
  - `-10^4 <= nums[i] <= 10^4`
  - `nums` contains distinct values sorted in ascending order.
  - `-10^4 <= target <= 10^4`
*/
problem({
  number: 35,
  title: "Search Insert Position",
  difficulty: "Easy",
  pattern: "Binary Search",
  url: "https://leetcode.com/problems/search-insert-position",
  tests: [
    { args: [[1, 3, 5, 6], 5], expected: 2 },
    { args: [[1, 3, 5, 6], 2], expected: 1 },
    { args: [[1, 3, 5, 6], 7], expected: 4 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  solve: function searchInsert(nums, target) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #69 · Sqrt(x) · Easy · Binary Search
 https://leetcode.com/problems/sqrtx
 ──────────────────────────────────────────────────────────────────────

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

  - For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

Constraints:

  - `0 <= x <= 2^31 - 1`
*/
problem({
  number: 69,
  title: "Sqrt(x)",
  difficulty: "Easy",
  pattern: "Binary Search",
  url: "https://leetcode.com/problems/sqrtx",
  tests: [
    { args: [4], expected: 2 },
    { args: [8], expected: 2 },
  ],
  /**
   * @param {number} x
   * @return {number}
   */
  solve: function mySqrt(x) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2210 · Find Target Indices After Sorting Array · Easy · Binary Search
 https://leetcode.com/problems/find-target-indices-after-sorting-array
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed integer array `nums` and a target element `target`.

A target index is an index `i` such that `nums[i] == target`.

Return a list of the target indices of `nums` after sorting `nums` in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.

Constraints:

  - `1 <= nums.length <= 100`
  - `1 <= nums[i], target <= 100`
*/
problem({
  number: 2210,
  title: "Find Target Indices After Sorting Array",
  difficulty: "Easy",
  pattern: "Binary Search",
  url: "https://leetcode.com/problems/find-target-indices-after-sorting-array",
  tests: [
    { args: [[1, 2, 5, 2, 3], 2], expected: [1, 2] },
    { args: [[1, 2, 5, 2, 3], 3], expected: [3] },
    { args: [[1, 2, 5, 2, 3], 5], expected: [4] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  solve: function targetIndices(nums, target) {
    // Write your solution here
  },
});

// ── Easy · Sorting & Greedy (2) ────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #628 · Maximum Product of Three Numbers · Easy · Sorting & Greedy
 https://leetcode.com/problems/maximum-product-of-three-numbers
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums`, find three numbers whose product is maximum and return the maximum product.

Example 1:

Input: nums = [1,2,3]
Output: 6

Example 2:

Input: nums = [1,2,3,4]
Output: 24

Example 3:

Input: nums = [-1,-2,-3]
Output: -6

Constraints:

  - `3 <= nums.length <= 10^4`
  - `-1000 <= nums[i] <= 1000`
*/
problem({
  number: 628,
  title: "Maximum Product of Three Numbers",
  difficulty: "Easy",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/maximum-product-of-three-numbers",
  tests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[1, 2, 3, 4]], expected: 24 },
    { args: [[-1, -2, -3]], expected: -6 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function maximumProduct(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3275 · Minimum Number of Pushes to Type Word I · Easy · Sorting & Greedy
 https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i
 ──────────────────────────────────────────────────────────────────────

You are given a string `word` containing distinct lowercase English letters.

Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key `2` is mapped with `["a","b","c"]`, we need to push the key one time to type `"a"`, two times to type `"b"`, and three times to type `"c"` .

It is allowed to remap the keys numbered `2` to `9` to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string `word`.

Return the minimum number of pushes needed to type `word` after remapping the keys.

An example mapping of letters to keys on a telephone keypad is given below. Note that `1`, `*`, `#`, and `0` do not map to any letters.

Example 1:

Input: word = "abcde"
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
"a" -> one push on key 2
"b" -> one push on key 3
"c" -> one push on key 4
"d" -> one push on key 5
"e" -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.

Example 2:

Input: word = "xycdefghij"
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
"x" -> one push on key 2
"y" -> two pushes on key 2
"c" -> one push on key 3
"d" -> two pushes on key 3
"e" -> one push on key 4
"f" -> one push on key 5
"g" -> one push on key 6
"h" -> one push on key 7
"i" -> one push on key 8
"j" -> one push on key 9
Total cost is 1 + 2 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1 = 12.
It can be shown that no other mapping can provide a lower cost.

Constraints:

  - `1 <= word.length <= 26`
  - `word` consists of lowercase English letters.
  - All letters in `word` are distinct.
*/
problem({
  number: 3275,
  title: "Minimum Number of Pushes to Type Word I",
  difficulty: "Easy",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i",
  tests: [
    { args: ["abcde"], expected: 5 },
    { args: ["xycdefghij"], expected: 12 },
  ],
  /**
   * @param {string} word
   * @return {number}
   */
  solve: function minimumPushes(word) {
    // Write your solution here
  },
});

// ── Easy · Stack & Parentheses (3) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #20 · Valid Parentheses · Easy · Stack & Parentheses
 https://leetcode.com/problems/valid-parentheses
 ──────────────────────────────────────────────────────────────────────

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

  - Open brackets must be closed by the same type of brackets.
  - Open brackets must be closed in the correct order.
  - Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

Constraints:

  - `1 <= s.length <= 10^4`
  - `s` consists of parentheses only `'()[]{}'`.
*/
problem({
  number: 20,
  title: "Valid Parentheses",
  difficulty: "Easy",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/valid-parentheses",
  tests: [
    { args: ["()"], expected: true },
    { args: ["()[]{}"], expected: true },
    { args: ["(]"], expected: false },
    { args: ["([])"], expected: true },
    { args: ["([)]"], expected: false },
  ],
  /**
   * @param {string} s
   * @return {boolean}
   */
  solve: function isValid(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1078 · Remove Outermost Parentheses · Easy · Stack & Parentheses
 https://leetcode.com/problems/remove-outermost-parentheses
 ──────────────────────────────────────────────────────────────────────

A valid parentheses string is either empty `""`, `"(" + A + ")"`, or `A + B`, where `A` and `B` are valid parentheses strings, and `+` represents string concatenation.

  - For example, `""`, `"()"`, `"(())()"`, and `"(()(()))"` are all valid parentheses strings.

A valid parentheses string `s` is primitive if it is nonempty, and there does not exist a way to split it into `s = A + B`, with `A` and `B` nonempty valid parentheses strings.

Given a valid parentheses string `s`, consider its primitive decomposition: `s = P1 + P2 + ... + Pk`, where `Pi` are primitive valid parentheses strings.

Return `s` after removing the outermost parentheses of every primitive string in the primitive decomposition of `s`.

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation:
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation:
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: s = "()()"
Output: ""
Explanation:
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

Constraints:

  - `1 <= s.length <= 10^5`
  - `s[i]` is either `'('` or `')'`.
  - `s` is a valid parentheses string.
*/
problem({
  number: 1078,
  title: "Remove Outermost Parentheses",
  difficulty: "Easy",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/remove-outermost-parentheses",
  tests: [
    { args: ["(()())(())"], expected: "()()()" },
    { args: ["(()())(())(()(()))"], expected: "()()()()(())" },
    { args: ["()()"], expected: "" },
  ],
  /**
   * @param {string} s
   * @return {string}
   */
  solve: function removeOuterParentheses(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1737 · Maximum Nesting Depth of the Parentheses · Easy · Stack & Parentheses
 https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
 ──────────────────────────────────────────────────────────────────────

Given a valid parentheses string `s`, return the nesting depth of `s`. The nesting depth is the maximum number of nested parentheses.

Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"

Output: 3

Explanation:

Digit 8 is inside of 3 nested parentheses in the string.

Example 2:

Input: s = "(1)+((2))+(((3)))"

Output: 3

Explanation:

Digit 3 is inside of 3 nested parentheses in the string.

Example 3:

Input: s = "()(())((()()))"

Output: 3

Constraints:

  - `1 <= s.length <= 100`
  - `s` consists of digits `0-9` and characters `'+'`, `'-'`, `'*'`, `'/'`, `'('`, and `')'`.
  - It is guaranteed that parentheses expression `s` is a VPS.
*/
problem({
  number: 1737,
  title: "Maximum Nesting Depth of the Parentheses",
  difficulty: "Easy",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses",
  tests: [
    { args: ["(1+(2*3)+((8)/4))+1"], expected: 3 },
    { args: ["(1)+((2))+(((3)))"], expected: 3 },
    { args: ["()(())((()()))"], expected: 3 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function maxDepth(s) {
    // Write your solution here
  },
});

// ── Easy · Monotonic Stack (1) ─────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1570 · Final Prices With a Special Discount in a Shop · Easy · Monotonic Stack
 https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `prices` where `prices[i]` is the price of the `i^th` item in a shop.

There is a special discount for items in the shop. If you buy the `i^th` item, then you will receive a discount equivalent to `prices[j]` where `j` is the minimum index such that `j > i` and `prices[j] <= prices[i]`. Otherwise, you will not receive any discount at all.

Return an integer array `answer` where `answer[i]` is the final price you will pay for the `i^th` item of the shop, considering the special discount.

Example 1:

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation:
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.

Example 2:

Input: prices = [1,2,3,4,5]
Output: [1,2,3,4,5]
Explanation: In this case, for all items, you will not receive any discount at all.

Example 3:

Input: prices = [10,1,1,6]
Output: [9,0,1,6]

Constraints:

  - `1 <= prices.length <= 500`
  - `1 <= prices[i] <= 1000`
*/
problem({
  number: 1570,
  title: "Final Prices With a Special Discount in a Shop",
  difficulty: "Easy",
  pattern: "Monotonic Stack",
  url: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop",
  tests: [
    { args: [[8, 4, 6, 2, 3]], expected: [4, 2, 4, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[10, 1, 1, 6]], expected: [9, 0, 1, 6] },
  ],
  /**
   * @param {number[]} prices
   * @return {number[]}
   */
  solve: function finalPrices(prices) {
    // Write your solution here
  },
});

// ── Easy · Linked List (2) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #21 · Merge Two Sorted Lists · Easy · Linked List
 https://leetcode.com/problems/merge-two-sorted-lists
 ──────────────────────────────────────────────────────────────────────

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

  - The number of nodes in both lists is in the range `[0, 50]`.
  - `-100 <= Node.val <= 100`
  - Both `list1` and `list2` are sorted in non-decreasing order.
*/
problem({
  number: 21,
  title: "Merge Two Sorted Lists",
  difficulty: "Easy",
  pattern: "Linked List",
  url: "https://leetcode.com/problems/merge-two-sorted-lists",
  types: { args: ["list", "list"], returns: "list" }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    {
      args: [
        [1, 2, 4],
        [1, 3, 4],
      ],
      expected: [1, 1, 2, 3, 4, 4],
    },
    { args: [[], []], expected: [] },
    { args: [[], [0]], expected: [0] },
  ],
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  solve: function mergeTwoLists(list1, list2) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #83 · Remove Duplicates from Sorted List · Easy · Linked List
 https://leetcode.com/problems/remove-duplicates-from-sorted-list
 ──────────────────────────────────────────────────────────────────────

Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:

  - The number of nodes in the list is in the range `[0, 300]`.
  - `-100 <= Node.val <= 100`
  - The list is guaranteed to be sorted in ascending order.
*/
problem({
  number: 83,
  title: "Remove Duplicates from Sorted List",
  difficulty: "Easy",
  pattern: "Linked List",
  url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list",
  types: { args: ["list"], returns: "list" }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    { args: [[1, 1, 2]], expected: [1, 2] },
    { args: [[1, 1, 2, 3, 3]], expected: [1, 2, 3] },
  ],
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  solve: function deleteDuplicates(head) {
    // Write your solution here
  },
});

// ── Easy · Binary Tree (2) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #94 · Binary Tree Inorder Traversal · Easy · Binary Tree
 https://leetcode.com/problems/binary-tree-inorder-traversal
 ──────────────────────────────────────────────────────────────────────

Given the `root` of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]

Output: [1,3,2]

Explanation:

Example 2:

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

Output: [4,2,6,5,7,1,3,9,8]

Explanation:

Example 3:

Input: root = []

Output: []

Example 4:

Input: root = [1]

Output: [1]

Constraints:

  - The number of nodes in the tree is in the range `[0, 100]`.
  - `-100 <= Node.val <= 100`

Follow up: Recursive solution is trivial, could you do it iteratively?
*/
problem({
  number: 94,
  title: "Binary Tree Inorder Traversal",
  difficulty: "Easy",
  pattern: "Binary Tree",
  url: "https://leetcode.com/problems/binary-tree-inorder-traversal",
  types: { args: ["tree"] }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    { args: [[1, null, 2, 3]], expected: [1, 3, 2] },
    {
      args: [[1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]],
      expected: [4, 2, 6, 5, 7, 1, 3, 9, 8],
    },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  solve: function inorderTraversal(root) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #100 · Same Tree · Easy · Binary Tree
 https://leetcode.com/problems/same-tree
 ──────────────────────────────────────────────────────────────────────

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:

  - The number of nodes in both trees is in the range `[0, 100]`.
  - `-10^4 <= Node.val <= 10^4`
*/
problem({
  number: 100,
  title: "Same Tree",
  difficulty: "Easy",
  pattern: "Binary Tree",
  url: "https://leetcode.com/problems/same-tree",
  types: { args: ["tree", "tree"] }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    {
      args: [
        [1, 2, 3],
        [1, 2, 3],
      ],
      expected: true,
    },
    {
      args: [
        [1, 2],
        [1, null, 2],
      ],
      expected: false,
    },
    {
      args: [
        [1, 2, 1],
        [1, 1, 2],
      ],
      expected: false,
    },
  ],
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  solve: function isSameTree(p, q) {
    // Write your solution here
  },
});

// ── Easy · Dynamic Programming (1) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #70 · Climbing Stairs · Easy · Dynamic Programming
 https://leetcode.com/problems/climbing-stairs
 ──────────────────────────────────────────────────────────────────────

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

  - `1 <= n <= 45`
*/
problem({
  number: 70,
  title: "Climbing Stairs",
  difficulty: "Easy",
  pattern: "Dynamic Programming",
  url: "https://leetcode.com/problems/climbing-stairs",
  tests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
  ],
  /**
   * @param {number} n
   * @return {number}
   */
  solve: function climbStairs(n) {
    // Write your solution here
  },
});

// ── Easy · Math & Number Theory (3) ────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #2106 · Find Greatest Common Divisor of Array · Easy · Math & Number Theory
 https://leetcode.com/problems/find-greatest-common-divisor-of-array
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums`, return the greatest common divisor of the smallest number and largest number in `nums`.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:

Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

Example 3:

Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.

Constraints:

  - `2 <= nums.length <= 1000`
  - `1 <= nums[i] <= 1000`
*/
problem({
  number: 2106,
  title: "Find Greatest Common Divisor of Array",
  difficulty: "Easy",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/find-greatest-common-divisor-of-array",
  tests: [
    { args: [[2, 5, 6, 9, 10]], expected: 2 },
    { args: [[7, 5, 6, 8, 3]], expected: 1 },
    { args: [[3, 3]], expected: 3 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function findGCD(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3995 · GCD of Odd and Even Sums · Easy · Math & Number Theory
 https://leetcode.com/problems/gcd-of-odd-and-even-sums
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n`. Your task is to compute the GCD (greatest common divisor) of two values:

  - `sumOdd`: the sum of the smallest `n` positive odd numbers.
  - `sumEven`: the sum of the smallest `n` positive even numbers.

Return the GCD of `sumOdd` and `sumEven`.

Example 1:

Input: n = 4

Output: 4

Explanation:

  - Sum of the first 4 odd numbers `sumOdd = 1 + 3 + 5 + 7 = 16`
  - Sum of the first 4 even numbers `sumEven = 2 + 4 + 6 + 8 = 20`

Hence, `GCD(sumOdd, sumEven) = GCD(16, 20) = 4`.

Example 2:

Input: n = 5

Output: 5

Explanation:

  - Sum of the first 5 odd numbers `sumOdd = 1 + 3 + 5 + 7 + 9 = 25`
  - Sum of the first 5 even numbers `sumEven = 2 + 4 + 6 + 8 + 10 = 30`

Hence, `GCD(sumOdd, sumEven) = GCD(25, 30) = 5`.

Constraints:

  - `1 <= n <= 1000`
*/
problem({
  number: 3995,
  title: "GCD of Odd and Even Sums",
  difficulty: "Easy",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/gcd-of-odd-and-even-sums",
  tests: [
    { args: [4], expected: 4 },
    { args: [5], expected: 5 },
  ],
  /**
   * @param {number} n
   * @return {number}
   */
  solve: function gcdOfOddEvenSums(n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4256 · Construct Uniform Parity Array I · Easy · Math & Number Theory
 https://leetcode.com/problems/construct-uniform-parity-array-i
 ──────────────────────────────────────────────────────────────────────

You are given an array `nums1` of `n` distinct integers.

You want to construct another array `nums2` of length `n` such that the elements in `nums2` are either all odd or all even.

For each index `i`, you must choose exactly one of the following (in any order):

  - `nums2[i] = nums1[i]`
  - `nums2[i] = nums1[i] - nums1[j]`, for an index `j != i`

Return `true` if it is possible to construct such an array, otherwise, return `false`.

Example 1:

Input: nums1 = [2,3]

Output: true

Explanation:

  - Choose `nums2[0] = nums1[0] - nums1[1] = 2 - 3 = -1`.
  - Choose `nums2[1] = nums1[1] = 3`.
  - `nums2 = [-1, 3]`, and both elements are odd. Thus, the answer is `true`.

Example 2:

Input: nums1 = [4,6]

Output: true

Explanation:

  - Choose `nums2[0] = nums1[0] = 4`.
  - Choose `nums2[1] = nums1[1] = 6`.
  - `nums2 = [4, 6]`, and all elements are even. Thus, the answer is `true`.

Constraints:

  - `1 <= n == nums1.length <= 100`
  - `1 <= nums1[i] <= 100`
  - `nums1` consists of distinct integers.
*/
problem({
  number: 4256,
  title: "Construct Uniform Parity Array I",
  difficulty: "Easy",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/construct-uniform-parity-array-i",
  tests: [
    { args: [[2, 3]], expected: true },
    { args: [[4, 6]], expected: true },
  ],
  /**
   * @param {number[]} nums1
   * @return {boolean}
   */
  solve: function uniformArray(nums1) {
    // Write your solution here
  },
});

// ── Easy · Digits & Number Arithmetic (11) ──────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #9 · Palindrome Number · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/palindrome-number
 ──────────────────────────────────────────────────────────────────────

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

  - `-2^31 <= x <= 2^31 - 1`

Follow up: Could you solve it without converting the integer to a string?
*/
problem({
  number: 9,
  title: "Palindrome Number",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/palindrome-number",
  tests: [
    { args: [121], expected: true },
    { args: [-121], expected: false },
    { args: [10], expected: false },
  ],
  /**
   * @param {number} x
   * @return {boolean}
   */
  solve: function isPalindrome(x) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #66 · Plus One · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/plus-one
 ──────────────────────────────────────────────────────────────────────

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i^th` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

Constraints:

  - `1 <= digits.length <= 100`
  - `0 <= digits[i] <= 9`
  - `digits` does not contain any leading `0`'s.
*/
problem({
  number: 66,
  title: "Plus One",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/plus-one",
  tests: [
    { args: [[1, 2, 3]], expected: [1, 2, 4] },
    { args: [[4, 3, 2, 1]], expected: [4, 3, 2, 2] },
    { args: [[9]], expected: [1, 0] },
  ],
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  solve: function plusOne(digits) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #67 · Add Binary · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/add-binary
 ──────────────────────────────────────────────────────────────────────

Given two binary strings `a` and `b`, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

  - `1 <= a.length, b.length <= 10^4`
  - `a` and `b` consist only of `'0'` or `'1'` characters.
  - Each string does not contain leading zeros except for the zero itself.
*/
problem({
  number: 67,
  title: "Add Binary",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/add-binary",
  tests: [
    { args: ["11", "1"], expected: "100" },
    { args: ["1010", "1011"], expected: "10101" },
  ],
  /**
   * @param {string} a
   * @param {string} b
   * @return {string}
   */
  solve: function addBinary(a, b) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #415 · Add Strings · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/add-strings
 ──────────────────────────────────────────────────────────────────────

Given two non-negative integers, `num1` and `num2` represented as string, return the sum of `num1` and `num2` as a string.

You must solve the problem without using any built-in library for handling large integers (such as `BigInteger`). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"

Constraints:

  - `1 <= num1.length, num2.length <= 10^4`
  - `num1` and `num2` consist of only digits.
  - `num1` and `num2` don't have any leading zeros except for the zero itself.
*/
problem({
  number: 415,
  title: "Add Strings",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/add-strings",
  tests: [
    { args: ["11", "123"], expected: "134" },
    { args: ["456", "77"], expected: "533" },
    { args: ["0", "0"], expected: "0" },
  ],
  /**
   * @param {string} num1
   * @param {string} num2
   * @return {string}
   */
  solve: function addStrings(num1, num2) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3626 · Smallest Divisible Digit Product I · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/smallest-divisible-digit-product-i
 ──────────────────────────────────────────────────────────────────────

You are given two integers `n` and `t`. Return the smallest number greater than or equal to `n` such that the product of its digits is divisible by `t`.

Example 1:

Input: n = 10, t = 2

Output: 10

Explanation:

The digit product of 10 is 0, which is divisible by 2, making it the smallest number greater than or equal to 10 that satisfies the condition.

Example 2:

Input: n = 15, t = 3

Output: 16

Explanation:

The digit product of 16 is 6, which is divisible by 3, making it the smallest number greater than or equal to 15 that satisfies the condition.

Constraints:

  - `1 <= n <= 100`
  - `1 <= t <= 10`
*/
problem({
  number: 3626,
  title: "Smallest Divisible Digit Product I",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/smallest-divisible-digit-product-i",
  tests: [
    { args: [10, 2], expected: 10 },
    { args: [15, 3], expected: 16 },
  ],
  /**
   * @param {number} n
   * @param {number} t
   * @return {number}
   */
  solve: function smallestNumber(n, t) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3799 · Unique 3-Digit Even Numbers · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/unique-3-digit-even-numbers
 ──────────────────────────────────────────────────────────────────────

You are given an array of digits called `digits`. Your task is to determine the number of distinct three-digit even numbers that can be formed using these digits.

Note: Each copy of a digit can only be used once per number, and there may not be leading zeros.

Example 1:

Input: digits = [1,2,3,4]

Output: 12

Explanation: The 12 distinct 3-digit even numbers that can be formed are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432. Note that 222 cannot be formed because there is only 1 copy of the digit 2.

Example 2:

Input: digits = [0,2,2]

Output: 2

Explanation: The only 3-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because it appears twice in the array.

Example 3:

Input: digits = [6,6,6]

Output: 1

Explanation: Only 666 can be formed.

Example 4:

Input: digits = [1,3,5]

Output: 0

Explanation: No even 3-digit numbers can be formed.

Constraints:

  - `3 <= digits.length <= 10`
  - `0 <= digits[i] <= 9`
*/
problem({
  number: 3799,
  title: "Unique 3-Digit Even Numbers",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/unique-3-digit-even-numbers",
  tests: [
    { args: [[1, 2, 3, 4]], expected: 12 },
    { args: [[0, 2, 2]], expected: 2 },
    { args: [[6, 6, 6]], expected: 1 },
    { args: [[1, 3, 5]], expected: 0 },
  ],
  /**
   * @param {number[]} digits
   * @return {number}
   */
  solve: function totalNumbers(digits) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3859 · Maximum Product of Two Digits · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/maximum-product-of-two-digits
 ──────────────────────────────────────────────────────────────────────

You are given a positive integer `n`.

Return the maximum product of any two digits in `n`.

Note: You may use the same digit twice if it appears more than once in `n`.

Example 1:

Input: n = 31

Output: 3

Explanation:

  - The digits of `n` are `[3, 1]`.
  - The possible products of any two digits are: `3 * 1 = 3`.
  - The maximum product is 3.

Example 2:

Input: n = 22

Output: 4

Explanation:

  - The digits of `n` are `[2, 2]`.
  - The possible products of any two digits are: `2 * 2 = 4`.
  - The maximum product is 4.

Example 3:

Input: n = 124

Output: 8

Explanation:

  - The digits of `n` are `[1, 2, 4]`.
  - The possible products of any two digits are: `1 * 2 = 2`, `1 * 4 = 4`, `2 * 4 = 8`.
  - The maximum product is 8.

Constraints:

  - `10 <= n <= 10^9`
*/
problem({
  number: 3859,
  title: "Maximum Product of Two Digits",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/maximum-product-of-two-digits",
  tests: [
    { args: [31], expected: 3 },
    { args: [22], expected: 4 },
    { args: [124], expected: 8 },
  ],
  /**
   * @param {number} n
   * @return {number}
   */
  solve: function maxProduct(n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3869 · Smallest Index With Digit Sum Equal to Index · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums`.

Return the smallest index `i` such that the sum of the digits of `nums[i]` is equal to `i`.

If no such index exists, return `-1`.

Example 1:

Input: nums = [1,3,2]

Output: 2

Explanation:

  - For `nums[2] = 2`, the sum of digits is 2, which is equal to index `i = 2`. Thus, the output is 2.

Example 2:

Input: nums = [1,10,11]

Output: 1

Explanation:

  - For `nums[1] = 10`, the sum of digits is `1 + 0 = 1`, which is equal to index `i = 1`.
  - For `nums[2] = 11`, the sum of digits is `1 + 1 = 2`, which is equal to index `i = 2`.
  - Since index 1 is the smallest, the output is 1.

Example 3:

Input: nums = [1,2,3]

Output: -1

Explanation:

  - Since no index satisfies the condition, the output is -1.

Constraints:

  - `1 <= nums.length <= 100`
  - `0 <= nums[i] <= 1000`
*/
problem({
  number: 3869,
  title: "Smallest Index With Digit Sum Equal to Index",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index",
  tests: [
    { args: [[1, 3, 2]], expected: 2 },
    { args: [[1, 10, 11]], expected: 1 },
    { args: [[1, 2, 3]], expected: -1 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function smallestIndex(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3918 · Check Divisibility by Digit Sum and Product · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product
 ──────────────────────────────────────────────────────────────────────

You are given a positive integer `n`. Determine whether `n` is divisible by the sum of the following two values:

  - The digit sum of `n` (the sum of its digits).
  - The digit product of `n` (the product of its digits).

Return `true` if `n` is divisible by this sum; otherwise, return `false`.

Example 1:

Input: n = 99

Output: true

Explanation:

Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.

Example 2:

Input: n = 23

Output: false

Explanation:

Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.

Constraints:

  - `1 <= n <= 10^6`
*/
problem({
  number: 3918,
  title: "Check Divisibility by Digit Sum and Product",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product",
  tests: [
    { args: [99], expected: true },
    { args: [23], expected: false },
  ],
  /**
   * @param {number} n
   * @return {boolean}
   */
  solve: function checkDivisibility(n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4135 · Concatenate Non-Zero Digits and Multiply by Sum I · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n`.

Form a new integer `x` by concatenating all the non-zero digits of `n` in their original order. If there are no non-zero digits, `x = 0`.

Let `sum` be the sum of digits in `x`.

Return an integer representing the value of `x * sum`.

Example 1:

Input: n = 10203004

Output: 12340

Explanation:

  - The non-zero digits are 1, 2, 3, and 4. Thus, `x = 1234`.
  - The sum of digits is `sum = 1 + 2 + 3 + 4 = 10`.
  - Therefore, the answer is `x * sum = 1234 * 10 = 12340`.

Example 2:

Input: n = 1000

Output: 1

Explanation:

  - The non-zero digit is 1, so `x = 1` and `sum = 1`.
  - Therefore, the answer is `x * sum = 1 * 1 = 1`.

Constraints:

  - `0 <= n <= 10^9`
*/
problem({
  number: 4135,
  title: "Concatenate Non-Zero Digits and Multiply by Sum I",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i",
  tests: [
    { args: [10203004], expected: 12340 },
    { args: [1000], expected: 1 },
  ],
  /**
   * @param {number} n
   * @return {number}
   */
  solve: function sumAndMultiply(n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4245 · Count Commas in Range · Easy · Digits & Number Arithmetic
 https://leetcode.com/problems/count-commas-in-range
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n`.

Return the total number of commas used when writing all integers from `[1, n]` (inclusive) in standard number formatting.

In standard formatting:

  - A comma is inserted after every three digits from the right.
  - Numbers with fewer than 4 digits contain no commas.

Example 1:

Input: n = 1002

Output: 3

Explanation:

The numbers `"1,000"`, `"1,001"`, and `"1,002"` each contain one comma, giving a total of 3.

Example 2:

Input: n = 998

Output: 0

Explanation:

All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.

Constraints:

  - `1 <= n <= 10^5`
*/
problem({
  number: 4245,
  title: "Count Commas in Range",
  difficulty: "Easy",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/count-commas-in-range",
  tests: [
    { args: [1002], expected: 3 },
    { args: [998], expected: 0 },
  ],
  /**
   * @param {number} n
   * @return {number}
   */
  solve: function countCommas(n) {
    // Write your solution here
  },
});

// ── Easy · Bit Manipulation (2) ────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #136 · Single Number · Easy · Bit Manipulation
 https://leetcode.com/problems/single-number
 ──────────────────────────────────────────────────────────────────────

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

Constraints:

  - `1 <= nums.length <= 3 * 10^4`
  - `-3 * 10^4 <= nums[i] <= 3 * 10^4`
  - Each element in the array appears twice except for one element which appears only once.
*/
problem({
  number: 136,
  title: "Single Number",
  difficulty: "Easy",
  pattern: "Bit Manipulation",
  url: "https://leetcode.com/problems/single-number",
  tests: [
    { args: [[2, 2, 1]], expected: 1 },
    { args: [[4, 1, 2, 1, 2]], expected: 4 },
    { args: [[1]], expected: 1 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function singleNumber(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1444 · Number of Steps to Reduce a Number to Zero · Easy · Bit Manipulation
 https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
 ──────────────────────────────────────────────────────────────────────

Given an integer `num`, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.

Example 1:

Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:

Input: num = 8
Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.

Example 3:

Input: num = 123
Output: 12

Constraints:

  - `0 <= num <= 10^6`
*/
problem({
  number: 1444,
  title: "Number of Steps to Reduce a Number to Zero",
  difficulty: "Easy",
  pattern: "Bit Manipulation",
  url: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero",
  tests: [
    { args: [14], expected: 6 },
    { args: [8], expected: 4 },
    { args: [123], expected: 12 },
  ],
  /**
   * @param {number} num
   * @return {number}
   */
  solve: function numberOfSteps(num) {
    // Write your solution here
  },
});

// ── Easy · String Manipulation (7) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #13 · Roman to Integer · Easy · String Manipulation
 https://leetcode.com/problems/roman-to-integer
 ──────────────────────────────────────────────────────────────────────

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

  - `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
  - `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
  - `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:

  - `1 <= s.length <= 15`
  - `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
  - It is guaranteed that `s` is a valid roman numeral in the range `[1, 3999]`.
*/
problem({
  number: 13,
  title: "Roman to Integer",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/roman-to-integer",
  tests: [
    { args: ["III"], expected: 3 },
    { args: ["LVIII"], expected: 58 },
    { args: ["MCMXCIV"], expected: 1994 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function romanToInt(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #14 · Longest Common Prefix · Easy · String Manipulation
 https://leetcode.com/problems/longest-common-prefix
 ──────────────────────────────────────────────────────────────────────

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

  - `1 <= strs.length <= 200`
  - `0 <= strs[i].length <= 200`
  - `strs[i]` consists of only lowercase English letters if it is non-empty.
*/
problem({
  number: 14,
  title: "Longest Common Prefix",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/longest-common-prefix",
  tests: [
    { args: [["flower", "flow", "flight"]], expected: "fl" },
    { args: [["dog", "racecar", "car"]], expected: "" },
  ],
  /**
   * @param {string[]} strs
   * @return {string}
   */
  solve: function longestCommonPrefix(strs) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #28 · Find the Index of the First Occurrence in a String · Easy · String Manipulation
 https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 ──────────────────────────────────────────────────────────────────────

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:

  - `1 <= haystack.length, needle.length <= 10^4`
  - `haystack` and `needle` consist of only lowercase English characters.
*/
problem({
  number: 28,
  title: "Find the Index of the First Occurrence in a String",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",
  tests: [
    { args: ["sadbutsad", "sad"], expected: 0 },
    { args: ["leetcode", "leeto"], expected: -1 },
  ],
  /**
   * @param {string} haystack
   * @param {string} needle
   * @return {number}
   */
  solve: function strStr(haystack, needle) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #58 · Length of Last Word · Easy · String Manipulation
 https://leetcode.com/problems/length-of-last-word
 ──────────────────────────────────────────────────────────────────────

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

  - `1 <= s.length <= 10^4`
  - `s` consists of only English letters and spaces `' '`.
  - There will be at least one word in `s`.
*/
problem({
  number: 58,
  title: "Length of Last Word",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/length-of-last-word",
  tests: [
    { args: ["Hello World"], expected: 5 },
    { args: ["   fly me   to   the moon  "], expected: 4 },
    { args: ["luffy is still joyboy"], expected: 6 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function lengthOfLastWord(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #459 · Repeated Substring Pattern · Easy · String Manipulation
 https://leetcode.com/problems/repeated-substring-pattern
 ──────────────────────────────────────────────────────────────────────

Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:

Input: s = "aba"
Output: false

Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

Constraints:

  - `1 <= s.length <= 10^4`
  - `s` consists of lowercase English letters.
*/
problem({
  number: 459,
  title: "Repeated Substring Pattern",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/repeated-substring-pattern",
  tests: [
    { args: ["abab"], expected: true },
    { args: ["aba"], expected: false },
    { args: ["abcabcabcabc"], expected: true },
  ],
  /**
   * @param {string} s
   * @return {boolean}
   */
  solve: function repeatedSubstringPattern(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2099 · Number of Strings That Appear as Substrings in Word · Easy · String Manipulation
 https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word
 ──────────────────────────────────────────────────────────────────────

Given an array of strings `patterns` and a string `word`, return the number of strings in `patterns` that exist as a substring in `word`.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: patterns = ["a","abc","bc","d"], word = "abc"
Output: 3
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.

Example 2:

Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
Output: 2
Explanation:
- "a" appears as a substring in "aaaaabbbbb".
- "b" appears as a substring in "aaaaabbbbb".
- "c" does not appear as a substring in "aaaaabbbbb".
2 of the strings in patterns appear as a substring in word.

Example 3:

Input: patterns = ["a","a","a"], word = "ab"
Output: 3
Explanation: Each of the patterns appears as a substring in word "ab".

Constraints:

  - `1 <= patterns.length <= 100`
  - `1 <= patterns[i].length <= 100`
  - `1 <= word.length <= 100`
  - `patterns[i]` and `word` consist of lowercase English letters.
*/
problem({
  number: 2099,
  title: "Number of Strings That Appear as Substrings in Word",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word",
  tests: [
    { args: [["a", "abc", "bc", "d"], "abc"], expected: 3 },
    { args: [["a", "b", "c"], "aaaaabbbbb"], expected: 2 },
    { args: [["a", "a", "a"], "ab"], expected: 3 },
  ],
  /**
   * @param {string[]} patterns
   * @param {string} word
   * @return {number}
   */
  solve: function numOfStrings(patterns, word) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3811 · Reverse Degree of a String · Easy · String Manipulation
 https://leetcode.com/problems/reverse-degree-of-a-string
 ──────────────────────────────────────────────────────────────────────

Given a string `s`, calculate its reverse degree.

The reverse degree is calculated as follows:

  - For each character, multiply its position in the reversed alphabet (`'a'` = 26, `'b'` = 25, ..., `'z'` = 1) with its position in the string (1-indexed).
  - Sum these products for all characters in the string.

Return the reverse degree of `s`.

Example 1:

Input: s = "abc"

Output: 148

Explanation:

      Letter
      Index in Reversed Alphabet
      Index in String
      Product

      `'a'`
      26
      1
      26

      `'b'`
      25
      2
      50

      `'c'`
      24
      3
      72

The reversed degree is `26 + 50 + 72 = 148`.

Example 2:

Input: s = "zaza"

Output: 160

Explanation:

      Letter
      Index in Reversed Alphabet
      Index in String
      Product

      `'z'`
      1
      1
      1

      `'a'`
      26
      2
      52

      `'z'`
      1
      3
      3

      `'a'`
      26
      4
      104

The reverse degree is `1 + 52 + 3 + 104 = 160`.

Constraints:

  - `1 <= s.length <= 1000`
  - `s` contains only lowercase English letters.
*/
problem({
  number: 3811,
  title: "Reverse Degree of a String",
  difficulty: "Easy",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/reverse-degree-of-a-string",
  tests: [
    { args: ["abc"], expected: 148 },
    { args: ["zaza"], expected: 160 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function reverseDegree(s) {
    // Write your solution here
  },
});

// ── Easy · Matrix & Geometry (3) ───────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #866 · Rectangle Overlap · Easy · Matrix & Geometry
 https://leetcode.com/problems/rectangle-overlap
 ──────────────────────────────────────────────────────────────────────

An axis-aligned rectangle is represented as a list `[x1, y1, x2, y2]`, where `(x1, y1)` is the coordinate of its bottom-left corner, and `(x2, y2)` is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles `rec1` and `rec2`, return `true` if they overlap, otherwise return `false`.

Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true

Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false

Example 3:

Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false

Constraints:

  - `rec1.length == 4`
  - `rec2.length == 4`
  - `-10^9 <= rec1[i], rec2[i] <= 10^9`
  - `rec1` and `rec2` represent a valid rectangle with a non-zero area.
*/
problem({
  number: 866,
  title: "Rectangle Overlap",
  difficulty: "Easy",
  pattern: "Matrix & Geometry",
  url: "https://leetcode.com/problems/rectangle-overlap",
  tests: [
    {
      args: [
        [0, 0, 2, 2],
        [1, 1, 3, 3],
      ],
      expected: true,
    },
    {
      args: [
        [0, 0, 1, 1],
        [1, 0, 2, 1],
      ],
      expected: false,
    },
    {
      args: [
        [0, 0, 1, 1],
        [2, 2, 3, 3],
      ],
      expected: false,
    },
  ],
  /**
   * @param {number[]} rec1
   * @param {number[]} rec2
   * @return {boolean}
   */
  solve: function isRectangleOverlap(rec1, rec2) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1386 · Shift 2D Grid · Easy · Matrix & Geometry
 https://leetcode.com/problems/shift-2d-grid
 ──────────────────────────────────────────────────────────────────────

Given a 2D `grid` of size `m x n` and an integer `k`. You need to shift the `grid` `k` times.

In one shift operation:

  - Element at `grid[i][j]` moves to `grid[i][j + 1]`.
  - Element at `grid[i][n - 1]` moves to `grid[i + 1][0]`.
  - Element at `grid[m - 1][n - 1]` moves to `grid[0][0]`.

Return the 2D grid after applying shift operation `k` times.

Example 1:

Input: `grid` = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]

Example 2:

Input: `grid` = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

Example 3:

Input: `grid` = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]

Constraints:

  - `m == grid.length`
  - `n == grid[i].length`
  - `1 <= m <= 50`
  - `1 <= n <= 50`
  - `-1000 <= grid[i][j] <= 1000`
  - `0 <= k <= 100`
*/
problem({
  number: 1386,
  title: "Shift 2D Grid",
  difficulty: "Easy",
  pattern: "Matrix & Geometry",
  url: "https://leetcode.com/problems/shift-2d-grid",
  tests: [
    {
      args: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1,
      ],
      expected: [
        [9, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
    },
    {
      args: [
        [
          [3, 8, 1, 9],
          [19, 7, 2, 5],
          [4, 6, 11, 10],
          [12, 0, 21, 13],
        ],
        4,
      ],
      expected: [
        [12, 0, 21, 13],
        [3, 8, 1, 9],
        [19, 7, 2, 5],
        [4, 6, 11, 10],
      ],
    },
    {
      args: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        9,
      ],
      expected: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    },
  ],
  /**
   * @param {number[][]} grid
   * @param {number} k
   * @return {number[][]}
   */
  solve: function shiftGrid(grid, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4342 · Create Grid With Exactly One Path · Easy · Matrix & Geometry
 https://leetcode.com/problems/create-grid-with-exactly-one-path
 ──────────────────────────────────────────────────────────────────────

You are given two integers `m` and `n`, representing the number of rows and columns of a grid.

Construct any `m x n` grid consisting only of the characters `'.'` and `'#'`, where:

  - `'.'` represents a free cell.
  - `'#'` represents an obstacle cell.

A valid path is a sequence of free cells that:

  - Starts at the top-left cell `(0, 0)`.
  - Ends at the bottom-right cell `(m - 1, n - 1)`.
  - Moves only:

    Right, from `(i, j)` to `(i, j + 1)`, or

    - Down, from `(i, j)` to `(i + 1, j)`.

Return any grid such that there is exactly one valid path from the top-left cell to the bottom-right cell.

Example 1:

Input: m = 2, n = 3

Output: ["..#","#.."]

Explanation:

The only valid path is: `(0,0) → (0,1) → (1,1) → (1,2)`

Example 2:

Input: m = 3, n = 3

Output: ["..#","#..","##."]

Explanation:

The only valid path is: `(0,0) → (0,1) → (1,1) → (1,2) → (2,2)`

Example 3:

Input: m = 1, n = 4

Output: ["...."]

Explanation:

The only valid path is: `(0,0) → (0,1) → (0,2) → (0,3)`

Constraints:

  - `1 <= m, n <= 25`
*/
problem({
  number: 4342,
  title: "Create Grid With Exactly One Path",
  difficulty: "Easy",
  pattern: "Matrix & Geometry",
  url: "https://leetcode.com/problems/create-grid-with-exactly-one-path",
  check: true, // validated by a custom checker (see CHECKERS in the runner)
  tests: [
    { args: [2, 3], expected: ["..#", "#.."] },
    { args: [3, 3], expected: ["..#", "#..", "##."] },
    { args: [1, 4], expected: ["...."] },
  ],
  /**
   * @param {number} m
   * @param {number} n
   * @return {string[]}
   */
  solve: function createGrid(m, n) {
    // Write your solution here
  },
});

// ── Easy · Design & Heap (1) ───────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #789 · Kth Largest Element in a Stream · Easy · Design & Heap
 https://leetcode.com/problems/kth-largest-element-in-a-stream
 ──────────────────────────────────────────────────────────────────────

You are part of a university admissions office and need to keep track of the `kth` highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

You are tasked to implement a class which, for a given integer `k`, maintains a stream of test scores and continuously returns the `k`th highest test score after a new score has been submitted. More specifically, we are looking for the `k`th highest score in the sorted list of all scores.

Implement the `KthLargest` class:

  - `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of test scores `nums`.
  - `int add(int val)` Adds a new test score `val` to the stream and returns the element representing the `k^th` largest element in the pool of test scores so far.

Example 1:

Input:

["KthLargest", "add", "add", "add", "add", "add"]

[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

Output: [null, 4, 5, 5, 8, 8]

Explanation:

KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);

kthLargest.add(3); // return 4

kthLargest.add(5); // return 5

kthLargest.add(10); // return 5

kthLargest.add(9); // return 8

kthLargest.add(4); // return 8

Example 2:

Input:

["KthLargest", "add", "add", "add", "add"]

[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

Output: [null, 7, 7, 7, 8]

Explanation:

KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);

kthLargest.add(2); // return 7

kthLargest.add(10); // return 7

kthLargest.add(9); // return 7

kthLargest.add(9); // return 8

Constraints:

  - `0 <= nums.length <= 10^4`
  - `1 <= k <= nums.length + 1`
  - `-10^4 <= nums[i] <= 10^4`
  - `-10^4 <= val <= 10^4`
  - At most `10^4` calls will be made to `add`.
*/
problem({
  number: 789,
  title: "Kth Largest Element in a Stream",
  difficulty: "Easy",
  pattern: "Design & Heap",
  url: "https://leetcode.com/problems/kth-largest-element-in-a-stream",
  design: true,
  tests: [
    {
      args: [
        ["KthLargest", "add", "add", "add", "add", "add"],
        [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]],
      ],
      expected: [null, 4, 5, 5, 8, 8],
    },
    {
      args: [
        ["KthLargest", "add", "add", "add", "add"],
        [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]],
      ],
      expected: [null, 7, 7, 7, 8],
    },
  ],
  solve: class KthLargest {
    /** @param {number} k @param {number[]} nums */
    constructor(k, nums) {
      // Write your solution here
    }

    /** @return {number} */
    add(val) {
      // Write your solution here
    }
  },
});

// ── Easy · Array Basics & Simulation (8) ───────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #485 · Max Consecutive Ones · Easy · Array Basics & Simulation
 https://leetcode.com/problems/max-consecutive-ones
 ──────────────────────────────────────────────────────────────────────

Given a binary array `nums`, return the maximum number of consecutive `1`'s in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:

  - `1 <= nums.length <= 10^5`
  - `nums[i]` is either `0` or `1`.
*/
problem({
  number: 485,
  title: "Max Consecutive Ones",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/max-consecutive-ones",
  tests: [
    { args: [[1, 1, 0, 1, 1, 1]], expected: 3 },
    { args: [[1, 0, 1, 1, 0, 1]], expected: 2 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function findMaxConsecutiveOnes(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1574 · Maximum Product of Two Elements in an Array · Easy · Array Basics & Simulation
 https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
 ──────────────────────────────────────────────────────────────────────

Given the array of integers `nums`, you will choose two different indices `i` and `j` of that array. Return the maximum value of `(nums[i]-1)*(nums[j]-1)`.

Example 1:

Input: nums = [3,4,5,2]
Output: 12
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Example 3:

Input: nums = [3,7]
Output: 12

Constraints:

  - `2 <= nums.length <= 500`
  - `1 <= nums[i] <= 10^3`
*/
problem({
  number: 1574,
  title: "Maximum Product of Two Elements in an Array",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array",
  tests: [
    { args: [[3, 4, 5, 2]], expected: 12 },
    { args: [[1, 5, 4, 5]], expected: 16 },
    { args: [[3, 7]], expected: 12 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function maxProduct(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1580 · Shuffle the Array · Easy · Array Basics & Simulation
 https://leetcode.com/problems/shuffle-the-array
 ──────────────────────────────────────────────────────────────────────

Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

Constraints:

  - `1 <= n <= 500`
  - `nums.length == 2n`
  - `1 <= nums[i] <= 10^3`
*/
problem({
  number: 1580,
  title: "Shuffle the Array",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/shuffle-the-array",
  tests: [
    { args: [[2, 5, 1, 3, 4, 7], 3], expected: [2, 3, 5, 4, 1, 7] },
    { args: [[1, 2, 3, 4, 4, 3, 2, 1], 4], expected: [1, 4, 2, 3, 3, 2, 4, 1] },
    { args: [[1, 1, 2, 2], 2], expected: [1, 2, 1, 2] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} n
   * @return {number[]}
   */
  solve: function shuffle(nums, n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1791 · Richest Customer Wealth · Easy · Array Basics & Simulation
 https://leetcode.com/problems/richest-customer-wealth
 ──────────────────────────────────────────────────────────────────────

You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i^th` customer has in the `j^th` bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
`1st customer has wealth = 1 + 2 + 3 = 6
``2nd customer has wealth = 3 + 2 + 1 = 6
`Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

Constraints:

  - `m == accounts.length`
  - `n == accounts[i].length`
  - `1 <= m, n <= 50`
  - `1 <= accounts[i][j] <= 100`
*/
problem({
  number: 1791,
  title: "Richest Customer Wealth",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/richest-customer-wealth",
  tests: [
    {
      args: [
        [
          [1, 2, 3],
          [3, 2, 1],
        ],
      ],
      expected: 6,
    },
    {
      args: [
        [
          [1, 5],
          [7, 3],
          [3, 5],
        ],
      ],
      expected: 10,
    },
    {
      args: [
        [
          [2, 8, 7],
          [7, 1, 3],
          [1, 9, 5],
        ],
      ],
      expected: 17,
    },
  ],
  /**
   * @param {number[][]} accounts
   * @return {number}
   */
  solve: function maximumWealth(accounts) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2058 · Concatenation of Array · Easy · Array Basics & Simulation
 https://leetcode.com/problems/concatenation-of-array
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` (0-indexed).

Specifically, `ans` is the concatenation of two `nums` arrays.

Return the array `ans`.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

Constraints:

  - `n == nums.length`
  - `1 <= n <= 1000`
  - `1 <= nums[i] <= 1000`
*/
problem({
  number: 2058,
  title: "Concatenation of Array",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/concatenation-of-array",
  tests: [
    { args: [[1, 2, 1]], expected: [1, 2, 1, 1, 2, 1] },
    { args: [[1, 3, 2, 1]], expected: [1, 3, 2, 1, 1, 3, 2, 1] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function getConcatenation(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2496 · Count Days Spent Together · Easy · Array Basics & Simulation
 https://leetcode.com/problems/count-days-spent-together
 ──────────────────────────────────────────────────────────────────────

Alice and Bob are traveling to Rome for separate business meetings.

You are given 4 strings `arriveAlice`, `leaveAlice`, `arriveBob`, and `leaveBob`. Alice will be in the city from the dates `arriveAlice` to `leaveAlice` (inclusive), while Bob will be in the city from the dates `arriveBob` to `leaveBob` (inclusive). Each will be a 5-character string in the format `"MM-DD"`, corresponding to the month and day of the date.

Return the total number of days that Alice and Bob are in Rome together.

You can assume that all dates occur in the same calendar year, which is not a leap year. Note that the number of days per month can be represented as: `[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]`.

Example 1:

Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
Output: 3
Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.

Example 2:

Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
Output: 0
Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.

Constraints:

  - All dates are provided in the format `"MM-DD"`.
  - Alice and Bob's arrival dates are earlier than or equal to their leaving dates.
  - The given dates are valid dates of a non-leap year.
*/
problem({
  number: 2496,
  title: "Count Days Spent Together",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/count-days-spent-together",
  tests: [
    { args: ["08-15", "08-18", "08-16", "08-19"], expected: 3 },
    { args: ["10-01", "10-31", "11-01", "12-31"], expected: 0 },
  ],
  /**
   * @param {string} arriveAlice
   * @param {string} leaveAlice
   * @param {string} arriveBob
   * @param {string} leaveBob
   * @return {number}
   */
  solve: function countDaysTogether(
    arriveAlice,
    leaveAlice,
    arriveBob,
    leaveBob,
  ) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2844 · Sum of Squares of Special Elements · Easy · Array Basics & Simulation
 https://leetcode.com/problems/sum-of-squares-of-special-elements
 ──────────────────────────────────────────────────────────────────────

You are given a 1-indexed integer array `nums` of length `n`.

An element `nums[i]` of `nums` is called special if `i` divides `n`, i.e. `n % i == 0`.

Return the sum of the squares of all special elements of `nums`.

Example 1:

Input: nums = [1,2,3,4]
Output: 21
Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4.
Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.

Example 2:

Input: nums = [2,7,1,19,18,3]
Output: 63
Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6.
Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63.

Constraints:

  - `1 <= nums.length == n <= 50`
  - `1 <= nums[i] <= 50`
*/
problem({
  number: 2844,
  title: "Sum of Squares of Special Elements",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/sum-of-squares-of-special-elements",
  tests: [
    { args: [[1, 2, 3, 4]], expected: 21 },
    { args: [[2, 7, 1, 19, 18, 3]], expected: 63 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function sumOfSquares(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3347 · Distribute Elements Into Two Arrays I · Easy · Array Basics & Simulation
 https://leetcode.com/problems/distribute-elements-into-two-arrays-i
 ──────────────────────────────────────────────────────────────────────

You are given a 1-indexed array of distinct integers `nums` of length `n`.

You need to distribute all the elements of `nums` between two arrays `arr1` and `arr2` using `n` operations. In the first operation, append `nums[1]` to `arr1`. In the second operation, append `nums[2]` to `arr2`. Afterwards, in the `i^th` operation:

  - If the last element of `arr1` is greater than the last element of `arr2`, append `nums[i]` to `arr1`. Otherwise, append `nums[i]` to `arr2`.

The array `result` is formed by concatenating the arrays `arr1` and `arr2`. For example, if `arr1 == [1,2,3]` and `arr2 == [4,5,6]`, then `result = [1,2,3,4,5,6]`.

Return the array `result`.

Example 1:

Input: nums = [2,1,3]
Output: [2,3,1]
Explanation: After the first 2 operations, arr1 = [2] and arr2 = [1].
In the 3^rd operation, as the last element of arr1 is greater than the last element of arr2 (2 > 1), append nums[3] to arr1.
After 3 operations, arr1 = [2,3] and arr2 = [1].
Hence, the array result formed by concatenation is [2,3,1].

Example 2:

Input: nums = [5,4,3,8]
Output: [5,3,4,8]
Explanation: After the first 2 operations, arr1 = [5] and arr2 = [4].
In the 3^rd operation, as the last element of arr1 is greater than the last element of arr2 (5 > 4), append nums[3] to arr1, hence arr1 becomes [5,3].
In the 4^th operation, as the last element of arr2 is greater than the last element of arr1 (4 > 3), append nums[4] to arr2, hence arr2 becomes [4,8].
After 4 operations, arr1 = [5,3] and arr2 = [4,8].
Hence, the array result formed by concatenation is [5,3,4,8].

Constraints:

  - `3 <= n <= 50`
  - `1 <= nums[i] <= 100`
  - All elements in `nums` are distinct.
*/
problem({
  number: 3347,
  title: "Distribute Elements Into Two Arrays I",
  difficulty: "Easy",
  pattern: "Array Basics & Simulation",
  url: "https://leetcode.com/problems/distribute-elements-into-two-arrays-i",
  tests: [
    { args: [[2, 1, 3]], expected: [2, 3, 1] },
    { args: [[5, 4, 3, 8]], expected: [5, 3, 4, 8] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  solve: function resultArray(nums) {
    // Write your solution here
  },
});

// ── Easy · SQL (8) ─────────────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #182 · Duplicate Emails · Easy · SQL
 https://leetcode.com/problems/duplicate-emails
 ──────────────────────────────────────────────────────────────────────

Table: `Person`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.

Return the result table in any order.

The result format is in the following example.

Example 1:

Input:
Person table:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
Output:
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Explanation: a@b.com is repeated two times.
*/
sqlProblem({
  number: 182,
  title: "Duplicate Emails",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/duplicate-emails",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 182
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #183 · Customers Who Never Order · Easy · SQL
 https://leetcode.com/problems/customers-who-never-order
 ──────────────────────────────────────────────────────────────────────

Table: `Customers`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.

Table: `Orders`

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference columns) of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.

Write a solution to find all customers who never order anything.

Return the result table in any order.

The result format is in the following example.

Example 1:

Input:
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Output:
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
*/
sqlProblem({
  number: 183,
  title: "Customers Who Never Order",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/customers-who-never-order",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 183
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #196 · Delete Duplicate Emails · Easy · SQL
 https://leetcode.com/problems/delete-duplicate-emails
 ──────────────────────────────────────────────────────────────────────

Table: `Person`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

Write a solution to delete all duplicate emails, keeping only one unique email with the smallest `id`.

For SQL users, please note that you are supposed to write a `DELETE` statement and not a `SELECT` one.

For Pandas users, please note that you are supposed to modify `Person` in place.

After running your script, the answer shown is the `Person` table. The driver will first compile and run your piece of code and then show the `Person` table. The final order of the `Person` table does not matter.

The result format is in the following example.

Example 1:

Input:
Person table:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Output:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.
*/
sqlProblem({
  number: 196,
  title: "Delete Duplicate Emails",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/delete-duplicate-emails",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 196
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #197 · Rising Temperature · Easy · SQL
 https://leetcode.com/problems/rising-temperature
 ──────────────────────────────────────────────────────────────────────

Table: `Weather`

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| recordDate    | date    |
| temperature   | int     |
+---------------+---------+
id is the column with unique values for this table.
There are no different rows with the same recordDate.
This table contains information about the temperature on a certain day.

Write a solution to find all dates' `id` with higher temperatures compared to its previous dates (yesterday).

Return the result table in any order.

The result format is in the following example.

Example 1:

Input:
Weather table:
+----+------------+-------------+
| id | recordDate | temperature |
+----+------------+-------------+
| 1  | 2015-01-01 | 10          |
| 2  | 2015-01-02 | 25          |
| 3  | 2015-01-03 | 20          |
| 4  | 2015-01-04 | 30          |
+----+------------+-------------+
Output:
+----+
| id |
+----+
| 2  |
| 4  |
+----+
Explanation:
In 2015-01-02, the temperature was higher than the previous day (10 -> 25).
In 2015-01-04, the temperature was higher than the previous day (20 -> 30).
*/
sqlProblem({
  number: 197,
  title: "Rising Temperature",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/rising-temperature",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 197
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #586 · Customer Placing the Largest Number of Orders · Easy · SQL
 https://leetcode.com/problems/customer-placing-the-largest-number-of-orders
 ──────────────────────────────────────────────────────────────────────

Table: `Orders`

+-----------------+----------+
| Column Name     | Type     |
+-----------------+----------+
| order_number    | int      |
| customer_number | int      |
+-----------------+----------+
order_number is the primary key (column with unique values) for this table.
This table contains information about the order ID and the customer ID.

Write a solution to find the `customer_number` for the customer who has placed the largest number of orders.

The test cases are generated so that exactly one customer will have placed more orders than any other customer.

The result format is in the following example.

Example 1:

Input:
Orders table:
+--------------+-----------------+
| order_number | customer_number |
+--------------+-----------------+
| 1            | 1               |
| 2            | 2               |
| 3            | 3               |
| 4            | 3               |
+--------------+-----------------+
Output:
+-----------------+
| customer_number |
+-----------------+
| 3               |
+-----------------+
Explanation:
The customer with number 3 has two orders, which is greater than either customer 1 or 2 because each of them only has one order.
So the result is customer_number 3.

Follow up: What if more than one customer has the largest number of orders, can you find all the `customer_number` in this case?
*/
sqlProblem({
  number: 586,
  title: "Customer Placing the Largest Number of Orders",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/customer-placing-the-largest-number-of-orders",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 586
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #595 · Big Countries · Easy · SQL
 https://leetcode.com/problems/big-countries
 ──────────────────────────────────────────────────────────────────────

Table: `World`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |
+-------------+---------+
name is the primary key (column with unique values) for this table.
Each row of this table gives information about the name of a country, the continent to which it belongs, its area, the population, and its GDP value.

A country is big if:

  - it has an area of at least three million (i.e., `3000000 km^2`), or
  - it has a population of at least twenty-five million (i.e., `25000000`).

Write a solution to find the name, population, and area of the big countries.

Return the result table in any order.

The result format is in the following example.

Example 1:

Input:
World table:
+-------------+-----------+---------+------------+--------------+
| name        | continent | area    | population | gdp          |
+-------------+-----------+---------+------------+--------------+
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
+-------------+-----------+---------+------------+--------------+
Output:
+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
*/
sqlProblem({
  number: 595,
  title: "Big Countries",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/big-countries",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 595
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #596 · Classes With at Least 5 Students · Easy · SQL
 https://leetcode.com/problems/classes-with-at-least-5-students
 ──────────────────────────────────────────────────────────────────────

Table: `Courses`

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| student     | varchar |
| class       | varchar |
+-------------+---------+
(student, class) is the primary key (combination of columns with unique values) for this table.
Each row of this table indicates the name of a student and the class in which they are enrolled.

Write a solution to find all the classes that have at least five students.

Return the result table in any order.

The result format is in the following example.

Example 1:

Input:
Courses table:
+---------+----------+
| student | class    |
+---------+----------+
| A       | Math     |
| B       | English  |
| C       | Math     |
| D       | Biology  |
| E       | Math     |
| F       | Computer |
| G       | Math     |
| H       | Math     |
| I       | Math     |
+---------+----------+
Output:
+---------+
| class   |
+---------+
| Math    |
+---------+
Explanation:
- Math has 6 students, so we include it.
- English has 1 student, so we do not include it.
- Biology has 1 student, so we do not include it.
- Computer has 1 student, so we do not include it.
*/
sqlProblem({
  number: 596,
  title: "Classes With at Least 5 Students",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/classes-with-at-least-5-students",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 596
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #1179 · Game Play Analysis I · Easy · SQL
 https://leetcode.com/problems/game-play-analysis-i
 ──────────────────────────────────────────────────────────────────────

Table: `Activity`

+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
(player_id, event_date) is the primary key (combination of columns with unique values) of this table.
This table shows the activity of players of some games.
Each row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.

Write a solution to find the first login date for each player.

Return the result table in any order.

The result format is in the following example.

Example 1:

Input:
Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-05-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+
Output:
+-----------+-------------+
| player_id | first_login |
+-----------+-------------+
| 1         | 2016-03-01  |
| 2         | 2017-06-25  |
| 3         | 2016-03-02  |
+-----------+-------------+
*/
sqlProblem({
  number: 1179,
  title: "Game Play Analysis I",
  difficulty: "Easy",
  pattern: "SQL",
  url: "https://leetcode.com/problems/game-play-analysis-i",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 1179
  query: `-- Write your SQL here
`,
});

// ═══════════════════════════════════════════════════════════════════════════
//  MEDIUM  (81)
// ═══════════════════════════════════════════════════════════════════════════

// ── Medium · Array & Hashing (1) ─────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #49 · Group Anagrams · Medium · Array & Hashing
 https://leetcode.com/problems/group-anagrams
 ──────────────────────────────────────────────────────────────────────

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

  - There is no string in strs that can be rearranged to form `"bat"`.
  - The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
  - The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

  - `1 <= strs.length <= 10^4`
  - `0 <= strs[i].length <= 100`
  - `strs[i]` consists of lowercase English letters.
*/
problem({
  number: 49,
  title: "Group Anagrams",
  difficulty: "Medium",
  pattern: "Array & Hashing",
  url: "https://leetcode.com/problems/group-anagrams",
  compare: "unordered", // answer order doesn't matter
  tests: [
    {
      args: [["eat", "tea", "tan", "ate", "nat", "bat"]],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    { args: [[""]], expected: [[""]] },
    { args: [["a"]], expected: [["a"]] },
  ],
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  solve: function groupAnagrams(strs) {
    // Write your solution here
  },
});

// ── Medium · Two Pointers (6) ────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #11 · Container With Most Water · Medium · Two Pointers
 https://leetcode.com/problems/container-with-most-water
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i^th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Constraints:

  - `n == height.length`
  - `2 <= n <= 10^5`
  - `0 <= height[i] <= 10^4`
*/
problem({
  number: 11,
  title: "Container With Most Water",
  difficulty: "Medium",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/container-with-most-water",
  tests: [
    { args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
    { args: [[1, 1]], expected: 1 },
  ],
  /**
   * @param {number[]} height
   * @return {number}
   */
  solve: function maxArea(height) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #15 · 3Sum · Medium · Two Pointers
 https://leetcode.com/problems/3sum
 ──────────────────────────────────────────────────────────────────────

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

  - `3 <= nums.length <= 3000`
  - `-10^5 <= nums[i] <= 10^5`
*/
problem({
  number: 15,
  title: "3Sum",
  difficulty: "Medium",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/3sum",
  compare: "unordered", // answer order doesn't matter
  tests: [
    {
      args: [[-1, 0, 1, 2, -1, -4]],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[0, 0, 0]], expected: [[0, 0, 0]] },
  ],
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  solve: function threeSum(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #75 · Sort Colors · Medium · Two Pointers
 https://leetcode.com/problems/sort-colors
 ──────────────────────────────────────────────────────────────────────

Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

Constraints:

  - `n == nums.length`
  - `1 <= n <= 300`
  - `nums[i]` is either `0`, `1`, or `2`.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/
problem({
  number: 75,
  title: "Sort Colors",
  difficulty: "Medium",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/sort-colors",
  inPlace: true, // the function modifies its first argument; that array is what gets checked
  tests: [
    { args: [[2, 0, 2, 1, 1, 0]], expected: [0, 0, 1, 1, 2, 2] },
    { args: [[2, 0, 1]], expected: [0, 1, 2] },
  ],
  /**
   * @param {number[]} nums
   * @return {void}
   */
  solve: function sortColors(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #167 · Two Sum II - Input Array Is Sorted · Medium · Two Pointers
 https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 ──────────────────────────────────────────────────────────────────────

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers `index1` and `index2`, each incremented by one, as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

Constraints:

  - `2 <= numbers.length <= 3 * 10^4`
  - `-1000 <= numbers[i] <= 1000`
  - `numbers` is sorted in non-decreasing order.
  - `-1000 <= target <= 1000`
  - The tests are generated such that there is exactly one solution.
*/
problem({
  number: 167,
  title: "Two Sum II - Input Array Is Sorted",
  difficulty: "Medium",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",
  tests: [
    { args: [[2, 7, 11, 15], 9], expected: [1, 2] },
    { args: [[2, 3, 4], 6], expected: [1, 3] },
    { args: [[-1, 0], -1], expected: [1, 2] },
  ],
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  solve: function twoSum(numbers, target) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #189 · Rotate Array · Medium · Two Pointers
 https://leetcode.com/problems/rotate-array
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:

  - `1 <= nums.length <= 10^5`
  - `-2^31 <= nums[i] <= 2^31 - 1`
  - `0 <= k <= 10^5`

Follow up:

  - Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
  - Could you do it in-place with `O(1)` extra space?
*/
problem({
  number: 189,
  title: "Rotate Array",
  difficulty: "Medium",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/rotate-array",
  inPlace: true, // the function modifies its first argument; that array is what gets checked
  tests: [
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [5, 6, 7, 1, 2, 3, 4] },
    { args: [[-1, -100, 3, 99], 2], expected: [3, 99, -1, -100] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {void}
   */
  solve: function rotate(nums, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #611 · Valid Triangle Number · Medium · Two Pointers
 https://leetcode.com/problems/valid-triangle-number
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums`, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

Example 1:

Input: nums = [2,2,3,4]
Output: 3
Explanation: Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

Example 2:

Input: nums = [4,2,3,4]
Output: 4

Constraints:

  - `1 <= nums.length <= 1000`
  - `0 <= nums[i] <= 1000`
*/
problem({
  number: 611,
  title: "Valid Triangle Number",
  difficulty: "Medium",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/valid-triangle-number",
  tests: [
    { args: [[2, 2, 3, 4]], expected: 3 },
    { args: [[4, 2, 3, 4]], expected: 4 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function triangleNumber(nums) {
    // Write your solution here
  },
});

// ── Medium · Sliding Window (6) ──────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1138 · Grumpy Bookstore Owner · Medium · Sliding Window
 https://leetcode.com/problems/grumpy-bookstore-owner
 ──────────────────────────────────────────────────────────────────────

There is a bookstore owner that has a store open for `n` minutes. You are given an integer array `customers` of length `n` where `customers[i]` is the number of the customers that enter the store at the start of the `i^th` minute and all those customers leave after the end of that minute.

During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where `grumpy[i]` is `1` if the bookstore owner is grumpy during the `i^th` minute, and is `0` otherwise.

When the bookstore owner is grumpy, the customers entering during that minute are not satisfied. Otherwise, they are satisfied.

The bookstore owner knows a secret technique to remain not grumpy for `minutes` consecutive minutes, but this technique can only be used once.

Return the maximum number of customers that can be satisfied throughout the day.

Example 1:

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3

Output: 16

Explanation:

The bookstore owner keeps themselves not grumpy for the last 3 minutes.

The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

Example 2:

Input: customers = [1], grumpy = [0], minutes = 1

Output: 1

Constraints:

  - `n == customers.length == grumpy.length`
  - `1 <= minutes <= n <= 2 * 10^4`
  - `0 <= customers[i] <= 1000`
  - `grumpy[i]` is either `0` or `1`.
*/
problem({
  number: 1138,
  title: "Grumpy Bookstore Owner",
  difficulty: "Medium",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/grumpy-bookstore-owner",
  tests: [
    {
      args: [[1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3],
      expected: 16,
    },
    { args: [[1], [0], 1], expected: 1 },
  ],
  /**
   * @param {number[]} customers
   * @param {number[]} grumpy
   * @param {number} minutes
   * @return {number}
   */
  solve: function maxSatisfied(customers, grumpy, minutes) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1460 · Number of Substrings Containing All Three Characters · Medium · Sliding Window
 https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
 ──────────────────────────────────────────────────────────────────────

Given a string `s` consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).

Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".

Example 3:

Input: s = "abc"
Output: 1

Constraints:

  - `3 <= s.length <= 5 x 10^4`
  - `s` only consists of a, b or c characters.
*/
problem({
  number: 1460,
  title: "Number of Substrings Containing All Three Characters",
  difficulty: "Medium",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters",
  tests: [
    { args: ["abcabc"], expected: 10 },
    { args: ["aaacb"], expected: 3 },
    { args: ["abc"], expected: 1 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function numberOfSubstrings(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1776 · Minimum Operations to Reduce X to Zero · Medium · Sliding Window
 https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce `x` to exactly `0` if it is possible, otherwise, return `-1`.

Example 1:

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1

Example 3:

Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `1 <= nums[i] <= 10^4`
  - `1 <= x <= 10^9`
*/
problem({
  number: 1776,
  title: "Minimum Operations to Reduce X to Zero",
  difficulty: "Medium",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero",
  tests: [
    { args: [[1, 1, 4, 2, 3], 5], expected: 2 },
    { args: [[5, 6, 7, 8, 9], 4], expected: -1 },
    { args: [[3, 2, 20, 1, 1, 3], 10], expected: 5 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} x
   * @return {number}
   */
  solve: function minOperations(nums, x) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2552 · Maximum Sum of Distinct Subarrays With Length K · Medium · Sliding Window
 https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` and an integer `k`. Find the maximum subarray sum of all the subarrays of `nums` that meet the following conditions:

  - The length of the subarray is `k`, and
  - All the elements of the subarray are distinct.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return `0`.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.

Constraints:

  - `1 <= k <= nums.length <= 10^5`
  - `1 <= nums[i] <= 10^5`
*/
problem({
  number: 2552,
  title: "Maximum Sum of Distinct Subarrays With Length K",
  difficulty: "Medium",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k",
  tests: [
    { args: [[1, 5, 4, 2, 9, 9, 9], 3], expected: 15 },
    { args: [[4, 4, 4], 3], expected: 0 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  solve: function maximumSubarraySum(nums, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3150 · Shortest and Lexicographically Smallest Beautiful String · Medium · Sliding Window
 https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string
 ──────────────────────────────────────────────────────────────────────

You are given a binary string `s` and a positive integer `k`.

A substring of `s` is beautiful if the number of `1`'s in it is exactly `k`.

Let `len` be the length of the shortest beautiful substring.

Return the lexicographically smallest beautiful substring of string `s` with length equal to `len`. If `s` doesn't contain a beautiful substring, return an empty string.

A string `a` is lexicographically larger than a string `b` (of the same length) if in the first position where `a` and `b` differ, `a` has a character strictly larger than the corresponding character in `b`.

  - For example, `"abcd"` is lexicographically larger than `"abcc"` because the first position they differ is at the fourth character, and `d` is greater than `c`.

Example 1:

Input: s = "100011001", k = 3
Output: "11001"
Explanation: There are 7 beautiful substrings in this example:
1. The substring "100011001".
2. The substring "100011001".
3. The substring "100011001".
4. The substring "100011001".
5. The substring "100011001".
6. The substring "100011001".
7. The substring "100011001".
The length of the shortest beautiful substring is 5.
The lexicographically smallest beautiful substring with length 5 is the substring "11001".

Example 2:

Input: s = "1011", k = 2
Output: "11"
Explanation: There are 3 beautiful substrings in this example:
1. The substring "1011".
2. The substring "1011".
3. The substring "1011".
The length of the shortest beautiful substring is 2.
The lexicographically smallest beautiful substring with length 2 is the substring "11".

Example 3:

Input: s = "000", k = 1
Output: ""
Explanation: There are no beautiful substrings in this example.

Constraints:

  - `1 <= s.length <= 100`
  - `1 <= k <= s.length`
*/
problem({
  number: 3150,
  title: "Shortest and Lexicographically Smallest Beautiful String",
  difficulty: "Medium",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string",
  tests: [
    { args: ["100011001", 3], expected: "11001" },
    { args: ["1011", 2], expected: "11" },
    { args: ["000", 1], expected: "" },
  ],
  /**
   * @param {string} s
   * @param {number} k
   * @return {string}
   */
  solve: function shortestBeautifulSubstring(s, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3225 · Length of Longest Subarray With at Most K Frequency · Medium · Sliding Window
 https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` and an integer `k`.

The frequency of an element `x` is the number of times it occurs in an array.

An array is called good if the frequency of each element in this array is less than or equal to `k`.

Return the length of the longest good subarray of `nums`.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,3,1,2,3,1,2], k = 2
Output: 6
Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
It can be shown that there are no good subarrays with length more than 6.

Example 2:

Input: nums = [1,2,1,2,1,2,1,2], k = 1
Output: 2
Explanation: The longest possible good subarray is [1,2] since the values 1 and 2 occur at most once in this subarray. Note that the subarray [2,1] is also good.
It can be shown that there are no good subarrays with length more than 2.

Example 3:

Input: nums = [5,5,5,5,5,5,5], k = 4
Output: 4
Explanation: The longest possible good subarray is [5,5,5,5] since the value 5 occurs 4 times in this subarray.
It can be shown that there are no good subarrays with length more than 4.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `1 <= nums[i] <= 10^9`
  - `1 <= k <= nums.length`
*/
problem({
  number: 3225,
  title: "Length of Longest Subarray With at Most K Frequency",
  difficulty: "Medium",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency",
  tests: [
    { args: [[1, 2, 3, 1, 2, 3, 1, 2], 2], expected: 6 },
    { args: [[1, 2, 1, 2, 1, 2, 1, 2], 1], expected: 2 },
    { args: [[5, 5, 5, 5, 5, 5, 5], 4], expected: 4 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  solve: function maxSubarrayLength(nums, k) {
    // Write your solution here
  },
});

// ── Medium · Prefix Sum (2) ──────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1573 · Find Two Non-overlapping Sub-arrays Each With Target Sum · Medium · Prefix Sum
 https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum
 ──────────────────────────────────────────────────────────────────────

You are given an array of integers `arr` and an integer `target`.

You have to find two non-overlapping sub-arrays of `arr` each with a sum equal `target`. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return `-1` if you cannot find such two sub-arrays.

Example 1:

Input: arr = [3,2,2,4,3], target = 3
Output: 2
Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.

Example 2:

Input: arr = [7,3,4,7], target = 7
Output: 2
Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.

Example 3:

Input: arr = [4,3,2,6,2,3,4], target = 6
Output: -1
Explanation: We have only one sub-array of sum = 6.

Constraints:

  - `1 <= arr.length <= 10^5`
  - `1 <= arr[i] <= 1000`
  - `1 <= target <= 10^8`
*/
problem({
  number: 1573,
  title: "Find Two Non-overlapping Sub-arrays Each With Target Sum",
  difficulty: "Medium",
  pattern: "Prefix Sum",
  url: "https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum",
  tests: [
    { args: [[3, 2, 2, 4, 3], 3], expected: 2 },
    { args: [[7, 3, 4, 7], 7], expected: 2 },
    { args: [[4, 3, 2, 6, 2, 3, 4], 6], expected: -1 },
  ],
  /**
   * @param {number[]} arr
   * @param {number} target
   * @return {number}
   */
  solve: function minSumOfLengths(arr, target) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4285 · Smallest Stable Index II · Medium · Prefix Sum
 https://leetcode.com/problems/smallest-stable-index-ii
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n` and an integer `k`.

For each index `i`, define its instability score as `max(nums[0..i]) - min(nums[i..n - 1])`.

In other words:

  - `max(nums[0..i])` is the largest value among the elements from index 0 to index `i`.
  - `min(nums[i..n - 1])` is the smallest value among the elements from index `i` to index `n - 1`.

An index `i` is called stable if its instability score is less than or equal to `k`.

Return the smallest stable index. If no such index exists, return -1.

Example 1:

Input: nums = [5,0,1,4], k = 3

Output: 3

Explanation:

  - At index 0: The maximum in `[5]` is 5, and the minimum in `[5, 0, 1, 4]` is 0, so the instability score is `5 - 0 = 5`.
  - At index 1: The maximum in `[5, 0]` is 5, and the minimum in `[0, 1, 4]` is 0, so the instability score is `5 - 0 = 5`.
  - At index 2: The maximum in `[5, 0, 1]` is 5, and the minimum in `[1, 4]` is 1, so the instability score is `5 - 1 = 4`.
  - At index 3: The maximum in `[5, 0, 1, 4]` is 5, and the minimum in `[4]` is 4, so the instability score is `5 - 4 = 1`.
  - This is the first index with an instability score less than or equal to `k = 3`. Thus, the answer is 3.

Example 2:

Input: nums = [3,2,1], k = 1

Output: -1

Explanation:

  - At index 0, the instability score is `3 - 1 = 2`.
  - At index 1, the instability score is `3 - 1 = 2`.
  - At index 2, the instability score is `3 - 1 = 2`.
  - None of these values is less than or equal to `k = 1`, so the answer is -1.

Example 3:

Input: nums = [0], k = 0

Output: 0

Explanation:

At index 0, the instability score is `0 - 0 = 0`, which is less than or equal to `k = 0`. Therefore, the answer is 0.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `0 <= nums[i] <= 10^9`
  - `0 <= k <= 10^9`
*/
problem({
  number: 4285,
  title: "Smallest Stable Index II",
  difficulty: "Medium",
  pattern: "Prefix Sum",
  url: "https://leetcode.com/problems/smallest-stable-index-ii",
  tests: [
    { args: [[5, 0, 1, 4], 3], expected: 3 },
    { args: [[3, 2, 1], 1], expected: -1 },
    { args: [[0], 0], expected: 0 },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  solve: function firstStableIndex(nums, k) {
    // Write your solution here
  },
});

// ── Medium · Binary Search (1) ───────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #2418 · Minimum Sum of Squared Difference · Medium · Binary Search
 https://leetcode.com/problems/minimum-sum-of-squared-difference
 ──────────────────────────────────────────────────────────────────────

You are given two positive 0-indexed integer arrays `nums1` and `nums2`, both of length `n`.

The sum of squared difference of arrays `nums1` and `nums2` is defined as the sum of `(nums1[i] - nums2[i])^2` for each `0 <= i < n`.

You are also given two positive integers `k1` and `k2`. You can modify any of the elements of `nums1` by `+1` or `-1` at most `k1` times. Similarly, you can modify any of the elements of `nums2` by `+1` or `-1` at most `k2` times.

Return the minimum sum of squared difference after modifying array `nums1` at most `k1` times and modifying array `nums2` at most `k2` times.

Note: You are allowed to modify the array elements to become negative integers.

Example 1:

Input: nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0
Output: 579
Explanation: The elements in nums1 and nums2 cannot be modified because k1 = 0 and k2 = 0.
The sum of square difference will be: (1 - 2)^2 + (2 - 10)^2 + (3 - 20)^2 + (4 - 19)^2 = 579.

Example 2:

Input: nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1
Output: 43
Explanation: One way to obtain the minimum sum of square difference is:
- Increase nums1[0] once.
- Increase nums2[2] once.
The minimum of the sum of square difference will be:
(2 - 5)^2 + (4 - 8)^2 + (10 - 7)^2 + (12 - 9)^2 = 43.
Note that, there are other ways to obtain the minimum of the sum of square difference, but there is no way to obtain a sum smaller than 43.

Constraints:

  - `n == nums1.length == nums2.length`
  - `1 <= n <= 10^5`
  - `0 <= nums1[i], nums2[i] <= 10^5`
  - `0 <= k1, k2 <= 10^9`
*/
problem({
  number: 2418,
  title: "Minimum Sum of Squared Difference",
  difficulty: "Medium",
  pattern: "Binary Search",
  url: "https://leetcode.com/problems/minimum-sum-of-squared-difference",
  tests: [
    { args: [[1, 2, 3, 4], [2, 10, 20, 19], 0, 0], expected: 579 },
    { args: [[1, 4, 10, 12], [5, 8, 6, 9], 1, 1], expected: 43 },
  ],
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @param {number} k1
   * @param {number} k2
   * @return {number}
   */
  solve: function minSumSquareDiff(nums1, nums2, k1, k2) {
    // Write your solution here
  },
});

// ── Medium · Sorting & Greedy (13) ────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #453 · Minimum Moves to Equal Array Elements · Medium · Sorting & Greedy
 https://leetcode.com/problems/minimum-moves-to-equal-array-elements
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` of size `n`, return the minimum number of moves required to make all array elements equal.

In one move, you can increment `n - 1` elements of the array by `1`.

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments two elements):
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

Example 2:

Input: nums = [1,1,1]
Output: 0

Constraints:

  - `n == nums.length`
  - `1 <= nums.length <= 10^5`
  - `-10^9 <= nums[i] <= 10^9`
  - The answer is guaranteed to fit in a 32-bit integer.
*/
problem({
  number: 453,
  title: "Minimum Moves to Equal Array Elements",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements",
  tests: [
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function minMoves(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #462 · Minimum Moves to Equal Array Elements II · Medium · Sorting & Greedy
 https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii
 ──────────────────────────────────────────────────────────────────────

Given an integer array `nums` of size `n`, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by `1`.

Test cases are designed so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

Example 2:

Input: nums = [1,10,2,9]
Output: 16

Constraints:

  - `n == nums.length`
  - `1 <= nums.length <= 10^5`
  - `-10^9 <= nums[i] <= 10^9`
*/
problem({
  number: 462,
  title: "Minimum Moves to Equal Array Elements II",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",
  tests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 10, 2, 9]], expected: 16 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function minMoves2(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1487 · Cinema Seat Allocation · Medium · Sorting & Greedy
 https://leetcode.com/problems/cinema-seat-allocation
 ──────────────────────────────────────────────────────────────────────

A cinema has `n` rows of seats, numbered from 1 to `n`. Each row has 10 seats, numbered from 1 to 10.

You are given a 2D integer array reservedSeats, where reservedSeats[i] = [rowi, seati] means that seat seati in row rowi is already reserved.

A four-person group must be assigned to four seats in the same row. The group can be seated in one of the following seat blocks:

  - seats 2, 3, 4, 5
  - seats 4, 5, 6, 7
  - seats 6, 7, 8, 9

A block can be used only if none of its seats are reserved. Each seat can be assigned to at most one group.

Return an integer denoting the maximum number of four-person groups that can be assigned.

Example 1:

Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows an optimal allocation of four groups. Seats marked in blue are already reserved, and each set of four contiguous seats marked in orange is assigned to one group.

Example 2:

Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2

Example 3:

Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4

Constraints:

  - `1 <= n <= 10^9`
  - `1 <= reservedSeats.length <= min(10 * n, 10^4)`
  - `reservedSeats[i] == [rowi, seati]`
  - `1 <= rowi <= n`
  - `1 <= seati <= 10`
  - All `reservedSeats[i]` are distinct.
*/
problem({
  number: 1487,
  title: "Cinema Seat Allocation",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/cinema-seat-allocation",
  tests: [
    {
      args: [
        3,
        [
          [1, 2],
          [1, 3],
          [1, 8],
          [2, 6],
          [3, 1],
          [3, 10],
        ],
      ],
      expected: 4,
    },
    {
      args: [
        2,
        [
          [2, 1],
          [1, 8],
          [2, 6],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        4,
        [
          [4, 3],
          [1, 4],
          [4, 6],
          [1, 7],
        ],
      ],
      expected: 4,
    },
  ],
  /**
   * @param {number} n
   * @param {number[][]} reservedSeats
   * @return {number}
   */
  solve: function maxNumberOfFamilies(n, reservedSeats) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2212 · Removing Minimum and Maximum From Array · Medium · Sorting & Greedy
 https://leetcode.com/problems/removing-minimum-and-maximum-from-array
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed array of distinct integers `nums`.

There is an element in `nums` that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

Example 1:

Input: nums = [2,10,7,5,4,1,8,6]
Output: 5
Explanation:
The minimum element in the array is nums[5], which is 1.
The maximum element in the array is nums[1], which is 10.
We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
This results in 2 + 3 = 5 deletions, which is the minimum number possible.

Example 2:

Input: nums = [0,-4,19,1,8,-2,-3,5]
Output: 3
Explanation:
The minimum element in the array is nums[1], which is -4.
The maximum element in the array is nums[2], which is 19.
We can remove both the minimum and maximum by removing 3 elements from the front.
This results in only 3 deletions, which is the minimum number possible.

Example 3:

Input: nums = [101]
Output: 1
Explanation:
There is only one element in the array, which makes it both the minimum and maximum element.
We can remove it with 1 deletion.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `-10^5 <= nums[i] <= 10^5`
  - The integers in `nums` are distinct.
*/
problem({
  number: 2212,
  title: "Removing Minimum and Maximum From Array",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/removing-minimum-and-maximum-from-array",
  tests: [
    { args: [[2, 10, 7, 5, 4, 1, 8, 6]], expected: 5 },
    { args: [[0, -4, 19, 1, 8, -2, -3, 5]], expected: 3 },
    { args: [[101]], expected: 1 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function minimumDeletions(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3219 · Make Lexicographically Smallest Array by Swapping Elements · Medium · Sorting & Greedy
 https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed array of positive integers `nums` and a positive integer `limit`.

In one operation, you can choose any two indices `i` and `j` and swap `nums[i]` and `nums[j]` if `|nums[i] - nums[j]| <= limit`.

Return the lexicographically smallest array that can be obtained by performing the operation any number of times.

An array `a` is lexicographically smaller than an array `b` if in the first position where `a` and `b` differ, array `a` has an element that is less than the corresponding element in `b`. For example, the array `[2,10,3]` is lexicographically smaller than the array `[10,2,3]` because they differ at index `0` and `2 < 10`.

Example 1:

Input: nums = [1,5,3,9,8], limit = 2
Output: [1,3,5,8,9]
Explanation: Apply the operation 2 times:
- Swap nums[1] with nums[2]. The array becomes [1,3,5,9,8]
- Swap nums[3] with nums[4]. The array becomes [1,3,5,8,9]
We cannot obtain a lexicographically smaller array by applying any more operations.
Note that it may be possible to get the same result by doing different operations.

Example 2:

Input: nums = [1,7,6,18,2,1], limit = 3
Output: [1,6,7,18,1,2]
Explanation: Apply the operation 3 times:
- Swap nums[1] with nums[2]. The array becomes [1,6,7,18,2,1]
- Swap nums[0] with nums[4]. The array becomes [2,6,7,18,1,1]
- Swap nums[0] with nums[5]. The array becomes [1,6,7,18,1,2]
We cannot obtain a lexicographically smaller array by applying any more operations.

Example 3:

Input: nums = [1,7,28,19,10], limit = 3
Output: [1,7,28,19,10]
Explanation: [1,7,28,19,10] is the lexicographically smallest array we can obtain because we cannot apply the operation on any two indices.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `1 <= nums[i] <= 10^9`
  - `1 <= limit <= 10^9`
*/
problem({
  number: 3219,
  title: "Make Lexicographically Smallest Array by Swapping Elements",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements",
  tests: [
    { args: [[1, 5, 3, 9, 8], 2], expected: [1, 3, 5, 8, 9] },
    { args: [[1, 7, 6, 18, 2, 1], 3], expected: [1, 6, 7, 18, 1, 2] },
    { args: [[1, 7, 28, 19, 10], 3], expected: [1, 7, 28, 19, 10] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} limit
   * @return {number[]}
   */
  solve: function lexicographicallySmallestArray(nums, limit) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3276 · Minimum Number of Pushes to Type Word II · Medium · Sorting & Greedy
 https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii
 ──────────────────────────────────────────────────────────────────────

You are given a string `word` containing lowercase English letters.

Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key `2` is mapped with `["a","b","c"]`, we need to push the key one time to type `"a"`, two times to type `"b"`, and three times to type `"c"` .

It is allowed to remap the keys numbered `2` to `9` to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string `word`.

Return the minimum number of pushes needed to type `word` after remapping the keys.

An example mapping of letters to keys on a telephone keypad is given below. Note that `1`, `*`, `#`, and `0` do not map to any letters.

Example 1:

Input: word = "abcde"
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
"a" -> one push on key 2
"b" -> one push on key 3
"c" -> one push on key 4
"d" -> one push on key 5
"e" -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.

Example 2:

Input: word = "xyzxyzxyzxyz"
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
"x" -> one push on key 2
"y" -> one push on key 3
"z" -> one push on key 4
Total cost is 1 * 4 + 1 * 4 + 1 * 4 = 12
It can be shown that no other mapping can provide a lower cost.
Note that the key 9 is not mapped to any letter: it is not necessary to map letters to every key, but to map all the letters.

Example 3:

Input: word = "aabbccddeeffgghhiiiiii"
Output: 24
Explanation: The remapped keypad given in the image provides the minimum cost.
"a" -> one push on key 2
"b" -> one push on key 3
"c" -> one push on key 4
"d" -> one push on key 5
"e" -> one push on key 6
"f" -> one push on key 7
"g" -> one push on key 8
"h" -> two pushes on key 9
"i" -> one push on key 9
Total cost is 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 1 * 2 + 2 * 2 + 6 * 1 = 24.
It can be shown that no other mapping can provide a lower cost.

Constraints:

  - `1 <= word.length <= 10^5`
  - `word` consists of lowercase English letters.
*/
problem({
  number: 3276,
  title: "Minimum Number of Pushes to Type Word II",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii",
  tests: [
    { args: ["abcde"], expected: 5 },
    { args: ["xyzxyzxyzxyz"], expected: 12 },
    { args: ["aabbccddeeffgghhiiiiii"], expected: 24 },
  ],
  /**
   * @param {string} word
   * @return {number}
   */
  solve: function minimumPushes(word) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3584 · Find the Lexicographically Smallest Valid Sequence · Medium · Sorting & Greedy
 https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence
 ──────────────────────────────────────────────────────────────────────

You are given two strings `word1` and `word2`.

A string `x` is called almost equal to `y` if you can change at most one character in `x` to make it identical to `y`.

A sequence of indices `seq` is called valid if:

  - The indices are sorted in ascending order.
  - Concatenating the characters at these indices in `word1` in the same order results in a string that is almost equal to `word2`.

Return an array of size `word2.length` representing the lexicographically smallest valid sequence of indices. If no such sequence of indices exists, return an empty array.

Note that the answer must represent the lexicographically smallest array, not the corresponding string formed by those indices.

Example 1:

Input: word1 = "vbcca", word2 = "abc"

Output: [0,1,2]

Explanation:

The lexicographically smallest valid sequence of indices is `[0, 1, 2]`:

  - Change `word1[0]` to `'a'`.
  - `word1[1]` is already `'b'`.
  - `word1[2]` is already `'c'`.

Example 2:

Input: word1 = "bacdc", word2 = "abc"

Output: [1,2,4]

Explanation:

The lexicographically smallest valid sequence of indices is `[1, 2, 4]`:

  - `word1[1]` is already `'a'`.
  - Change `word1[2]` to `'b'`.
  - `word1[4]` is already `'c'`.

Example 3:

Input: word1 = "aaaaaa", word2 = "aaabc"

Output: []

Explanation:

There is no valid sequence of indices.

Example 4:

Input: word1 = "abc", word2 = "ab"

Output: [0,1]

Constraints:

  - `1 <= word2.length < word1.length <= 3 * 10^5`
  - `word1` and `word2` consist only of lowercase English letters.
*/
problem({
  number: 3584,
  title: "Find the Lexicographically Smallest Valid Sequence",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence",
  tests: [
    { args: ["vbcca", "abc"], expected: [0, 1, 2] },
    { args: ["bacdc", "abc"], expected: [1, 2, 4] },
    { args: ["aaaaaa", "aaabc"], expected: [] },
    { args: ["abc", "ab"], expected: [0, 1] },
  ],
  /**
   * @param {string} word1
   * @param {string} word2
   * @return {number[]}
   */
  solve: function validSequence(word1, word2) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3812 · Smallest Palindromic Rearrangement I · Medium · Sorting & Greedy
 https://leetcode.com/problems/smallest-palindromic-rearrangement-i
 ──────────────────────────────────────────────────────────────────────

You are given a palindromic string `s`.

Return the lexicographically smallest palindromic permutation of `s`.

Example 1:

Input: s = "z"

Output: "z"

Explanation:

A string of only one character is already the lexicographically smallest palindrome.

Example 2:

Input: s = "babab"

Output: "abbba"

Explanation:

Rearranging `"babab"` → `"abbba"` gives the smallest lexicographic palindrome.

Example 3:

Input: s = "daccad"

Output: "acddca"

Explanation:

Rearranging `"daccad"` → `"acddca"` gives the smallest lexicographic palindrome.

Constraints:

  - `1 <= s.length <= 10^5`
  - `s` consists of lowercase English letters.
  - `s` is guaranteed to be palindromic.
*/
problem({
  number: 3812,
  title: "Smallest Palindromic Rearrangement I",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/smallest-palindromic-rearrangement-i",
  tests: [
    { args: ["z"], expected: "z" },
    { args: ["babab"], expected: "abbba" },
    { args: ["daccad"], expected: "acddca" },
  ],
  /**
   * @param {string} s
   * @return {string}
   */
  solve: function smallestPalindrome(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3847 · Minimum Swaps to Sort by Digit Sum · Medium · Sorting & Greedy
 https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum
 ──────────────────────────────────────────────────────────────────────

You are given an array `nums` of distinct positive integers. You need to sort the array in increasing order based on the sum of the digits of each number. If two numbers have the same digit sum, the smaller number appears first in the sorted order.

Return the minimum number of swaps required to rearrange `nums` into this sorted order.

A swap is defined as exchanging the values at two distinct positions in the array.

Example 1:

Input: nums = [37,100]

Output: 1

Explanation:

  - Compute the digit sum for each integer: `[3 + 7 = 10, 1 + 0 + 0 = 1] → [10, 1]`
  - Sort the integers based on digit sum: `[100, 37]`. Swap `37` with `100` to obtain the sorted order.
  - Thus, the minimum number of swaps required to rearrange `nums` is 1.

Example 2:

Input: nums = [22,14,33,7]

Output: 0

Explanation:

  - Compute the digit sum for each integer: `[2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] → [4, 5, 6, 7]`
  - Sort the integers based on digit sum: `[22, 14, 33, 7]`. The array is already sorted.
  - Thus, the minimum number of swaps required to rearrange `nums` is 0.

Example 3:

Input: nums = [18,43,34,16]

Output: 2

Explanation:

  - Compute the digit sum for each integer: `[1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] → [9, 7, 7, 7]`
  - Sort the integers based on digit sum: `[16, 34, 43, 18]`. Swap `18` with `16`, and swap `43` with `34` to obtain the sorted order.
  - Thus, the minimum number of swaps required to rearrange `nums` is 2.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `1 <= nums[i] <= 10^9`
  - `nums` consists of distinct positive integers.
*/
problem({
  number: 3847,
  title: "Minimum Swaps to Sort by Digit Sum",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum",
  tests: [
    { args: [[37, 100]], expected: 1 },
    { args: [[22, 14, 33, 7]], expected: 0 },
    { args: [[18, 43, 34, 16]], expected: 2 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function minSwaps(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4020 · Lexicographically Smallest Permutation Greater Than Target · Medium · Sorting & Greedy
 https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target
 ──────────────────────────────────────────────────────────────────────

You are given two strings `s` and `target`, both having length `n`, consisting of lowercase English letters.

Return the lexicographically smallest permutation of `s` that is strictly greater than `target`. If no permutation of `s` is lexicographically strictly greater than `target`, return an empty string.

A string `a` is lexicographically strictly greater than a string `b` (of the same length) if in the first position where `a` and `b` differ, string `a` has a letter that appears later in the alphabet than the corresponding letter in `b`.

Example 1:

Input: s = "abc", target = "bba"

Output: "bca"

Explanation:

  - The permutations of `s` (in lexicographical order) are `"abc"`, `"acb"`, `"bac"`, `"bca"`, `"cab"`, and `"cba"`.
  - The lexicographically smallest permutation that is strictly greater than `target` is `"bca"`.

Example 2:

Input: s = "leet", target = "code"

Output: "eelt"

Explanation:

  - The permutations of `s` (in lexicographical order) are `"eelt"`, `"eetl"`, `"elet"`, `"elte"`, `"etel"`, `"etle"`, `"leet"`, `"lete"`, `"ltee"`, `"teel"`, `"tele"`, and `"tlee"`.
  - The lexicographically smallest permutation that is strictly greater than `target` is `"eelt"`.

Example 3:

Input: s = "baba", target = "bbaa"

Output: ""

Explanation:

  - The permutations of `s` (in lexicographical order) are `"aabb"`, `"abab"`, `"abba"`, `"baab"`, `"baba"`, and `"bbaa"`.
  - None of them is lexicographically strictly greater than `target`. Therefore, the answer is `""`.

Constraints:

  - `1 <= s.length == target.length <= 300`
  - `s` and `target` consist of only lowercase English letters.
*/
problem({
  number: 4020,
  title: "Lexicographically Smallest Permutation Greater Than Target",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target",
  tests: [
    { args: ["abc", "bba"], expected: "bca" },
    { args: ["leet", "code"], expected: "eelt" },
    { args: ["baba", "bbaa"], expected: "" },
  ],
  /**
   * @param {string} s
   * @param {string} target
   * @return {string}
   */
  solve: function lexGreaterPermutation(s, target) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4078 · Maximum Alternating Sum of Squares · Medium · Sorting & Greedy
 https://leetcode.com/problems/maximum-alternating-sum-of-squares
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums`. You may rearrange the elements in any order.

The alternating score of an array `arr` is defined as:

  - `score = arr[0]^2 - arr[1]^2 + arr[2]^2 - arr[3]^2 + ...`

Return an integer denoting the maximum possible alternating score of `nums` after rearranging its elements.

Example 1:

Input: nums = [1,2,3]

Output: 12

Explanation:

A possible rearrangement for `nums` is `[2,1,3]`, which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

`score = 2^2 - 1^2 + 3^2 = 4 - 1 + 9 = 12`

Example 2:

Input: nums = [1,-1,2,-2,3,-3]

Output: 16

Explanation:

A possible rearrangement for `nums` is `[-3,-1,-2,1,3,2]`, which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

`score = (-3)^2 - (-1)^2 + (-2)^2 - (1)^2 + (3)^2 - (2)^2 = 9 - 1 + 4 - 1 + 9 - 4 = 16`

Constraints:

  - `1 <= nums.length <= 10^5`
  - `-4 * 10^4 <= nums[i] <= 4 * 10^4`
*/
problem({
  number: 4078,
  title: "Maximum Alternating Sum of Squares",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/maximum-alternating-sum-of-squares",
  tests: [
    { args: [[1, 2, 3]], expected: 12 },
    { args: [[1, -1, 2, -2, 3, -3]], expected: 16 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function maxAlternatingSum(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4184 · Minimum Operations to Sort a Permutation · Medium · Sorting & Greedy
 https://leetcode.com/problems/minimum-operations-to-sort-a-permutation
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the integers from 0 to `n - 1`.

You may perform only the following operations:

  - Reverse the entire array.
  - Rotate Left by One: Move the first element to the end of the array, and rest elements to left by one position.

Return an integer denoting the minimum number of operations required to sort the array in increasing order. If it is not possible to sort the array using only the given operations, return -1.

Example 1:

Input: nums = [0,2,1]

Output: 2

Explanation:

  - Rotate Left by one: `[2, 1, 0]`
  - Reverse the array: `[0, 1, 2]`

The array becomes sorted in 2 operations, which is minimal

Example 2:

Input: nums = [1,0,2]

Output: 2

Explanation:

  - Reverse the array: `[2, 0, 1]`
  - Rotate Left by one: `[0, 1, 2]`

The array becomes sorted in 2 operations, which is minimal.

Example 3:

Input: nums = [2,0,1,3]

Output: -1

Explanation:

It is impossible to reach `[2, 0, 1, 3]`. Thus, the answer is -1.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `0 <= nums[i] <= n - 1`
  - `nums` is a permutation of integers from 0 to `n - 1`.
*/
problem({
  number: 4184,
  title: "Minimum Operations to Sort a Permutation",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-operations-to-sort-a-permutation",
  tests: [
    { args: [[0, 2, 1]], expected: 2 },
    { args: [[1, 0, 2]], expected: 2 },
    { args: [[2, 0, 1, 3]], expected: -1 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function minOperations(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4220 · Minimum Operations to Sort a String · Medium · Sorting & Greedy
 https://leetcode.com/problems/minimum-operations-to-sort-a-string
 ──────────────────────────────────────────────────────────────────────

You are given a string `s` consisting of lowercase English letters.

In one operation, you can select any substring of `s` that is not the entire string and sort it in non-descending alphabetical order.

Return the minimum number of operations required to make `s` sorted in non-descending order. If it is not possible, return -1.

Example 1:

Input: s = "dog"

Output: 1

Explanation:

  - Sort substring `"og"` to `"go"`.
  - Now, `s = "dgo"`, which is sorted in ascending order. Thus, the answer is 1.

Example 2:

Input: s = "card"

Output: 2

Explanation:

  - Sort substring `"car"` to `"acr"`, so `s = "acrd"`.
  - Sort substring `"rd"` to `"dr"`, making `s = "acdr"`, which is sorted in ascending order. Thus, the answer is 2.

Example 3:

Input: s = "gf"

Output: -1

Explanation:

  - It is impossible to sort `s` under the given constraints. Thus, the answer is -1.

Constraints:

  - `1 <= s.length <= 10^5`
  - `s` consists of only lowercase English letters.
*/
problem({
  number: 4220,
  title: "Minimum Operations to Sort a String",
  difficulty: "Medium",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/minimum-operations-to-sort-a-string",
  tests: [
    { args: ["dog"], expected: 1 },
    { args: ["card"], expected: 2 },
    { args: ["gf"], expected: -1 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function minOperations(s) {
    // Write your solution here
  },
});

// ── Medium · Intervals (1) ───────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1222 · Remove Covered Intervals · Medium · Intervals
 https://leetcode.com/problems/remove-covered-intervals
 ──────────────────────────────────────────────────────────────────────

Given an array `intervals` where `intervals[i] = [li, ri]` represent the interval `[li, ri)`, remove all intervals that are covered by another interval in the list.

The interval `[a, b)` is covered by the interval `[c, d)` if and only if `c <= a` and `b <= d`.

Return the number of remaining intervals.

Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:

Input: intervals = [[1,4],[2,3]]
Output: 1

Constraints:

  - `1 <= intervals.length <= 1000`
  - `intervals[i].length == 2`
  - `0 <= li < ri <= 10^5`
  - All the given intervals are unique.
*/
problem({
  number: 1222,
  title: "Remove Covered Intervals",
  difficulty: "Medium",
  pattern: "Intervals",
  url: "https://leetcode.com/problems/remove-covered-intervals",
  tests: [
    {
      args: [
        [
          [1, 4],
          [3, 6],
          [2, 8],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          [1, 4],
          [2, 3],
        ],
      ],
      expected: 1,
    },
  ],
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  solve: function removeCoveredIntervals(intervals) {
    // Write your solution here
  },
});

// ── Medium · Stack & Parentheses (10) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #150 · Evaluate Reverse Polish Notation · Medium · Stack & Parentheses
 https://leetcode.com/problems/evaluate-reverse-polish-notation
 ──────────────────────────────────────────────────────────────────────

You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

  - The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
  - Each operand may be an integer or another expression.
  - The division between two integers always truncates toward zero.
  - There will not be any division by zero.
  - The input represents a valid arithmetic expression in a reverse polish notation.
  - The answer and all the intermediate calculations can be represented in a 32-bit integer.

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

Constraints:

  - `1 <= tokens.length <= 10^4`
  - `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.
*/
problem({
  number: 150,
  title: "Evaluate Reverse Polish Notation",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/evaluate-reverse-polish-notation",
  tests: [
    { args: [["2", "1", "+", "3", "*"]], expected: 9 },
    { args: [["4", "13", "5", "/", "+"]], expected: 6 },
    {
      args: [
        ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
      ],
      expected: 22,
    },
  ],
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  solve: function evalRPN(tokens) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #636 · Exclusive Time of Functions · Medium · Stack & Parentheses
 https://leetcode.com/problems/exclusive-time-of-functions
 ──────────────────────────────────────────────────────────────────────

On a single-threaded CPU, we execute a program containing `n` functions. Each function has a unique ID between 0 and `n - 1`.

Function calls are stored in a call stack: when a function call starts, its ID is pushed onto the stack, and when a function call ends, its ID is popped off the stack. The function whose ID is at the top of the stack is the current function being executed. Each time a function starts or ends, we write a log with the ID, whether it started or ended, and the timestamp.

You are given a list `logs`, where `logs[i]` represents the `i^th` log message formatted as a string `"{function_id}:{"start" | "end"}:{timestamp}"`. For example, `"0:start:3"` means a function call with function ID 0 started at the beginning of timestamp 3, and `"1:end:2"` means a function call with function ID 1 ended at the end of timestamp 2. Note that a function can be called multiple times, possibly recursively.

A function's exclusive time is the sum of execution times for all function calls in the program. For example, if a function is called twice, one call executing for 2 time units and another call executing for 1 time unit, the exclusive time is `2 + 1 = 3`.

Return the exclusive time of each function in an array, where the value at the `i^th` index represents the exclusive time for the function with ID `i`.

Example 1:

Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
Output: [3,4]
Explanation:
Function 0 starts at the beginning of time 0, then it executes 2 for units of time and reaches the end of time 1.
Function 1 starts at the beginning of time 2, executes for 4 units of time, and ends at the end of time 5.
Function 0 resumes execution at the beginning of time 6 and executes for 1 unit of time.
So function 0 spends 2 + 1 = 3 units of total time executing, and function 1 spends 4 units of total time executing.

Example 2:

Input: n = 1, logs = ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]
Output: [8]
Explanation:
Function 0 starts at the beginning of time 0, executes for 2 units of time, and recursively calls itself.
Function 0 (recursive call) starts at the beginning of time 2 and executes for 4 units of time.
Function 0 (initial call) resumes execution then immediately calls itself again.
Function 0 (2nd recursive call) starts at the beginning of time 6 and executes for 1 unit of time.
Function 0 (initial call) resumes execution at the beginning of time 7 and executes for 1 unit of time.
So function 0 spends 2 + 4 + 1 + 1 = 8 units of total time executing.

Example 3:

Input: n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]
Output: [7,1]
Explanation:
Function 0 starts at the beginning of time 0, executes for 2 units of time, and recursively calls itself.
Function 0 (recursive call) starts at the beginning of time 2 and executes for 4 units of time.
Function 0 (initial call) resumes execution then immediately calls function 1.
Function 1 starts at the beginning of time 6, executes 1 unit of time, and ends at the end of time 6.
Function 0 resumes execution at the beginning of time 7 and executes for 1 unit of time.
So function 0 spends 2 + 4 + 1 = 7 units of total time executing, and function 1 spends 1 unit of total time executing.

Constraints:

  - `1 <= n <= 100`
  - `2 <= logs.length <= 500`
  - `0 <= function_id < n`
  - `0 <= timestamp <= 10^9`
  - No two start events will happen at the same timestamp.
  - No two end events will happen at the same timestamp.
  - Each function has an `"end"` log for each `"start"` log.
*/
problem({
  number: 636,
  title: "Exclusive Time of Functions",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/exclusive-time-of-functions",
  tests: [
    {
      args: [2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]],
      expected: [3, 4],
    },
    {
      args: [
        1,
        [
          "0:start:0",
          "0:start:2",
          "0:end:5",
          "0:start:6",
          "0:end:6",
          "0:end:7",
        ],
      ],
      expected: [8],
    },
    {
      args: [
        2,
        [
          "0:start:0",
          "0:start:2",
          "0:end:5",
          "1:start:6",
          "1:end:6",
          "0:end:7",
        ],
      ],
      expected: [7, 1],
    },
  ],
  /**
   * @param {number} n
   * @param {string[]} logs
   * @return {number[]}
   */
  solve: function exclusiveTime(n, logs) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #678 · Valid Parenthesis String · Medium · Stack & Parentheses
 https://leetcode.com/problems/valid-parenthesis-string
 ──────────────────────────────────────────────────────────────────────

Given a string `s` containing only three types of characters: `'('`, `')'` and `'*'`, return `true` if `s` is valid.

The following rules define a valid string:

  - Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
  - Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
  - Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
  - `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string `""`.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "(*)"
Output: true

Example 3:

Input: s = "(*))"
Output: true

Example 4:

Input: s = "("
Output: false

Constraints:

  - `1 <= s.length <= 100`
  - `s[i]` is `'('`, `')'` or `'*'`.
*/
problem({
  number: 678,
  title: "Valid Parenthesis String",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/valid-parenthesis-string",
  tests: [
    { args: ["()"], expected: true },
    { args: ["(*)"], expected: true },
    { args: ["(*))"], expected: true },
    { args: ["("], expected: false },
  ],
  /**
   * @param {string} s
   * @return {boolean}
   */
  solve: function checkValidString(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #886 · Score of Parentheses · Medium · Stack & Parentheses
 https://leetcode.com/problems/score-of-parentheses
 ──────────────────────────────────────────────────────────────────────

Given a balanced parentheses string `s`, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

  - `"()"` has score `1`.
  - `AB` has score `A + B`, where `A` and `B` are balanced parentheses strings.
  - `(A)` has score `2 * A`, where `A` is a balanced parentheses string.

Example 1:

Input: s = "()"
Output: 1

Example 2:

Input: s = "(())"
Output: 2

Example 3:

Input: s = "()()"
Output: 2

Constraints:

  - `2 <= s.length <= 50`
  - `s` consists of only `'('` and `')'`.
  - `s` is a balanced parentheses string.
*/
problem({
  number: 886,
  title: "Score of Parentheses",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/score-of-parentheses",
  tests: [
    { args: ["()"], expected: 1 },
    { args: ["(())"], expected: 2 },
    { args: ["()()"], expected: 2 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function scoreOfParentheses(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #957 · Minimum Add to Make Parentheses Valid · Medium · Stack & Parentheses
 https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
 ──────────────────────────────────────────────────────────────────────

A parentheses string is valid if and only if:

  - It is the empty string,
  - It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
  - It can be written as `(A)`, where `A` is a valid string.

You are given a parentheses string `s`. In one move, you can insert a parenthesis at any position of the string.

  - For example, if `s = "()))"`, you can insert an opening parenthesis to be `"(()))"` or a closing parenthesis to be `"())))"`.

Return the minimum number of moves required to make `s` valid.

Example 1:

Input: s = "())"
Output: 1

Example 2:

Input: s = "((("
Output: 3

Constraints:

  - `1 <= s.length <= 1000`
  - `s[i]` is either `'('` or `')'`.
*/
problem({
  number: 957,
  title: "Minimum Add to Make Parentheses Valid",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid",
  tests: [
    { args: ["())"], expected: 1 },
    { args: ["((("], expected: 3 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function minAddToMakeValid(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1208 · Maximum Nesting Depth of Two Valid Parentheses Strings · Medium · Stack & Parentheses
 https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings
 ──────────────────────────────────────────────────────────────────────

A string is a valid parentheses string (denoted VPS) if and only if it consists of `"("` and `")"` characters only, and:

  - It is the empty string, or
  - It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are VPS's, or
  - It can be written as `(A)`, where `A` is a VPS.

We can similarly define the nesting depth `depth(S)` of any VPS `S` as follows:

  - `depth("") = 0`
  - `depth(A + B) = max(depth(A), depth(B))`, where `A` and `B` are VPS's
  - `depth("(" + A + ")") = 1 + depth(A)`, where `A` is a VPS.

For example, `""`, `"()()"`, and `"()(()())"` are VPS's (with nesting depths 0, 1, and 2), and `")("` and `"(()"` are not VPS's.

Given a VPS seq, split it into two disjoint subsequences `A` and `B`, such that `A` and `B` are VPS's (and `A.length + B.length = seq.length`). The subsequences may not necessarily be contiguous.

For example, for the sequence `123456789`, one possible split is:

A = {1, 3, 5, 7, 9},

B = {2, 4, 6, 8}.

This corresponds to the output `[0, 1, 0, 1, 0, 1, 0, 1, 0]`  where 0 indicates membership in A and 1 indicates membership in B.

Now choose any such `A` and `B` such that `max(depth(A), depth(B))` is the minimum possible value.

Return an `answer` array (of length `seq.length`) that encodes such a choice of `A` and `B`:  `answer[i] = 0` if `seq[i]` is part of `A`, else `answer[i] = 1`.  Note that even though multiple answers may exist, you may return any of them.

Example 1:

Input: seq = "(()())"
Output: [0,1,1,1,1,0]

Example 2:

Input: seq = "()(())()"
Output: [0,0,0,1,1,0,1,1]

Constraints:

  - `1 <= seq.size <= 10000`
*/
problem({
  number: 1208,
  title: "Maximum Nesting Depth of Two Valid Parentheses Strings",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings",
  check: true, // validated by a custom checker (see CHECKERS in the runner)
  tests: [
    { args: ["(()())"], expected: [0, 1, 1, 1, 1, 0] },
    { args: ["()(())()"], expected: [0, 0, 0, 1, 1, 0, 1, 1] },
  ],
  /**
   * @param {string} seq
   * @return {number[]}
   */
  solve: function maxDepthAfterSplit(seq) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1298 · Reverse Substrings Between Each Pair of Parentheses · Medium · Stack & Parentheses
 https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses
 ──────────────────────────────────────────────────────────────────────

You are given a string `s` that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

Example 1:

Input: s = "(abcd)"
Output: "dcba"

Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

Constraints:

  - `1 <= s.length <= 2000`
  - `s` only contains lower case English characters and parentheses.
  - It is guaranteed that all parentheses are balanced.
*/
problem({
  number: 1298,
  title: "Reverse Substrings Between Each Pair of Parentheses",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses",
  tests: [
    { args: ["(abcd)"], expected: "dcba" },
    { args: ["(u(love)i)"], expected: "iloveu" },
    { args: ["(ed(et(oc))el)"], expected: "leetcode" },
  ],
  /**
   * @param {string} s
   * @return {string}
   */
  solve: function reverseParentheses(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1552 · Build an Array With Stack Operations · Medium · Stack & Parentheses
 https://leetcode.com/problems/build-an-array-with-stack-operations
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `target` and an integer `n`.

You have an empty stack with the two following operations:

  - `"Push"`: pushes an integer to the top of the stack.
  - `"Pop"`: removes the integer on the top of the stack.

You also have a stream of the integers in the range `[1, n]`.

Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to `target`. You should follow the following rules:

  - If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
  - If the stack is not empty, pop the integer at the top of the stack.
  - If, at any moment, the elements in the stack (from the bottom to the top) are equal to `target`, do not read new integers from the stream and do not do more operations on the stack.

Return the stack operations needed to build `target` following the mentioned rules. If there are multiple valid answers, return any of them.

Example 1:

Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Pop the integer on the top of the stack. s = [1].
Read 3 from the stream and push it to the stack. s = [1,3].

Example 2:

Input: target = [1,2,3], n = 3
Output: ["Push","Push","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Read 3 from the stream and push it to the stack. s = [1,2,3].

Example 3:

Input: target = [1,2], n = 4
Output: ["Push","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
The answers that read integer 3 from the stream are not accepted.

Constraints:

  - `1 <= target.length <= 100`
  - `1 <= n <= 100`
  - `1 <= target[i] <= n`
  - `target` is strictly increasing.
*/
problem({
  number: 1552,
  title: "Build an Array With Stack Operations",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/build-an-array-with-stack-operations",
  check: true, // validated by a custom checker (see CHECKERS in the runner)
  tests: [
    { args: [[1, 3], 3], expected: ["Push", "Push", "Pop", "Push"] },
    { args: [[1, 2, 3], 3], expected: ["Push", "Push", "Push"] },
    { args: [[1, 2], 4], expected: ["Push", "Push"] },
  ],
  /**
   * @param {number[]} target
   * @param {number} n
   * @return {string[]}
   */
  solve: function buildArray(target, n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1648 · Minimum Insertions to Balance a Parentheses String · Medium · Stack & Parentheses
 https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string
 ──────────────────────────────────────────────────────────────────────

Given a parentheses string `s` containing only the characters `'('` and `')'`. A parentheses string is balanced if:

  - Any left parenthesis `'('` must have a corresponding two consecutive right parenthesis `'))'`.
  - Left parenthesis `'('` must go before the corresponding two consecutive right parenthesis `'))'`.

In other words, we treat `'('` as an opening parenthesis and `'))'` as a closing parenthesis.

  - For example, `"())"`, `"())(())))"` and `"(())())))"` are balanced, `")()"`, `"()))"` and `"(()))"` are not balanced.

You can insert the characters `'('` and `')'` at any position of the string to balance it if needed.

Return the minimum number of insertions needed to make `s` balanced.

Example 1:

Input: s = "(()))"
Output: 1
Explanation: The second '(' has two matching '))', but the first '(' has only ')' matching. We need to add one more ')' at the end of the string to be "(())))" which is balanced.

Example 2:

Input: s = "())"
Output: 0
Explanation: The string is already balanced.

Example 3:

Input: s = "))())("
Output: 3
Explanation: Add '(' to match the first '))', Add '))' to match the last '('.

Constraints:

  - `1 <= s.length <= 10^5`
  - `s` consists of `'('` and `')'` only.
*/
problem({
  number: 1648,
  title: "Minimum Insertions to Balance a Parentheses String",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string",
  tests: [
    { args: ["(()))"], expected: 1 },
    { args: ["())"], expected: 0 },
    { args: ["))())("], expected: 3 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function minInsertions(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1934 · Evaluate the Bracket Pairs of a String · Medium · Stack & Parentheses
 https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string
 ──────────────────────────────────────────────────────────────────────

You are given a string `s` that contains some bracket pairs, with each pair containing a non-empty key.

  - For example, in the string `"(name)is(age)yearsold"`, there are two bracket pairs that contain the keys `"name"` and `"age"`.

You know the values of a wide range of keys. This is represented by a 2D string array `knowledge` where each `knowledge[i] = [keyi, valuei]` indicates that key `keyi` has a value of `valuei`.

You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key `keyi`, you will:

  - Replace `keyi` and the bracket pair with the key's corresponding `valuei`.
  - If you do not know the value of the key, you will replace `keyi` and the bracket pair with a question mark `"?"` (without the quotation marks).

Each key will appear at most once in your `knowledge`. There will not be any nested brackets in `s`.

Return the resulting string after evaluating all of the bracket pairs.

Example 1:

Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
Output: "bobistwoyearsold"
Explanation:
The key "name" has a value of "bob", so replace "(name)" with "bob".
The key "age" has a value of "two", so replace "(age)" with "two".

Example 2:

Input: s = "hi(name)", knowledge = [["a","b"]]
Output: "hi?"
Explanation: As you do not know the value of the key "name", replace "(name)" with "?".

Example 3:

Input: s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
Output: "yesyesyesaaa"
Explanation: The same key can appear multiple times.
The key "a" has a value of "yes", so replace all occurrences of "(a)" with "yes".
Notice that the "a"s not in a bracket pair are not evaluated.

Constraints:

  - `1 <= s.length <= 10^5`
  - `0 <= knowledge.length <= 10^5`
  - `knowledge[i].length == 2`
  - `1 <= keyi.length, valuei.length <= 10`
  - `s` consists of lowercase English letters and round brackets `'('` and `')'`.
  - Every open bracket `'('` in `s` will have a corresponding close bracket `')'`.
  - The key in each bracket pair of `s` will be non-empty.
  - There will not be any nested bracket pairs in `s`.
  - `keyi` and `valuei` consist of lowercase English letters.
  - Each `keyi` in `knowledge` is unique.
*/
problem({
  number: 1934,
  title: "Evaluate the Bracket Pairs of a String",
  difficulty: "Medium",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string",
  tests: [
    {
      args: [
        "(name)is(age)yearsold",
        [
          ["name", "bob"],
          ["age", "two"],
        ],
      ],
      expected: "bobistwoyearsold",
    },
    { args: ["hi(name)", [["a", "b"]]], expected: "hi?" },
    { args: ["(a)(a)(a)aaa", [["a", "yes"]]], expected: "yesyesyesaaa" },
  ],
  /**
   * @param {string} s
   * @param {string[][]} knowledge
   * @return {string}
   */
  solve: function evaluate(s, knowledge) {
    // Write your solution here
  },
});

// ── Medium · Monotonic Stack (2) ─────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #739 · Daily Temperatures · Medium · Monotonic Stack
 https://leetcode.com/problems/daily-temperatures
 ──────────────────────────────────────────────────────────────────────

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i^th` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

Constraints:

  - `1 <= temperatures.length <= 10^5`
  - `30 <= temperatures[i] <= 100`
*/
problem({
  number: 739,
  title: "Daily Temperatures",
  difficulty: "Medium",
  pattern: "Monotonic Stack",
  url: "https://leetcode.com/problems/daily-temperatures",
  tests: [
    {
      args: [[73, 74, 75, 71, 69, 72, 76, 73]],
      expected: [1, 1, 4, 2, 1, 1, 0, 0],
    },
    { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
    { args: [[30, 60, 90]], expected: [1, 1, 0] },
  ],
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  solve: function dailyTemperatures(temperatures) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1159 · Smallest Subsequence of Distinct Characters · Medium · Monotonic Stack
 https://leetcode.com/problems/smallest-subsequence-of-distinct-characters
 ──────────────────────────────────────────────────────────────────────

Given a string `s`, return the lexicographically smallest subsequence of `s` that contains all the distinct characters of `s` exactly once.

Example 1:

Input: s = "bcabc"
Output: "abc"

Example 2:

Input: s = "cbacdcbc"
Output: "acdb"

Constraints:

  - `1 <= s.length <= 1000`
  - `s` consists of lowercase English letters.

Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/
*/
problem({
  number: 1159,
  title: "Smallest Subsequence of Distinct Characters",
  difficulty: "Medium",
  pattern: "Monotonic Stack",
  url: "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters",
  tests: [
    { args: ["bcabc"], expected: "abc" },
    { args: ["cbacdcbc"], expected: "acdb" },
  ],
  /**
   * @param {string} s
   * @return {string}
   */
  solve: function smallestSubsequence(s) {
    // Write your solution here
  },
});

// ── Medium · Linked List (2) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #2 · Add Two Numbers · Medium · Linked List
 https://leetcode.com/problems/add-two-numbers
 ──────────────────────────────────────────────────────────────────────

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

  - The number of nodes in each linked list is in the range `[1, 100]`.
  - `0 <= Node.val <= 9`
  - It is guaranteed that the list represents a number that does not have leading zeros.
*/
problem({
  number: 2,
  title: "Add Two Numbers",
  difficulty: "Medium",
  pattern: "Linked List",
  url: "https://leetcode.com/problems/add-two-numbers",
  types: { args: ["list", "list"], returns: "list" }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    {
      args: [
        [2, 4, 3],
        [5, 6, 4],
      ],
      expected: [7, 0, 8],
    },
    { args: [[0], [0]], expected: [0] },
    {
      args: [
        [9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9],
      ],
      expected: [8, 9, 9, 9, 0, 0, 0, 1],
    },
  ],
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  solve: function addTwoNumbers(l1, l2) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2182 · Find the Minimum and Maximum Number of Nodes Between Critical Points · Medium · Linked List
 https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
 ──────────────────────────────────────────────────────────────────────

A critical point in a linked list is defined as either a local maxima or a local minima.

A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

Given a linked list `head`, return an array of length 2 containing `[minDistance, maxDistance]` where `minDistance` is the minimum distance between any two distinct critical points and `maxDistance` is the maximum distance between any two distinct critical points. If there are fewer than two critical points, return `[-1, -1]`.

Example 1:

Input: head = [3,1]
Output: [-1,-1]
Explanation: There are no critical points in [3,1].

Example 2:

Input: head = [5,3,1,2,5,1,2]
Output: [1,3]
Explanation: There are three critical points:
- [5,3,1,2,5,1,2]: The third node is a local minima because 1 is less than 3 and 2.
- [5,3,1,2,5,1,2]: The fifth node is a local maxima because 5 is greater than 2 and 1.
- [5,3,1,2,5,1,2]: The sixth node is a local minima because 1 is less than 5 and 2.
The minimum distance is between the fifth and the sixth node. minDistance = 6 - 5 = 1.
The maximum distance is between the third and the sixth node. maxDistance = 6 - 3 = 3.

Example 3:

Input: head = [1,3,2,2,3,2,2,2,7]
Output: [3,3]
Explanation: There are two critical points:
- [1,3,2,2,3,2,2,2,7]: The second node is a local maxima because 3 is greater than 1 and 2.
- [1,3,2,2,3,2,2,2,7]: The fifth node is a local maxima because 3 is greater than 2 and 2.
Both the minimum and maximum distances are between the second and the fifth node.
Thus, minDistance and maxDistance is 5 - 2 = 3.
Note that the last node is not considered a local maxima because it does not have a next node.

Constraints:

  - The number of nodes in the list is in the range `[2, 10^5]`.
  - `1 <= Node.val <= 10^5`
*/
problem({
  number: 2182,
  title: "Find the Minimum and Maximum Number of Nodes Between Critical Points",
  difficulty: "Medium",
  pattern: "Linked List",
  url: "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points",
  types: { args: ["list"] }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    { args: [[3, 1]], expected: [-1, -1] },
    { args: [[5, 3, 1, 2, 5, 1, 2]], expected: [1, 3] },
    { args: [[1, 3, 2, 2, 3, 2, 2, 2, 7]], expected: [3, 3] },
  ],
  /**
   * @param {ListNode} head
   * @return {number[]}
   */
  solve: function nodesBetweenCriticalPoints(head) {
    // Write your solution here
  },
});

// ── Medium · Binary Tree (1) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #2347 · Count Nodes Equal to Average of Subtree · Medium · Binary Tree
 https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree
 ──────────────────────────────────────────────────────────────────────

Given the `root` of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

Note:

  - The average of `n` elements is the sum of the `n` elements divided by `n` and rounded down to the nearest integer.
  - A subtree of `root` is a tree consisting of `root` and all of its descendants.

Example 1:

Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation:
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.

Example 2:

Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.

Constraints:

  - The number of nodes in the tree is in the range `[1, 1000]`.
  - `0 <= Node.val <= 1000`
*/
problem({
  number: 2347,
  title: "Count Nodes Equal to Average of Subtree",
  difficulty: "Medium",
  pattern: "Binary Tree",
  url: "https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree",
  types: { args: ["tree"] }, // arrays in tests are converted to ListNode/TreeNode
  tests: [
    { args: [[4, 8, 5, 0, 1, null, 6]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  solve: function averageOfSubtree(root) {
    // Write your solution here
  },
});

// ── Medium · Graph (BFS / DFS / Union-Find) (10) ──────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1380 · Number of Closed Islands · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/number-of-closed-islands
 ──────────────────────────────────────────────────────────────────────

Given a 2D `grid` consists of `0s` (land) and `1s` (water).  An island is a maximal 4-directionally connected group of `0s` and a closed island is an island totally (all left, top, right, bottom) surrounded by `1s.`

Return the number of closed islands.

Example 1:

Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation:
Islands in gray are closed because they are completely surrounded by water (group of 1s).

Example 2:

Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2

Constraints:

  - `1 <= grid.length, grid[0].length <= 100`
  - `0 <= grid[i][j] <=1`
*/
problem({
  number: 1380,
  title: "Number of Closed Islands",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/number-of-closed-islands",
  tests: [
    {
      args: [
        [
          [1, 1, 1, 1, 1, 1, 1, 0],
          [1, 0, 0, 0, 0, 1, 1, 0],
          [1, 0, 1, 0, 1, 1, 1, 0],
          [1, 0, 0, 0, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 0],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 1, 1, 1, 0],
        ],
      ],
      expected: 1,
    },
    {
      args: [
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 1, 0, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 0, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1],
        ],
      ],
      expected: 2,
    },
  ],
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  solve: function closedIsland(grid) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2582 · Minimum Score of a Path Between Two Cities · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities
 ──────────────────────────────────────────────────────────────────────

You are given a positive integer `n` representing `n` cities numbered from `1` to `n`. You are also given a 2D array `roads` where `roads[i] = [ai, bi, distancei]` indicates that there is a bidirectional road between cities `ai` and `bi` with a distance equal to `distancei`. The cities graph is not necessarily connected.

The score of a path between two cities is defined as the minimum distance of a road in this path.

Return the minimum possible score of a path between cities `1` and `n`.

Note:

  - A path is a sequence of roads between two cities.
  - It is allowed for a path to contain the same road multiple times, and you can visit cities `1` and `n` multiple times along the path.
  - The test cases are generated such that there is at least one path between `1` and `n`.

Example 1:

Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.

Example 2:

Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.

Constraints:

  - `2 <= n <= 10^5`
  - `1 <= roads.length <= 10^5`
  - `roads[i].length == 3`
  - `1 <= ai, bi <= n`
  - `ai != bi`
  - `1 <= distancei <= 10^4`
  - There are no repeated edges.
  - There is at least one path between `1` and `n`.
*/
problem({
  number: 2582,
  title: "Minimum Score of a Path Between Two Cities",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities",
  tests: [
    {
      args: [
        4,
        [
          [1, 2, 9],
          [2, 3, 6],
          [2, 4, 5],
          [1, 4, 7],
        ],
      ],
      expected: 5,
    },
    {
      args: [
        4,
        [
          [1, 2, 2],
          [1, 3, 4],
          [3, 4, 7],
        ],
      ],
      expected: 2,
    },
  ],
  /**
   * @param {number} n
   * @param {number[][]} roads
   * @return {number}
   */
  solve: function minScore(n, roads) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2793 · Count the Number of Complete Components · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/count-the-number-of-complete-components
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n`. There is an undirected graph with `n` vertices, numbered from `0` to `n - 1`. You are given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there exists an undirected edge connecting vertices `ai` and `bi`.

Return the number of complete connected components of the graph.

A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be complete if there exists an edge between every pair of its vertices.

Example 1:

Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
Output: 3
Explanation: From the picture above, one can see that all of the components of this graph are complete.

Example 2:

Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
Output: 1
Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.

Constraints:

  - `1 <= n <= 50`
  - `0 <= edges.length <= n * (n - 1) / 2`
  - `edges[i].length == 2`
  - `0 <= ai, bi <= n - 1`
  - `ai != bi`
  - There are no repeated edges.
*/
problem({
  number: 2793,
  title: "Count the Number of Complete Components",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/count-the-number-of-complete-components",
  tests: [
    {
      args: [
        6,
        [
          [0, 1],
          [0, 2],
          [1, 2],
          [3, 4],
        ],
      ],
      expected: 3,
    },
    {
      args: [
        6,
        [
          [0, 1],
          [0, 2],
          [1, 2],
          [3, 4],
          [3, 5],
        ],
      ],
      expected: 1,
    },
  ],
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @return {number}
   */
  solve: function countCompleteComponents(n, edges) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2914 · Find the Safest Path in a Grid · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/find-the-safest-path-in-a-grid
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed 2D matrix `grid` of size `n x n`, where `(r, c)` represents:

  - A cell containing a thief if `grid[r][c] = 1`
  - An empty cell if `grid[r][c] = 0`

You are initially positioned at cell `(0, 0)`. In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell `(n - 1, n - 1)`.

An adjacent cell of cell `(r, c)`, is one of the cells `(r, c + 1)`, `(r, c - 1)`, `(r + 1, c)` and `(r - 1, c)` if it exists.

The Manhattan distance between two cells `(a, b)` and `(x, y)` is equal to `|a - x| + |b - y|`, where `|val|` denotes the absolute value of val.

Example 1:

Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).

Example 2:

Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.

Example 3:

Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.

Constraints:

  - `1 <= grid.length == n <= 400`
  - `grid[i].length == n`
  - `grid[i][j]` is either `0` or `1`.
  - There is at least one thief in the `grid`.
*/
problem({
  number: 2914,
  title: "Find the Safest Path in a Grid",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/find-the-safest-path-in-a-grid",
  tests: [
    {
      args: [
        [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 1],
        ],
      ],
      expected: 0,
    },
    {
      args: [
        [
          [0, 0, 1],
          [0, 0, 0],
          [0, 0, 0],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          [0, 0, 0, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 0, 0, 0],
        ],
      ],
      expected: 2,
    },
  ],
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  solve: function maximumSafenessFactor(grid) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3558 · Find a Safe Walk Through a Grid · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/find-a-safe-walk-through-a-grid
 ──────────────────────────────────────────────────────────────────────

You are given an `m x n` binary matrix `grid` and an integer `health`.

You start on the upper-left corner `(0, 0)` and would like to get to the lower-right corner `(m - 1, n - 1)`.

You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains positive.

Cells `(i, j)` with `grid[i][j] = 1` are considered unsafe and reduce your health by 1.

Return `true` if you can reach the final cell with a health value of 1 or more, and `false` otherwise.

Example 1:

Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1

Output: true

Explanation:

The final cell can be reached safely by walking along the gray cells below.

Example 2:

Input: grid = [[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], health = 3

Output: false

Explanation:

A minimum of 4 health points is needed to reach the final cell safely.

Example 3:

Input: grid = [[1,1,1],[1,0,1],[1,1,1]], health = 5

Output: true

Explanation:

The final cell can be reached safely by walking along the gray cells below.

Any path that does not go through the cell `(1, 1)` is unsafe since your health will drop to 0 when reaching the final cell.

Constraints:

  - `m == grid.length`
  - `n == grid[i].length`
  - `1 <= m, n <= 50`
  - `2 <= m * n`
  - `1 <= health <= m + n`
  - `grid[i][j]` is either 0 or 1.
*/
problem({
  number: 3558,
  title: "Find a Safe Walk Through a Grid",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/find-a-safe-walk-through-a-grid",
  tests: [
    {
      args: [
        [
          [0, 1, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 0, 1, 0],
        ],
        1,
      ],
      expected: true,
    },
    {
      args: [
        [
          [0, 1, 1, 0, 0, 0],
          [1, 0, 1, 0, 0, 0],
          [0, 1, 1, 1, 0, 1],
          [0, 0, 1, 0, 1, 0],
        ],
        3,
      ],
      expected: false,
    },
    {
      args: [
        [
          [1, 1, 1],
          [1, 0, 1],
          [1, 1, 1],
        ],
        5,
      ],
      expected: true,
    },
  ],
  /**
   * @param {number[][]} grid
   * @param {number} health
   * @return {boolean}
   */
  solve: function findSafeWalk(grid, health) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3561 · Remove Methods From Project · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/remove-methods-from-project
 ──────────────────────────────────────────────────────────────────────

You are maintaining a project that has `n` methods numbered from `0` to `n - 1`.

You are given two integers `n` and `k`, and a 2D integer array `invocations`, where `invocations[i] = [ai, bi]` indicates that method `ai` invokes method `bi`.

There is a known bug in method `k`. Method `k`, along with any method invoked by it, either directly or indirectly, are considered suspicious and we aim to remove them.

A group of methods can only be removed if no method outside the group invokes any methods within it.

Return an array containing all the remaining methods after removing all the suspicious methods. You may return the answer in any order. If it is not possible to remove all the suspicious methods, none should be removed.

Example 1:

Input: n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]

Output: [0,1,2,3]

Explanation:

Method 2 and method 1 are suspicious, but they are directly invoked by methods 3 and 0, which are not suspicious. We return all elements without removing anything.

Example 2:

Input: n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]

Output: [3,4]

Explanation:

Methods 0, 1, and 2 are suspicious and they are not directly invoked by any other method. We can remove them.

Example 3:

Input: n = 3, k = 2, invocations = [[1,2],[0,1],[2,0]]

Output: []

Explanation:

All methods are suspicious. We can remove them.

Constraints:

  - `1 <= n <= 10^5`
  - `0 <= k <= n - 1`
  - `0 <= invocations.length <= 2 * 10^5`
  - `invocations[i] == [ai, bi]`
  - `0 <= ai, bi <= n - 1`
  - `ai != bi`
  - `invocations[i] != invocations[j]`
*/
problem({
  number: 3561,
  title: "Remove Methods From Project",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/remove-methods-from-project",
  compare: "unordered", // answer order doesn't matter
  tests: [
    {
      args: [
        4,
        1,
        [
          [1, 2],
          [0, 1],
          [3, 2],
        ],
      ],
      expected: [0, 1, 2, 3],
    },
    {
      args: [
        5,
        0,
        [
          [1, 2],
          [0, 2],
          [0, 1],
          [3, 4],
        ],
      ],
      expected: [3, 4],
    },
    {
      args: [
        3,
        2,
        [
          [1, 2],
          [0, 1],
          [2, 0],
        ],
      ],
      expected: [],
    },
  ],
  /**
   * @param {number} n
   * @param {number} k
   * @param {number[][]} invocations
   * @return {number[]}
   */
  solve: function remainingMethods(n, k, invocations) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3823 · Count Islands With Total Value Divisible by K · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k
 ──────────────────────────────────────────────────────────────────────

You are given an `m x n` matrix `grid` and a positive integer `k`. An island is a group of positive integers (representing land) that are 4-directionally connected (horizontally or vertically).

The total value of an island is the sum of the values of all cells in the island.

Return the number of islands with a total value divisible by `k`.

Example 1:

Input: grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5

Output: 2

Explanation:

The grid contains four islands. The islands highlighted in blue have a total value that is divisible by 5, while the islands highlighted in red do not.

Example 2:

Input: grid = [[3,0,3,0], [0,3,0,3], [3,0,3,0]], k = 3

Output: 6

Explanation:

The grid contains six islands, each with a total value that is divisible by 3.

Constraints:

  - `m == grid.length`
  - `n == grid[i].length`
  - `1 <= m, n <= 1000`
  - `1 <= m * n <= 10^5`
  - `0 <= grid[i][j] <= 10^6`
  - `1 <= k <= 10^6`
*/
problem({
  number: 3823,
  title: "Count Islands With Total Value Divisible by K",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k",
  tests: [
    {
      args: [
        [
          [0, 2, 1, 0, 0],
          [0, 5, 0, 0, 5],
          [0, 0, 1, 0, 0],
          [0, 1, 4, 7, 0],
          [0, 2, 0, 0, 8],
        ],
        5,
      ],
      expected: 2,
    },
    {
      args: [
        [
          [3, 0, 3, 0],
          [0, 3, 0, 3],
          [3, 0, 3, 0],
        ],
        3,
      ],
      expected: 6,
    },
  ],
  /**
   * @param {number[][]} grid
   * @param {number} k
   * @return {number}
   */
  solve: function countIslands(grid, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3838 · Path Existence Queries in a Graph I · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/path-existence-queries-in-a-graph-i
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n` representing the number of nodes in a graph, labeled from 0 to `n - 1`.

You are also given an integer array `nums` of length `n` sorted in non-decreasing order, and an integer `maxDiff`.

An undirected edge exists between nodes `i` and `j` if the absolute difference between `nums[i]` and `nums[j]` is at most `maxDiff` (i.e., `|nums[i] - nums[j]| <= maxDiff`).

You are also given a 2D integer array `queries`. For each `queries[i] = [ui, vi]`, determine whether there exists a path between nodes `ui` and `vi`.

Return a boolean array `answer`, where `answer[i]` is `true` if there exists a path between `ui` and `vi` in the `i^th` query and `false` otherwise.

Example 1:

Input: n = 2, nums = [1,3], maxDiff = 1, queries = [[0,0],[0,1]]

Output: [true,false]

Explanation:

  - Query `[0,0]`: Node 0 has a trivial path to itself.
  - Query `[0,1]`: There is no edge between Node 0 and Node 1 because `|nums[0] - nums[1]| = |1 - 3| = 2`, which is greater than `maxDiff`.
  - Thus, the final answer after processing all the queries is `[true, false]`.

Example 2:

Input: n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]

Output: [false,false,true,true]

Explanation:

The resulting graph is:

  - Query `[0,1]`: There is no edge between Node 0 and Node 1 because `|nums[0] - nums[1]| = |2 - 5| = 3`, which is greater than `maxDiff`.
  - Query `[0,2]`: There is no edge between Node 0 and Node 2 because `|nums[0] - nums[2]| = |2 - 6| = 4`, which is greater than `maxDiff`.
  - Query `[1,3]`: There is a path between Node 1 and Node 3 through Node 2 since `|nums[1] - nums[2]| = |5 - 6| = 1` and `|nums[2] - nums[3]| = |6 - 8| = 2`, both of which are within `maxDiff`.
  - Query `[2,3]`: There is an edge between Node 2 and Node 3 because `|nums[2] - nums[3]| = |6 - 8| = 2`, which is equal to `maxDiff`.
  - Thus, the final answer after processing all the queries is `[false, false, true, true]`.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `0 <= nums[i] <= 10^5`
  - `nums` is sorted in non-decreasing order.
  - `0 <= maxDiff <= 10^5`
  - `1 <= queries.length <= 10^5`
  - `queries[i] == [ui, vi]`
  - `0 <= ui, vi < n`
*/
problem({
  number: 3838,
  title: "Path Existence Queries in a Graph I",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/path-existence-queries-in-a-graph-i",
  tests: [
    {
      args: [
        2,
        [1, 3],
        1,
        [
          [0, 0],
          [0, 1],
        ],
      ],
      expected: [true, false],
    },
    {
      args: [
        4,
        [2, 5, 6, 8],
        2,
        [
          [0, 1],
          [0, 2],
          [1, 3],
          [2, 3],
        ],
      ],
      expected: [false, false, true, true],
    },
  ],
  /**
   * @param {number} n
   * @param {number[]} nums
   * @param {number} maxDiff
   * @param {number[][]} queries
   * @return {boolean[]}
   */
  solve: function pathExistenceQueries(n, nums, maxDiff, queries) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3870 · Minimum Moves to Clean the Classroom · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/minimum-moves-to-clean-the-classroom
 ──────────────────────────────────────────────────────────────────────

You are given an `m x n` grid `classroom` where a student volunteer is tasked with cleaning up litter scattered around the room. Each cell in the grid is one of the following:

  - `'S'`: Starting position of the student
  - `'L'`: Litter that must be collected (once collected, the cell becomes empty)
  - `'R'`: Reset area that restores the student's energy to full capacity, regardless of their current energy level (can be used multiple times)
  - `'X'`: Obstacle the student cannot pass through
  - `'.'`: Empty space

You are also given an integer `energy`, representing the student's maximum energy capacity. The student starts with this energy from the starting position `'S'`.

Each move to an adjacent cell (up, down, left, or right) costs 1 unit of energy. If the energy reaches 0, the student can only continue if they are on a reset area `'R'`, which resets the energy to its maximum capacity `energy`.

Return the minimum number of moves required to collect all litter items, or `-1` if it's impossible.

Example 1:

Input: classroom = ["S.", "XL"], energy = 2

Output: 2

Explanation:

  - The student starts at cell (0, 0) with 2 units of energy.
  - Since cell `(1, 0)` contains an obstacle 'X', the student cannot move directly downward.
  - A valid sequence of moves to collect all litter is as follows:

    Move 1: From `(0, 0)` → `(0, 1)` with 1 unit of energy and 1 unit remaining.

    - Move 2: From `(0, 1)` → `(1, 1)` to collect the litter `'L'`.
  - The student collects all the litter using 2 moves. Thus, the output is 2.

Example 2:

Input: classroom = ["LS", "RL"], energy = 4

Output: 3

Explanation:

  - The student starts at cell (0, 1) with 4 units of energy.
  - A valid sequence of moves to collect all litter is as follows:

    Move 1: From `(0, 1)` → `(0, 0)` to collect the first litter `'L'` with 1 unit of energy used and 3 units remaining.

    - Move 2: From `(0, 0)` → `(1, 0)` to `'R'` to reset and restore energy back to 4.
    - Move 3: From `(1, 0)` → `(1, 1)` to collect the second litter 'L'.
  - The student collects all the litter using 3 moves. Thus, the output is 3.

Example 3:

Input: classroom = ["L.S", "RXL"], energy = 3

Output: -1

Explanation:

No valid path collects all `'L'`.

Constraints:

  - `1 <= m == classroom.length <= 20`
  - `1 <= n == classroom[i].length <= 20`
  - `classroom[i][j]` is one of `'S'`, `'L'`, `'R'`, `'X'`, or `'.'`
  - `1 <= energy <= 50`
  - There is exactly one `'S'` in the grid.
  - There are at most 10 `'L'` cells in the grid.
*/
problem({
  number: 3870,
  title: "Minimum Moves to Clean the Classroom",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/minimum-moves-to-clean-the-classroom",
  tests: [
    { args: [["S.", "XL"], 2], expected: 2 },
    { args: [["LS", "RL"], 4], expected: 3 },
    { args: [["L.S", "RXL"], 3], expected: -1 },
  ],
  /**
   * @param {string[]} classroom
   * @param {number} energy
   * @return {number}
   */
  solve: function minMoves(classroom, energy) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4104 · Shortest Path With At Most K Consecutive Identical Characters · Medium · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n` representing the number of nodes in a directed weighted graph, numbered from 0 to `n - 1`. This is represented by a 2D integer array `edges`, where `edges[i] = [ui, vi, wi]` represents a directed edge from node `ui` to node `vi` with weight `wi`.

You are also given a string `labels` of length `n`, where `labels[i]` is the character assigned to node `i`, and an integer `k`.

Return the minimum total edge weight of a path from node 0 to node `n - 1` such that the concatenation of the labels of the nodes along the path contains at most `k` consecutive identical characters. If no valid path exists, return -1.

Example 1:

Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 1

Output: 3

Explanation:

The optimal valid path from node 0 to node 2 is as follows:

  - Use `edges[2] = [0, 2, 3]` to reach node 2 with a weight `wi = 3`.

The corresponding concatenation of labels is `"ab"`, which satisfies at most `k = 1` consecutive identical characters. Thus, the answer is 3.

Example 2:

Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 2

Output: 2

Explanation:

The optimal valid path from node 0 to node 2 is as follows:

  - Use `edges[0] = [0, 1, 1]` to reach node 1 with weight `wi = 1`.
  - Use `edges[1] = [1, 2, 1]` to reach node 2 with weight `wi = 1`.

The corresponding concatenation of labels is `"aab"`, which satisfies at most `k = 2` consecutive identical characters. Thus, the answer is 2.

Example 3:

Input: n = 3, edges = [[0,1,1],[1,2,1]], labels = "aaa", k = 2

Output: -1

Explanation:

There is no valid path from node 0 to node 2 that satisfies at most `k = 2` consecutive identical characters. Thus, the answer is -1.

Constraints:

  - `1 <= n == labels.length <= 5 * 10^4`
  - `0 <= edges.length <= 5 * 10^4`
  - `edges[i] == [ui, vi, wi]`
  - `0 <= ui, vi <= n - 1`
  - `ui != vi`
  - `1 <= wi <= 10^4`
  - `labels` consists of lowercase English letters
  - `1 <= k <= 50`
*/
problem({
  number: 4104,
  title: "Shortest Path With At Most K Consecutive Identical Characters",
  difficulty: "Medium",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters",
  tests: [
    {
      args: [
        3,
        [
          [0, 1, 1],
          [1, 2, 1],
          [0, 2, 3],
        ],
        "aab",
        1,
      ],
      expected: 3,
    },
    {
      args: [
        3,
        [
          [0, 1, 1],
          [1, 2, 1],
          [0, 2, 3],
        ],
        "aab",
        2,
      ],
      expected: 2,
    },
    {
      args: [
        3,
        [
          [0, 1, 1],
          [1, 2, 1],
        ],
        "aaa",
        2,
      ],
      expected: -1,
    },
  ],
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @param {string} labels
   * @param {number} k
   * @return {number}
   */
  solve: function shortestPath(n, edges, labels, k) {
    // Write your solution here
  },
});

// ── Medium · Dynamic Programming (1) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3831 · Find X Value of Array I · Medium · Dynamic Programming
 https://leetcode.com/problems/find-x-value-of-array-i
 ──────────────────────────────────────────────────────────────────────

You are given an array of positive integers `nums`, and a positive integer `k`.

You are allowed to perform an operation once on `nums`, where in each operation you can remove any non-overlapping prefix and suffix from `nums` such that `nums` remains non-empty.

You need to find the x-value of `nums`, which is the number of ways to perform this operation so that the product of the remaining elements leaves a remainder of `x` when divided by `k`.

Return an array `result` of size `k` where `result[x]` is the x-value of `nums` for `0 <= x <= k - 1`.

A prefix of an array is a subarray that starts from the beginning of the array and extends to any point within it.

A suffix of an array is a subarray that starts at any point within the array and extends to the end of the array.

Note that the prefix and suffix to be chosen for the operation can be empty.

Example 1:

Input: nums = [1,2,3,4,5], k = 3

Output: [9,2,4]

Explanation:

  - For `x = 0`, the possible operations include all possible ways to remove non-overlapping prefix/suffix that do not remove `nums[2] == 3`.
  - For `x = 1`, the possible operations are:

    Remove the empty prefix and the suffix `[2, 3, 4, 5]`. `nums` becomes `[1]`.

    - Remove the prefix `[1, 2, 3]` and the suffix `[5]`. `nums` becomes `[4]`.
  - For `x = 2`, the possible operations are:

    Remove the empty prefix and the suffix `[3, 4, 5]`. `nums` becomes `[1, 2]`.

    - Remove the prefix `[1]` and the suffix `[3, 4, 5]`. `nums` becomes `[2]`.
    - Remove the prefix `[1, 2, 3]` and the empty suffix. `nums` becomes `[4, 5]`.
    - Remove the prefix `[1, 2, 3, 4]` and the empty suffix. `nums` becomes `[5]`.

Example 2:

Input: nums = [1,2,4,8,16,32], k = 4

Output: [18,1,2,0]

Explanation:

  - For `x = 0`, the only operations that do not result in `x = 0` are:

    Remove the empty prefix and the suffix `[4, 8, 16, 32]`. `nums` becomes `[1, 2]`.

    - Remove the empty prefix and the suffix `[2, 4, 8, 16, 32]`. `nums` becomes `[1]`.
    - Remove the prefix `[1]` and the suffix `[4, 8, 16, 32]`. `nums` becomes `[2]`.
  - For `x = 1`, the only possible operation is:

    Remove the empty prefix and the suffix `[2, 4, 8, 16, 32]`. `nums` becomes `[1]`.

  - For `x = 2`, the possible operations are:

    Remove the empty prefix and the suffix `[4, 8, 16, 32]`. `nums` becomes `[1, 2]`.

    - Remove the prefix `[1]` and the suffix `[4, 8, 16, 32]`. `nums` becomes `[2]`.
  - For `x = 3`, there is no possible way to perform the operation.

Example 3:

Input: nums = [1,1,2,1,1], k = 2

Output: [9,6]

Constraints:

  - `1 <= nums[i] <= 10^9`
  - `1 <= nums.length <= 10^5`
  - `1 <= k <= 5`
*/
problem({
  number: 3831,
  title: "Find X Value of Array I",
  difficulty: "Medium",
  pattern: "Dynamic Programming",
  url: "https://leetcode.com/problems/find-x-value-of-array-i",
  tests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: [9, 2, 4] },
    { args: [[1, 2, 4, 8, 16, 32], 4], expected: [18, 1, 2, 0] },
    { args: [[1, 1, 2, 1, 1], 2], expected: [9, 6] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  solve: function resultArray(nums, k) {
    // Write your solution here
  },
});

// ── Medium · Grid & Path DP (2) ──────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3938 · Twisted Mirror Path Count · Medium · Grid & Path DP
 https://leetcode.com/problems/twisted-mirror-path-count
 ──────────────────────────────────────────────────────────────────────

Given an `m x n` binary grid `grid` where:

  - `grid[i][j] == 0` represents an empty cell, and
  - `grid[i][j] == 1` represents a mirror.

A robot starts at the top-left corner of the grid `(0, 0)` and wants to reach the bottom-right corner `(m - 1, n - 1)`. It can move only right or down. If the robot attempts to move into a mirror cell, it is reflected before entering that cell:

  - If it tries to move right into a mirror, it is turned down and moved into the cell directly below the mirror.
  - If it tries to move down into a mirror, it is turned right and moved into the cell directly to the right of the mirror.

If this reflection would cause the robot to move outside the `grid` boundaries, the path is considered invalid and should not be counted.

Return the number of unique valid paths from `(0, 0)` to `(m - 1, n - 1)`.

Since the answer may be very large, return it modulo `10^9 + 7`.

Note: If a reflection moves the robot into a mirror cell, the robot is immediately reflected again based on the direction it used to enter that mirror: if it entered while moving right, it will be turned down; if it entered while moving down, it will be turned right. This process will continue until either the last cell is reached, the robot moves out of bounds or the robot moves to a non-mirror cell.

Example 1:

Input: grid = [[0,1,0],[0,0,1],[1,0,0]]

Output: 5

Explanation:

      Number
      Full Path

      1
      (0, 0) → (0, 1) [M] → (1, 1) → (1, 2) [M] → (2, 2)

      2
      (0, 0) → (0, 1) [M] → (1, 1) → (2, 1) → (2, 2)

      3
      (0, 0) → (1, 0) → (1, 1) → (1, 2) [M] → (2, 2)

      4
      (0, 0) → (1, 0) → (1, 1) → (2, 1) → (2, 2)

      5
      (0, 0) → (1, 0) → (2, 0) [M] → (2, 1) → (2, 2)

`[M]` indicates the robot attempted to enter a mirror cell and instead reflected.

Example 2:

Input: grid = [[0,0],[0,0]]

Output: 2

Explanation:

      Number
      Full Path

      1
      (0, 0) → (0, 1) → (1, 1)

      2
      (0, 0) → (1, 0) → (1, 1)

Example 3:

Input: grid = [[0,1,1],[1,1,0]]

Output: 1

Explanation:

      Number
      Full Path

      1
      (0, 0) → (0, 1) [M] → (1, 1) [M] → (1, 2)

`(0, 0) → (1, 0) [M] → (1, 1) [M] → (2, 1)` goes out of bounds, so it is invalid.

Constraints:

  m == grid.length
  n == grid[i].length
  2 <= m, n <= 500
  grid[i][j] is either 0 or 1.
  grid[0][0] == grid[m - 1][n - 1] == 0
*/
problem({
  number: 3938,
  title: "Twisted Mirror Path Count",
  difficulty: "Medium",
  pattern: "Grid & Path DP",
  url: "https://leetcode.com/problems/twisted-mirror-path-count",
  tests: [
    {
      args: [
        [
          [0, 1, 0],
          [0, 0, 1],
          [1, 0, 0],
        ],
      ],
      expected: 5,
    },
    {
      args: [
        [
          [0, 0],
          [0, 0],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          [0, 1, 1],
          [1, 1, 0],
        ],
      ],
      expected: 1,
    },
  ],
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  solve: function uniquePaths(grid) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4205 · Minimum XOR Path in a Grid · Medium · Grid & Path DP
 https://leetcode.com/problems/minimum-xor-path-in-a-grid
 ──────────────────────────────────────────────────────────────────────

You are given a 2D integer array `grid` of size `m * n`.

You start at the top-left cell `(0, 0)` and want to reach the bottom-right cell `(m - 1, n - 1)`.

At each step, you may move either right or down.

The cost of a path is defined as the bitwise XOR of all the values in the cells along that path, including the start and end cells.

Return the minimum possible XOR value among all valid paths from `(0, 0)` to `(m - 1, n - 1)`.

Example 1:

Input: grid = [[1,2],[3,4]]

Output: 6

Explanation:

There are two valid paths:

  - `(0, 0) → (0, 1) → (1, 1)` with XOR: `1 XOR 2 XOR 4 = 7`
  - `(0, 0) → (1, 0) → (1, 1)` with XOR: `1 XOR 3 XOR 4 = 6`

The minimum XOR value among all valid paths is 6.

Example 2:

Input: grid = [[6,7],[5,8]]

Output: 9

Explanation:

There are two valid paths:

  - `(0, 0) → (0, 1) → (1, 1)` with XOR: `6 XOR 7 XOR 8 = 9`
  - `(0, 0) → (1, 0) → (1, 1)` with XOR: `6 XOR 5 XOR 8 = 11`

The minimum XOR value among all valid paths is 9.

Example 3:

Input: grid = [[2,7,5]]

Output: 0

Explanation:

There is only one valid path:

  - `(0, 0) → (0, 1) → (0, 2)` with XOR: `2 XOR 7 XOR 5 = 0`

The XOR value of this path is 0, which is the minimum possible.

Constraints:

  - `1 <= m == grid.length <= 1000`
  - `1 <= n == grid[i].length <= 1000`
  - `m * n <= 1000`
  - `0 <= grid[i][j] <= 1023`
*/
problem({
  number: 4205,
  title: "Minimum XOR Path in a Grid",
  difficulty: "Medium",
  pattern: "Grid & Path DP",
  url: "https://leetcode.com/problems/minimum-xor-path-in-a-grid",
  tests: [
    {
      args: [
        [
          [1, 2],
          [3, 4],
        ],
      ],
      expected: 6,
    },
    {
      args: [
        [
          [6, 7],
          [5, 8],
        ],
      ],
      expected: 9,
    },
    { args: [[[2, 7, 5]]], expected: 0 },
  ],
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  solve: function minCost(grid) {
    // Write your solution here
  },
});

// ── Medium · Game Theory (5) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #486 · Predict the Winner · Medium · Game Theory
 https://leetcode.com/problems/predict-the-winner
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums`. Two players are playing a game with this array: player 1 and player 2.

Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of `0`. At each turn, the player takes one of the numbers from either end of the array (i.e., `nums[0]` or `nums[nums.length - 1]`) which reduces the size of the array by `1`. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

Return `true` if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return `true`. You may assume that both players are playing optimally.

Example 1:

Input: nums = [1,5,2]
Output: false
Explanation: Initially, player 1 can choose between 1 and 2.
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2).
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5.
Hence, player 1 will never be the winner and you need to return false.

Example 2:

Input: nums = [1,5,233,7]
Output: true
Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

Constraints:

  - `1 <= nums.length <= 20`
  - `0 <= nums[i] <= 10^7`
*/
problem({
  number: 486,
  title: "Predict the Winner",
  difficulty: "Medium",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/predict-the-winner",
  tests: [
    { args: [[1, 5, 2]], expected: false },
    { args: [[1, 5, 233, 7]], expected: true },
  ],
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  solve: function predictTheWinner(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #909 · Stone Game · Medium · Game Theory
 https://leetcode.com/problems/stone-game
 ──────────────────────────────────────────────────────────────────────

Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones `piles[i]`.

The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.

Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alice and Bob play optimally, return `true` if Alice wins the game, or `false` if Bob wins.

Example 1:

Input: piles = [5,3,4,5]
Output: true
Explanation:
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.

Example 2:

Input: piles = [3,7,2,3]
Output: true

Constraints:

  - `2 <= piles.length <= 500`
  - `piles.length` is even.
  - `1 <= piles[i] <= 500`
  - `sum(piles[i])` is odd.
*/
problem({
  number: 909,
  title: "Stone Game",
  difficulty: "Medium",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game",
  tests: [
    { args: [[5, 3, 4, 5]], expected: true },
    { args: [[3, 7, 2, 3]], expected: true },
  ],
  /**
   * @param {number[]} piles
   * @return {boolean}
   */
  solve: function stoneGame(piles) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1240 · Stone Game II · Medium · Game Theory
 https://leetcode.com/problems/stone-game-ii
 ──────────────────────────────────────────────────────────────────────

Alice and Bob continue their games with piles of stones. There are a number of piles arranged in a row, and each pile has a positive integer number of stones `piles[i]`. The objective of the game is to end with the most stones.

Alice and Bob take turns, with Alice starting first.

On each player's turn, that player can take all the stones in the first `X` remaining piles, where `1 <= X <= 2M`. Then, we set `M = max(M, X)`. Initially, M = 1.

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

Example 1:

Input: piles = [2,7,9,4,4]

Output: 10

Explanation:

  - If Alice takes one pile at the beginning, Bob takes two piles, then Alice takes 2 piles again. Alice can get `2 + 4 + 4 = 10` stones in total.
  - If Alice takes two piles at the beginning, then Bob can take all three piles left. In this case, Alice get `2 + 7 = 9` stones in total.

So we return 10 since it's larger.

Example 2:

Input: piles = [1,2,3,4,5,100]

Output: 104

Constraints:

  - `1 <= piles.length <= 100`
  - `1 <= piles[i] <= 10^4`
*/
problem({
  number: 1240,
  title: "Stone Game II",
  difficulty: "Medium",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game-ii",
  tests: [
    { args: [[2, 7, 9, 4, 4]], expected: 10 },
    { args: [[1, 2, 3, 4, 5, 100]], expected: 104 },
  ],
  /**
   * @param {number[]} piles
   * @return {number}
   */
  solve: function stoneGameII(piles) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2039 · Sum Game · Medium · Game Theory
 https://leetcode.com/problems/sum-game
 ──────────────────────────────────────────────────────────────────────

Alice and Bob take turns playing a game, with Alice starting first.

You are given a string `num` of even length consisting of digits and `'?'` characters. On each turn, a player will do the following if there is still at least one `'?'` in `num`:

  - Choose an index `i` where `num[i] == '?'`.
  - Replace `num[i]` with any digit between `'0'` and `'9'`.

The game ends when there are no more `'?'` characters in `num`.

For Bob to win, the sum of the digits in the first half of `num` must be equal to the sum of the digits in the second half. For Alice to win, the sums must not be equal.

  - For example, if the game ended with `num = "243801"`, then Bob wins because `2+4+3 = 8+0+1`. If the game ended with `num = "243803"`, then Alice wins because `2+4+3 != 8+0+3`.

Assuming Alice and Bob play optimally, return `true` if Alice will win and `false` if Bob will win.

Example 1:

Input: num = "5023"
Output: false
Explanation: There are no moves to be made.
The sum of the first half is equal to the sum of the second half: 5 + 0 = 2 + 3.

Example 2:

Input: num = "25??"
Output: true
Explanation: Alice can replace one of the '?'s with '9' and it will be impossible for Bob to make the sums equal.

Example 3:

Input: num = "?3295???"
Output: false
Explanation: It can be proven that Bob will always win. One possible outcome is:
- Alice replaces the first '?' with '9'. num = "93295???".
- Bob replaces one of the '?' in the right half with '9'. num = "932959??".
- Alice replaces one of the '?' in the right half with '2'. num = "9329592?".
- Bob replaces the last '?' in the right half with '7'. num = "93295927".
Bob wins because 9 + 3 + 2 + 9 = 5 + 9 + 2 + 7.

Constraints:

  - `2 <= num.length <= 10^5`
  - `num.length` is even.
  - `num` consists of only digits and `'?'`.
*/
problem({
  number: 2039,
  title: "Sum Game",
  difficulty: "Medium",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/sum-game",
  tests: [
    { args: ["5023"], expected: false },
    { args: ["25??"], expected: true },
    { args: ["?3295???"], expected: false },
  ],
  /**
   * @param {string} num
   * @return {boolean}
   */
  solve: function sumGame(num) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2156 · Stone Game IX · Medium · Game Theory
 https://leetcode.com/problems/stone-game-ix
 ──────────────────────────────────────────────────────────────────────

Alice and Bob continue their games with stones. There is a row of n stones, and each stone has an associated value. You are given an integer array `stones`, where `stones[i]` is the value of the `i^th` stone.

Alice and Bob take turns, with Alice starting first. On each turn, the player may remove any stone from `stones`. The player who removes a stone loses if the sum of the values of all removed stones is divisible by `3`. Bob will win automatically if there are no remaining stones (even if it is Alice's turn).

Assuming both players play optimally, return `true` if Alice wins and `false` if Bob wins.

Example 1:

Input: stones = [2,1]
Output: true
Explanation: The game will be played as follows:
- Turn 1: Alice can remove either stone.
- Turn 2: Bob removes the remaining stone.
The sum of the removed stones is 1 + 2 = 3 and is divisible by 3. Therefore, Bob loses and Alice wins the game.

Example 2:

Input: stones = [2]
Output: false
Explanation: Alice will remove the only stone, and the sum of the values on the removed stones is 2.
Since all the stones are removed and the sum of values is not divisible by 3, Bob wins the game.

Example 3:

Input: stones = [5,1,2,4,3]
Output: false
Explanation: Bob will always win. One possible way for Bob to win is shown below:
- Turn 1: Alice can remove the second stone with value 1. Sum of removed stones = 1.
- Turn 2: Bob removes the fifth stone with value 3. Sum of removed stones = 1 + 3 = 4.
- Turn 3: Alices removes the fourth stone with value 4. Sum of removed stones = 1 + 3 + 4 = 8.
- Turn 4: Bob removes the third stone with value 2. Sum of removed stones = 1 + 3 + 4 + 2 = 10.
- Turn 5: Alice removes the first stone with value 5. Sum of removed stones = 1 + 3 + 4 + 2 + 5 = 15.
Alice loses the game because the sum of the removed stones (15) is divisible by 3. Bob wins the game.

Constraints:

  - `1 <= stones.length <= 10^5`
  - `1 <= stones[i] <= 10^4`
*/
problem({
  number: 2156,
  title: "Stone Game IX",
  difficulty: "Medium",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game-ix",
  tests: [
    { args: [[2, 1]], expected: true },
    { args: [[2]], expected: false },
    { args: [[5, 1, 2, 4, 3]], expected: false },
  ],
  /**
   * @param {number[]} stones
   * @return {boolean}
   */
  solve: function stoneGameIX(stones) {
    // Write your solution here
  },
});

// ── Medium · Math & Number Theory (3) ────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1725 · Number of Sets of K Non-Overlapping Line Segments · Medium · Math & Number Theory
 https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments
 ──────────────────────────────────────────────────────────────────────

Given `n` points on a 1-D plane, where the `i^th` point (from `0` to `n-1`) is at `x = i`, find the number of ways we can draw exactly `k` non-overlapping line segments such that each segment covers two or more points. The endpoints of each segment must have integral coordinates. The `k` line segments do not have to cover all `n` points, and they are allowed to share endpoints.

Return the number of ways we can draw `k` non-overlapping line segments. Since this number can be huge, return it modulo `10^9 + 7`.

Example 1:

Input: n = 4, k = 2
Output: 5
Explanation: The two line segments are shown in red and blue.
The image above shows the 5 different ways {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)}, {(1,2),(2,3)}, {(0,1),(1,2)}.

Example 2:

Input: n = 3, k = 1
Output: 3
Explanation: The 3 ways are {(0,1)}, {(0,2)}, {(1,2)}.

Example 3:

Input: n = 30, k = 7
Output: 796297179
Explanation: The total number of possible ways to draw 7 line segments is 3796297200. Taking this number modulo 10^9 + 7 gives us 796297179.

Constraints:

  - `2 <= n <= 1000`
  - `1 <= k <= n-1`
*/
problem({
  number: 1725,
  title: "Number of Sets of K Non-Overlapping Line Segments",
  difficulty: "Medium",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments",
  tests: [
    { args: [4, 2], expected: 5 },
    { args: [3, 1], expected: 3 },
    { args: [30, 7], expected: 796297179 },
  ],
  /**
   * @param {number} n
   * @param {number} k
   * @return {number}
   */
  solve: function numberOfSets(n, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4242 · Sum of GCD of Formed Pairs · Medium · Math & Number Theory
 https://leetcode.com/problems/sum-of-gcd-of-formed-pairs
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n`.

Construct an array `prefixGcd` where for each index `i`:

  - Let `mxi = max(nums[0], nums[1], ..., nums[i])`.
  - `prefixGcd[i] = gcd(nums[i], mxi)`.

After constructing `prefixGcd`:

  - Sort `prefixGcd` in non-decreasing order.
  - Form pairs by taking the smallest unpaired element and the largest unpaired element.
  - Repeat this process until no more pairs can be formed.
  - For each formed pair, compute the `gcd` of the two elements.
  - If `n` is odd, the middle element in the `prefixGcd` array remains unpaired and should be ignored.

Return an integer denoting the sum of the GCD values of all formed pairs.

The term `gcd(a, b)` denotes the greatest common divisor of `a` and `b`.

Example 1:

Input: nums = [2,6,4]

Output: 2

Explanation:

Construct `prefixGcd`:

      `i`
      `nums[i]`
      `mxi`
      `prefixGcd[i]`

      0
      2
      2
      2

      1
      6
      6
      6

      2
      4
      6
      2

`prefixGcd = [2, 6, 2]`. After sorting, it forms `[2, 2, 6]`.

Pair the smallest and largest elements: `gcd(2, 6) = 2`. The remaining middle element 2 is ignored. Thus, the sum is 2.

Example 2:

Input: nums = [3,6,2,8]

Output: 5

Explanation:

Construct `prefixGcd`:

      `i`
      `nums[i]`
      `mxi`
      `prefixGcd[i]`

      0
      3
      3
      3

      1
      6
      6
      6

      2
      2
      6
      2

      3
      8
      8
      8

`prefixGcd = [3, 6, 2, 8]`. After sorting, it forms `[2, 3, 6, 8]`.

Form pairs: `gcd(2, 8) = 2` and `gcd(3, 6) = 3`. Thus, the sum is `2 + 3 = 5`.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `1 <= nums[i] <= 10^9`
*/
problem({
  number: 4242,
  title: "Sum of GCD of Formed Pairs",
  difficulty: "Medium",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/sum-of-gcd-of-formed-pairs",
  tests: [
    { args: [[2, 6, 4]], expected: 2 },
    { args: [[3, 6, 2, 8]], expected: 5 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function gcdSum(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4258 · Construct Uniform Parity Array II · Medium · Math & Number Theory
 https://leetcode.com/problems/construct-uniform-parity-array-ii
 ──────────────────────────────────────────────────────────────────────

You are given an array `nums1` of `n` distinct integers.

You want to construct another array `nums2` of length `n` such that the elements in `nums2` are either all odd or all even.

For each index `i`, you must choose exactly one of the following (in any order):

  - `nums2[i] = nums1[i]`
  - `nums2[i] = nums1[i] - nums1[j]`, for an index `j != i`, such that `nums1[i] - nums1[j] >= 1`

Return `true` if it is possible to construct such an array, otherwise return `false`.

Example 1:

Input: nums1 = [1,4,7]

Output: true

Explanation:

  - Set `nums2[0] = nums1[0] = 1`.
  - Set `nums2[1] = nums1[1] - nums1[0] = 4 - 1 = 3`.
  - Set `nums2[2] = nums1[2] = 7`.
  - `nums2 = [1, 3, 7]`, and all elements are odd. Thus, the answer is `true`.

Example 2:

Input: nums1 = [2,3]

Output: false

Explanation:

It is not possible to construct `nums2` such that all elements have the same parity. Thus, the answer is `false`.

Example 3:

Input: nums1 = [4,6]

Output: true

Explanation:

  - Set `nums2[0] = nums1[0] = 4`.
  - Set `nums2[1] = nums1[1] = 6`.
  - `nums2 = [4, 6]`, and all elements are even. Thus, the answer is `true`.

Constraints:

  - `1 <= n == nums1.length <= 10^5`
  - `1 <= nums1[i] <= 10^9`
  - `nums1` consists of distinct integers.
*/
problem({
  number: 4258,
  title: "Construct Uniform Parity Array II",
  difficulty: "Medium",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/construct-uniform-parity-array-ii",
  tests: [
    { args: [[1, 4, 7]], expected: true },
    { args: [[2, 3]], expected: false },
    { args: [[4, 6]], expected: true },
  ],
  /**
   * @param {number[]} nums1
   * @return {boolean}
   */
  solve: function uniformArray(nums1) {
    // Write your solution here
  },
});

// ── Medium · Digits & Number Arithmetic (4) ──────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1212 · Sequential Digits · Medium · Digits & Number Arithmetic
 https://leetcode.com/problems/sequential-digits
 ──────────────────────────────────────────────────────────────────────

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range `[low, high]` inclusive that have sequential digits.

Example 1:

Input: low = 100, high = 300
Output: [123,234]

Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

Constraints:

  - `10 <= low <= high <= 10^9`
*/
problem({
  number: 1212,
  title: "Sequential Digits",
  difficulty: "Medium",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/sequential-digits",
  tests: [
    { args: [100, 300], expected: [123, 234] },
    {
      args: [1000, 13000],
      expected: [1234, 2345, 3456, 4567, 5678, 6789, 12345],
    },
  ],
  /**
   * @param {number} low
   * @param {number} high
   * @return {number[]}
   */
  solve: function sequentialDigits(low, high) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4084 · Maximize Sum of Squares of Digits · Medium · Digits & Number Arithmetic
 https://leetcode.com/problems/maximize-sum-of-squares-of-digits
 ──────────────────────────────────────────────────────────────────────

You are given two positive integers `num` and `sum`.

A positive integer `n` is good if it satisfies both of the following:

  - The number of digits in `n` is exactly `num`.
  - The sum of digits in `n` is exactly `sum`.

The score of a good integer `n` is the sum of the squares of digits in `n`.

Return a string denoting the good integer `n` that achieves the maximum score. If there are multiple possible integers, return the maximum one. If no such integer exists, return an empty string.

Example 1:

Input: num = 2, sum = 3

Output: "30"

Explanation:

There are 3 good integers: 12, 21, and 30.

  - The score of 12 is `1^2 + 2^2 = 5`.
  - The score of 21 is `2^2 + 1^2 = 5`.
  - The score of 30 is `3^2 + 0^2 = 9`.

The maximum score is 9, which is achieved by the good integer 30. Therefore, the answer is `"30"`.

Example 2:

Input: num = 2, sum = 17

Output: "98"

Explanation:

There are 2 good integers: 89 and 98.

  - The score of 89 is `8^2 + 9^2 = 145`.
  - The score of 98 is `9^2 + 8^2 = 145`.

The maximum score is 145. The maximum good integer that achieves this score is 98. Therefore, the answer is `"98"`.

Example 3:

Input: num = 1, sum = 10

Output: ""

Explanation:

There are no integers that have exactly 1 digit and whose digits sum to 10. Therefore, the answer is `""`.

Constraints:

  - `1 <= num <= 2 * 10^5`
  - `1 <= sum <= 2 * 10^6`
*/
problem({
  number: 4084,
  title: "Maximize Sum of Squares of Digits",
  difficulty: "Medium",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/maximize-sum-of-squares-of-digits",
  tests: [
    { args: [2, 3], expected: "30" },
    { args: [2, 17], expected: "98" },
    { args: [1, 10], expected: "" },
  ],
  /**
   * @param {number} num
   * @param {number} sum
   * @return {string}
   */
  solve: function maxSumOfSquares(num, sum) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4136 · Concatenate Non-Zero Digits and Multiply by Sum II · Medium · Digits & Number Arithmetic
 https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii
 ──────────────────────────────────────────────────────────────────────

You are given a string `s` of length `m` consisting of digits. You are also given a 2D integer array `queries`, where `queries[i] = [li, ri]`.

For each `queries[i]`, extract the substring `s[li..ri]`. Then, perform the following:

  - Form a new integer `x` by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, `x = 0`.
  - Let `sum` be the sum of digits in `x`. The answer is `x * sum`.

Return an array of integers `answer` where `answer[i]` is the answer to the `i^th` query.

Since the answers may be very large, return them modulo `10^9 + 7`.

Example 1:

Input: s = "10203004", queries = [[0,7],[1,3],[4,6]]

Output: [12340, 4, 9]

Explanation:

  - `s[0..7] = "10203004"`

    `x = 1234`

    - `sum = 1 + 2 + 3 + 4 = 10`
    - Therefore, answer is `1234 * 10 = 12340`.
  - `s[1..3] = "020"`

    `x = 2`

    - `sum = 2`
    - Therefore, the answer is `2 * 2 = 4`.
  - `s[4..6] = "300"`

    `x = 3`

    - `sum = 3`
    - Therefore, the answer is `3 * 3 = 9`.

Example 2:

Input: s = "1000", queries = [[0,3],[1,1]]

Output: [1, 0]

Explanation:

  - `s[0..3] = "1000"`

    `x = 1`

    - `sum = 1`
    - Therefore, the answer is `1 * 1 = 1`.
  - `s[1..1] = "0"`

    `x = 0`

    - `sum = 0`
    - Therefore, the answer is `0 * 0 = 0`.

Example 3:

Input: s = "9876543210", queries = [[0,9]]

Output: [444444137]

Explanation:

  - `s[0..9] = "9876543210"`

    `x = 987654321`

    - `sum = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45`
    - Therefore, the answer is `987654321 * 45 = 44444444445`.
    - We return `44444444445 modulo (10^9 + 7) = 444444137`.

Constraints:

  - `1 <= m == s.length <= 10^5`
  - `s` consists of digits only.
  - `1 <= queries.length <= 10^5`
  - `queries[i] = [li, ri]`
  - `0 <= li <= ri < m`
*/
problem({
  number: 4136,
  title: "Concatenate Non-Zero Digits and Multiply by Sum II",
  difficulty: "Medium",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii",
  tests: [
    {
      args: [
        "10203004",
        [
          [0, 7],
          [1, 3],
          [4, 6],
        ],
      ],
      expected: [12340, 4, 9],
    },
    {
      args: [
        "1000",
        [
          [0, 3],
          [1, 1],
        ],
      ],
      expected: [1, 0],
    },
    { args: ["9876543210", [[0, 9]]], expected: [444444137] },
  ],
  /**
   * @param {string} s
   * @param {number[][]} queries
   * @return {number[]}
   */
  solve: function sumAndMultiply(s, queries) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4248 · Count Commas in Range II · Medium · Digits & Number Arithmetic
 https://leetcode.com/problems/count-commas-in-range-ii
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n`.

Return the total number of commas used when writing all integers from `[1, n]` (inclusive) in standard number formatting.

In standard formatting:

  - A comma is inserted after every three digits from the right.
  - Numbers with fewer than 4 digits contain no commas.

Example 1:

Input: n = 1002

Output: 3

Explanation:

The numbers `"1,000"`, `"1,001"`, and `"1,002"` each contain one comma, giving a total of 3.

Example 2:

Input: n = 998

Output: 0

Explanation:

All numbers from 1 to 998 have fewer than four digits. Therefore, no commas are used.

Constraints:

  - `1 <= n <= 10^15`
*/
problem({
  number: 4248,
  title: "Count Commas in Range II",
  difficulty: "Medium",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/count-commas-in-range-ii",
  tests: [
    { args: [1002], expected: 3 },
    { args: [998], expected: 0 },
  ],
  /**
   * @param {number} n
   * @return {number}
   */
  solve: function countCommas(n) {
    // Write your solution here
  },
});

// ── Medium · Bit Manipulation (4) ────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3820 · Number of Unique XOR Triplets II · Medium · Bit Manipulation
 https://leetcode.com/problems/number-of-unique-xor-triplets-ii
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums`.

A XOR triplet is defined as the XOR of three elements `nums[i] XOR nums[j] XOR nums[k]` where `i <= j <= k`.

Return the number of unique XOR triplet values from all possible triplets `(i, j, k)`.

Example 1:

Input: nums = [1,3]

Output: 2

Explanation:

The possible XOR triplet values are:

  `(0, 0, 0) → 1 XOR 1 XOR 1 = 1`
  `(0, 0, 1) → 1 XOR 1 XOR 3 = 3`
  `(0, 1, 1) → 1 XOR 3 XOR 3 = 1`
  `(1, 1, 1) → 3 XOR 3 XOR 3 = 3`

The unique XOR values are {1, 3}. Thus, the output is 2.

Example 2:

Input: nums = [6,7,8,9]

Output: 4

Explanation:

The possible XOR triplet values are {6, 7, 8, 9}. Thus, the output is 4.

Constraints:

  - `1 <= nums.length <= 1500`
  - `1 <= nums[i] <= 1500`
*/
problem({
  number: 3820,
  title: "Number of Unique XOR Triplets II",
  difficulty: "Medium",
  pattern: "Bit Manipulation",
  url: "https://leetcode.com/problems/number-of-unique-xor-triplets-ii",
  tests: [
    { args: [[1, 3]], expected: 2 },
    { args: [[6, 7, 8, 9]], expected: 4 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function uniqueXorTriplets(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3824 · Number of Unique XOR Triplets I · Medium · Bit Manipulation
 https://leetcode.com/problems/number-of-unique-xor-triplets-i
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the numbers in the range `[1, n]`.

A XOR triplet is defined as the XOR of three elements `nums[i] XOR nums[j] XOR nums[k]` where `i <= j <= k`.

Return the number of unique XOR triplet values from all possible triplets `(i, j, k)`.

Example 1:

Input: nums = [1,2]

Output: 2

Explanation:

The possible XOR triplet values are:

  - `(0, 0, 0) → 1 XOR 1 XOR 1 = 1`
  - `(0, 0, 1) → 1 XOR 1 XOR 2 = 2`
  - `(0, 1, 1) → 1 XOR 2 XOR 2 = 1`
  - `(1, 1, 1) → 2 XOR 2 XOR 2 = 2`

The unique XOR values are `{1, 2}`, so the output is 2.

Example 2:

Input: nums = [3,1,2]

Output: 4

Explanation:

The possible XOR triplet values include:

  - `(0, 0, 0) → 3 XOR 3 XOR 3 = 3`
  - `(0, 0, 1) → 3 XOR 3 XOR 1 = 1`
  - `(0, 0, 2) → 3 XOR 3 XOR 2 = 2`
  - `(0, 1, 2) → 3 XOR 1 XOR 2 = 0`

The unique XOR values are `{0, 1, 2, 3}`, so the output is 4.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `1 <= nums[i] <= n`
  - `nums` is a permutation of integers from `1` to `n`.
*/
problem({
  number: 3824,
  title: "Number of Unique XOR Triplets I",
  difficulty: "Medium",
  pattern: "Bit Manipulation",
  url: "https://leetcode.com/problems/number-of-unique-xor-triplets-i",
  tests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 1, 2]], expected: 4 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function uniqueXorTriplets(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3950 · Maximum K to Sort a Permutation · Medium · Bit Manipulation
 https://leetcode.com/problems/maximum-k-to-sort-a-permutation
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the numbers in the range `[0..n - 1]`.

You may swap elements at indices `i` and `j` only if `nums[i] AND nums[j] == k`, where `AND` denotes the bitwise AND operation and `k` is a non-negative integer.

Return the maximum value of `k` such that the array can be sorted in non-decreasing order using any number of such swaps. If `nums` is already sorted, return 0.

Example 1:

Input: nums = [0,3,2,1]

Output: 1

Explanation:

Choose `k = 1`. Swapping `nums[1] = 3` and `nums[3] = 1` is allowed since `nums[1] AND nums[3] == 1`, resulting in a sorted permutation: `[0, 1, 2, 3]`.

Example 2:

Input: nums = [0,1,3,2]

Output: 2

Explanation:

Choose `k = 2`. Swapping `nums[2] = 3` and `nums[3] = 2` is allowed since `nums[2] AND nums[3] == 2`, resulting in a sorted permutation: `[0, 1, 2, 3]`.

Example 3:

Input: nums = [3,2,1,0]

Output: 0

Explanation:

Only `k = 0` allows sorting since no greater `k` allows the required swaps where `nums[i] AND nums[j] == k`.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `0 <= nums[i] <= n - 1`
  - `nums` is a permutation of integers from `0` to `n - 1`.
*/
problem({
  number: 3950,
  title: "Maximum K to Sort a Permutation",
  difficulty: "Medium",
  pattern: "Bit Manipulation",
  url: "https://leetcode.com/problems/maximum-k-to-sort-a-permutation",
  tests: [
    { args: [[0, 3, 2, 1]], expected: 1 },
    { args: [[0, 1, 3, 2]], expected: 2 },
    { args: [[3, 2, 1, 0]], expected: 0 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function sortPermutation(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4033 · Longest Subsequence With Non-Zero Bitwise XOR · Medium · Bit Manipulation
 https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums`.

Return the length of the longest subsequence in `nums` whose bitwise XOR is non-zero. If no such subsequence exists, return 0.

Example 1:

Input: nums = [1,2,3]

Output: 2

Explanation:

One longest subsequence is `[2, 3]`. The bitwise XOR is computed as `2 XOR 3 = 1`, which is non-zero.

Example 2:

Input: nums = [2,3,4]

Output: 3

Explanation:

The longest subsequence is `[2, 3, 4]`. The bitwise XOR is computed as `2 XOR 3 XOR 4 = 5`, which is non-zero.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `0 <= nums[i] <= 10^9`
*/
problem({
  number: 4033,
  title: "Longest Subsequence With Non-Zero Bitwise XOR",
  difficulty: "Medium",
  pattern: "Bit Manipulation",
  url: "https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor",
  tests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[2, 3, 4]], expected: 3 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function longestSubsequence(nums) {
    // Write your solution here
  },
});

// ── Medium · String Manipulation (2) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #686 · Repeated String Match · Medium · String Manipulation
 https://leetcode.com/problems/repeated-string-match
 ──────────────────────────────────────────────────────────────────────

Given two strings `a` and `b`, return the minimum number of times you should repeat string `a` so that string `b` is a substring of it. If it is impossible for `b` to be a substring of `a` after repeating it, return `-1`.

Notice: string `"abc"` repeated 0 times is `""`, repeated 1 time is `"abc"` and repeated 2 times is `"abcabc"`.

Example 1:

Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.

Example 2:

Input: a = "a", b = "aa"
Output: 2

Constraints:

  - `1 <= a.length, b.length <= 10^4`
  - `a` and `b` consist of lowercase English letters.
*/
problem({
  number: 686,
  title: "Repeated String Match",
  difficulty: "Medium",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/repeated-string-match",
  tests: [
    { args: ["abcd", "cdabcdab"], expected: 3 },
    { args: ["a", "aa"], expected: 2 },
  ],
  /**
   * @param {string} a
   * @param {string} b
   * @return {number}
   */
  solve: function repeatedStringMatch(a, b) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3805 · Maximize Active Section with Trade I · Medium · String Manipulation
 https://leetcode.com/problems/maximize-active-section-with-trade-i
 ──────────────────────────────────────────────────────────────────────

You are given a binary string `s` of length `n`, where:

  - `'1'` represents an active section.
  - `'0'` represents an inactive section.

You can perform at most one trade to maximize the number of active sections in `s`. In a trade, you:

  - Convert a contiguous block of `'1'`s that is surrounded by `'0'`s to all `'0'`s.
  - Afterward, convert a contiguous block of `'0'`s that is surrounded by `'1'`s to all `'1'`s.

Return the maximum number of active sections in `s` after making the optimal trade.

Note: Treat `s` as if it is augmented with a `'1'` at both ends, forming `t = '1' + s + '1'`. The augmented `'1'`s do not contribute to the final count.

Example 1:

Input: s = "01"

Output: 1

Explanation:

Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

Example 2:

Input: s = "0100"

Output: 4

Explanation:

  - String `"0100"` → Augmented to `"101001"`.
  - Choose `"0100"`, convert `"101001"` → `"100001"` → `"111111"`.
  - The final string without augmentation is `"1111"`. The maximum number of active sections is 4.

Example 3:

Input: s = "1000100"

Output: 7

Explanation:

  - String `"1000100"` → Augmented to `"110001001"`.
  - Choose `"000100"`, convert `"110001001"` → `"110000001"` → `"111111111"`.
  - The final string without augmentation is `"1111111"`. The maximum number of active sections is 7.

Example 4:

Input: s = "01010"

Output: 4

Explanation:

  - String `"01010"` → Augmented to `"1010101"`.
  - Choose `"010"`, convert `"1010101"` → `"1000101"` → `"1111101"`.
  - The final string without augmentation is `"11110"`. The maximum number of active sections is 4.

Constraints:

  - `1 <= n == s.length <= 10^5`
  - `s[i]` is either `'0'` or `'1'`
*/
problem({
  number: 3805,
  title: "Maximize Active Section with Trade I",
  difficulty: "Medium",
  pattern: "String Manipulation",
  url: "https://leetcode.com/problems/maximize-active-section-with-trade-i",
  tests: [
    { args: ["01"], expected: 1 },
    { args: ["0100"], expected: 4 },
    { args: ["1000100"], expected: 7 },
    { args: ["01010"], expected: 4 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function maxActiveSectionsAfterTrade(s) {
    // Write your solution here
  },
});

// ── Medium · Matrix & Geometry (2) ───────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #864 · Image Overlap · Medium · Matrix & Geometry
 https://leetcode.com/problems/image-overlap
 ──────────────────────────────────────────────────────────────────────

You are given two images, `img1` and `img2`, represented as binary, square matrices of size `n x n`. A binary matrix has only `0`s and `1`s as values.

We translate one image however we choose by sliding all the `1` bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a `1` in both images.

Note also that a translation does not include any kind of rotation. Any `1` bits that are translated outside of the matrix borders are erased.

Return the largest possible overlap.

Example 1:

Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3
Explanation: We translate img1 to right by 1 unit and down by 1 unit.

The number of positions that have a 1 in both images is 3 (shown in red).

Example 2:

Input: img1 = [[1]], img2 = [[1]]
Output: 1

Example 3:

Input: img1 = [[0]], img2 = [[0]]
Output: 0

Constraints:

  - `n == img1.length == img1[i].length`
  - `n == img2.length == img2[i].length`
  - `1 <= n <= 30`
  - `img1[i][j]` is either `0` or `1`.
  - `img2[i][j]` is either `0` or `1`.
*/
problem({
  number: 864,
  title: "Image Overlap",
  difficulty: "Medium",
  pattern: "Matrix & Geometry",
  url: "https://leetcode.com/problems/image-overlap",
  tests: [
    {
      args: [
        [
          [1, 1, 0],
          [0, 1, 0],
          [0, 1, 0],
        ],
        [
          [0, 0, 0],
          [0, 1, 1],
          [0, 0, 1],
        ],
      ],
      expected: 3,
    },
    { args: [[[1]], [[1]]], expected: 1 },
    { args: [[[0]], [[0]]], expected: 0 },
  ],
  /**
   * @param {number[][]} img1
   * @param {number[][]} img2
   * @return {number}
   */
  solve: function largestOverlap(img1, img2) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1501 · Circle and Rectangle Overlapping · Medium · Matrix & Geometry
 https://leetcode.com/problems/circle-and-rectangle-overlapping
 ──────────────────────────────────────────────────────────────────────

You are given a circle represented as `(radius, xCenter, yCenter)` and an axis-aligned rectangle represented as `(x1, y1, x2, y2)`, where `(x1, y1)` are the coordinates of the bottom-left corner, and `(x2, y2)` are the coordinates of the top-right corner of the rectangle.

Return `true` if the circle and rectangle are overlapped otherwise return `false`. In other words, check if there is any point `(xi, yi)` that belongs to the circle and the rectangle at the same time.

Example 1:

Input: radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
Output: true
Explanation: Circle and rectangle share the point (1,0).

Example 2:

Input: radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
Output: false

Example 3:

Input: radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
Output: true

Constraints:

  - `1 <= radius <= 2000`
  - `-10^4 <= xCenter, yCenter <= 10^4`
  - `-10^4 <= x1 < x2 <= 10^4`
  - `-10^4 <= y1 < y2 <= 10^4`
*/
problem({
  number: 1501,
  title: "Circle and Rectangle Overlapping",
  difficulty: "Medium",
  pattern: "Matrix & Geometry",
  url: "https://leetcode.com/problems/circle-and-rectangle-overlapping",
  tests: [
    { args: [1, 0, 0, 1, -1, 3, 1], expected: true },
    { args: [1, 1, 1, 1, -3, 2, -1], expected: false },
    { args: [1, 0, 0, -1, 0, 0, 1], expected: true },
  ],
  /**
   * @param {number} radius
   * @param {number} xCenter
   * @param {number} yCenter
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {boolean}
   */
  solve: function checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2) {
    // Write your solution here
  },
});

// ── Medium · Design & Heap (1) ───────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #146 · LRU Cache · Medium · Design & Heap
 https://leetcode.com/problems/lru-cache
 ──────────────────────────────────────────────────────────────────────

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the `LRUCache` class:

  - `LRUCache(int capacity)` Initialize the LRU cache with positive size `capacity`.
  - `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
  - `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

Constraints:

  - `1 <= capacity <= 3000`
  - `0 <= key <= 10^4`
  - `0 <= value <= 10^5`
  - At most `2 * 10^5` calls will be made to `get` and `put`.
*/
problem({
  number: 146,
  title: "LRU Cache",
  difficulty: "Medium",
  pattern: "Design & Heap",
  url: "https://leetcode.com/problems/lru-cache",
  design: true,
  tests: [
    {
      args: [
        [
          "LRUCache",
          "put",
          "put",
          "get",
          "put",
          "get",
          "put",
          "get",
          "get",
          "get",
        ],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
      ],
      expected: [null, null, null, 1, null, -1, null, -1, 3, 4],
    },
  ],
  solve: class LRUCache {
    /** @param {number} capacity */
    constructor(capacity) {
      // Write your solution here
    }

    /** @return {number} */
    get(key) {
      // Write your solution here
    }

    /** @return {void} */
    put(key, value) {
      // Write your solution here
    }
  },
});

// ── Medium · SQL (2) ─────────────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #176 · Second Highest Salary · Medium · SQL
 https://leetcode.com/problems/second-highest-salary
 ──────────────────────────────────────────────────────────────────────

Table: `Employee`

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.

Write a solution to find the second highest distinct salary from the `Employee` table. If there is no second highest salary, return `null (return None in Pandas)`.

The result format is in the following example.

Example 1:

Input:
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
Output:
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+

Example 2:

Input:
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
Output:
+---------------------+
| SecondHighestSalary |
+---------------------+
| null                |
+---------------------+
*/
sqlProblem({
  number: 176,
  title: "Second Highest Salary",
  difficulty: "Medium",
  pattern: "SQL",
  url: "https://leetcode.com/problems/second-highest-salary",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 176
  query: `-- Write your SQL here
`,
});

/* ──────────────────────────────────────────────────────────────────────
 #177 · Nth Highest Salary · Medium · SQL
 https://leetcode.com/problems/nth-highest-salary
 ──────────────────────────────────────────────────────────────────────

Table: `Employee`

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.

Write a solution to find the `n^th` highest distinct salary from the `Employee` table. If there are less than `n` distinct salaries, return `null`.

The result format is in the following example.

Example 1:

Input:
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
n = 2
Output:
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+

Example 2:

Input:
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
Output:
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
*/
sqlProblem({
  number: 177,
  title: "Nth Highest Salary",
  difficulty: "Medium",
  pattern: "SQL",
  url: "https://leetcode.com/problems/nth-highest-salary",
  // Write your SQL here (run it in a SQL editor / on LeetCode), then: node practice.js done 177
  query: `-- Write your SQL here
`,
});

// ═══════════════════════════════════════════════════════════════════════════
//  HARD  (33)
// ═══════════════════════════════════════════════════════════════════════════

// ── Hard · Two Pointers (1) ────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #42 · Trapping Rain Water · Hard · Two Pointers
 https://leetcode.com/problems/trapping-rain-water
 ──────────────────────────────────────────────────────────────────────

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

  - `n == height.length`
  - `1 <= n <= 2 * 10^4`
  - `0 <= height[i] <= 10^5`
*/
problem({
  number: 42,
  title: "Trapping Rain Water",
  difficulty: "Hard",
  pattern: "Two Pointers",
  url: "https://leetcode.com/problems/trapping-rain-water",
  tests: [
    { args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
    { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
  ],
  /**
   * @param {number[]} height
   * @return {number}
   */
  solve: function trap(height) {
    // Write your solution here
  },
});

// ── Hard · Sliding Window (1) ──────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #220 · Contains Duplicate III · Hard · Sliding Window
 https://leetcode.com/problems/contains-duplicate-iii
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`.

Find a pair of indices `(i, j)` such that:

  - `i != j`,
  - `abs(i - j) <= indexDiff`.
  - `abs(nums[i] - nums[j]) <= valueDiff`, and

Return `true` if such pair exists or `false` otherwise.

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

Example 2:

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

Constraints:

  - `2 <= nums.length <= 10^5`
  - `-10^9 <= nums[i] <= 10^9`
  - `1 <= indexDiff <= nums.length`
  - `0 <= valueDiff <= 10^9`
*/
problem({
  number: 220,
  title: "Contains Duplicate III",
  difficulty: "Hard",
  pattern: "Sliding Window",
  url: "https://leetcode.com/problems/contains-duplicate-iii",
  tests: [
    { args: [[1, 2, 3, 1], 3, 0], expected: true },
    { args: [[1, 5, 9, 1, 5, 9], 2, 3], expected: false },
  ],
  /**
   * @param {number[]} nums
   * @param {number} indexDiff
   * @param {number} valueDiff
   * @return {boolean}
   */
  solve: function containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) {
    // Write your solution here
  },
});

// ── Hard · Binary Search (1) ───────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3375 · Kth Smallest Amount With Single Denomination Combination · Hard · Binary Search
 https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `coins` representing coins of different denominations and an integer `k`.

You have an infinite number of coins of each denomination. However, you are not allowed to combine coins of different denominations.

Return the `k^th` smallest amount that can be made using these coins.

Example 1:

Input: coins = [3,6,9], k = 3

Output:  9

Explanation: The given coins can make the following amounts:

Coin 3 produces multiples of 3: 3, 6, 9, 12, 15, etc.

Coin 6 produces multiples of 6: 6, 12, 18, 24, etc.

Coin 9 produces multiples of 9: 9, 18, 27, 36, etc.

All of the coins combined produce: 3, 6, 9, 12, 15, etc.

Example 2:

Input: coins = [5,2], k = 7

Output: 12

Explanation: The given coins can make the following amounts:

Coin 5 produces multiples of 5: 5, 10, 15, 20, etc.

Coin 2 produces multiples of 2: 2, 4, 6, 8, 10, 12, etc.

All of the coins combined produce: 2, 4, 5, 6, 8, 10, 12, 14, 15, etc.

Constraints:

  - `1 <= coins.length <= 15`
  - `1 <= coins[i] <= 25`
  - `1 <= k <= 2 * 10^9`
  - `coins` contains pairwise distinct integers.
*/
problem({
  number: 3375,
  title: "Kth Smallest Amount With Single Denomination Combination",
  difficulty: "Hard",
  pattern: "Binary Search",
  url: "https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination",
  tests: [
    { args: [[3, 6, 9], 3], expected: 9 },
    { args: [[5, 2], 7], expected: 12 },
  ],
  /**
   * @param {number[]} coins
   * @param {number} k
   * @return {number}
   */
  solve: function findKthSmallest(coins, k) {
    // Write your solution here
  },
});

// ── Hard · Sorting & Greedy (2) ────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3813 · Smallest Palindromic Rearrangement II · Hard · Sorting & Greedy
 https://leetcode.com/problems/smallest-palindromic-rearrangement-ii
 ──────────────────────────────────────────────────────────────────────

You are given a palindromic string `s` and an integer `k`.

Return the k-th lexicographically smallest palindromic permutation of `s`. If there are fewer than `k` distinct palindromic permutations, return an empty string.

Note: Different rearrangements that yield the same palindromic string are considered identical and are counted once.

Example 1:

Input: s = "abba", k = 2

Output: "baab"

Explanation:

  - The two distinct palindromic rearrangements of `"abba"` are `"abba"` and `"baab"`.
  - Lexicographically, `"abba"` comes before `"baab"`. Since `k = 2`, the output is `"baab"`.

Example 2:

Input: s = "aa", k = 2

Output: ""

Explanation:

  - There is only one palindromic rearrangement: "aa".
  - The output is an empty string since `k = 2` exceeds the number of possible rearrangements.

Example 3:

Input: s = "bacab", k = 1

Output: "abcba"

Explanation:

  - The two distinct palindromic rearrangements of `"bacab"` are `"abcba"` and `"bacab"`.
  - Lexicographically, `"abcba"` comes before `"bacab"`. Since `k = 1`, the output is `"abcba"`.

Constraints:

  - `1 <= s.length <= 10^4`
  - `s` consists of lowercase English letters.
  - `s` is guaranteed to be palindromic.
  - `1 <= k <= 10^6`
*/
problem({
  number: 3813,
  title: "Smallest Palindromic Rearrangement II",
  difficulty: "Hard",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/smallest-palindromic-rearrangement-ii",
  tests: [
    { args: ["abba", 2], expected: "baab" },
    { args: ["aa", 2], expected: "" },
    { args: ["bacab", 1], expected: "abcba" },
  ],
  /**
   * @param {string} s
   * @param {number} k
   * @return {string}
   */
  solve: function smallestPalindrome(s, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4037 · Lexicographically Smallest Palindromic Permutation Greater Than Target · Hard · Sorting & Greedy
 https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target
 ──────────────────────────────────────────────────────────────────────

You are given two strings `s` and `target`, each of length `n`, consisting of lowercase English letters.

Return the lexicographically smallest string that is both a palindromic permutation of `s` and strictly greater than `target`. If no such permutation exists, return an empty string.

Example 1:

Input: s = "baba", target = "abba"

Output: "baab"

Explanation:

  - The palindromic permutations of `s` (in lexicographical order) are `"abba"` and `"baab"`.
  - The lexicographically smallest permutation that is strictly greater than `target` is `"baab"`.

Example 2:

Input: s = "baba", target = "bbaa"

Output: ""

Explanation:

  - The palindromic permutations of `s` (in lexicographical order) are `"abba"` and `"baab"`.
  - None of them is lexicographically strictly greater than `target`. Therefore, the answer is `""`.

Example 3:

Input: s = "abc", target = "abb"

Output: ""

Explanation:

`s` has no palindromic permutations. Therefore, the answer is `""`.

Example 4:

Input: s = "aac", target = "abb"

Output: "aca"

Explanation:

  - The only palindromic permutation of `s` is `"aca"`.
  - `"aca"` is strictly greater than `target`. Therefore, the answer is `"aca"`.

Constraints:

  - `1 <= n == s.length == target.length <= 300`
  - `s` and `target` consist of only lowercase English letters.
*/
problem({
  number: 4037,
  title:
    "Lexicographically Smallest Palindromic Permutation Greater Than Target",
  difficulty: "Hard",
  pattern: "Sorting & Greedy",
  url: "https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target",
  tests: [
    { args: ["baba", "abba"], expected: "baab" },
    { args: ["baba", "bbaa"], expected: "" },
    { args: ["abc", "abb"], expected: "" },
    { args: ["aac", "abb"], expected: "aca" },
  ],
  /**
   * @param {string} s
   * @param {string} target
   * @return {string}
   */
  solve: function lexPalindromicPermutation(s, target) {
    // Write your solution here
  },
});

// ── Hard · Intervals (3) ───────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1644 · Maximum Number of Non-Overlapping Substrings · Hard · Intervals
 https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings
 ──────────────────────────────────────────────────────────────────────

Given a string `s` of lowercase letters, you need to find the maximum number of non-empty substrings of `s` that meet the following conditions:

  - The substrings do not overlap, that is for any two substrings `s[i..j]` and `s[x..y]`, either `j < x` or `i > y` is true.
  - A substring that contains a certain character `c` must also contain all occurrences of `c`.

Find the maximum number of substrings that meet the above conditions. If there are multiple solutions with the same number of substrings, return the one with minimum total length. It can be shown that there exists a unique solution of minimum total length.

Notice that you can return the substrings in any order.

Example 1:

Input: s = "adefaddaccc"
Output: ["e","f","ccc"]
Explanation: The following are all the possible substrings that meet the conditions:
[
  "adefaddaccc"
  "adefadda",
  "ef",
  "e",
  "f",
  "ccc",
]
If we choose the first string, we cannot choose anything else and we'd get only 1. If we choose "adefadda", we are left with "ccc" which is the only one that doesn't overlap, thus obtaining 2 substrings. Notice also, that it's not optimal to choose "ef" since it can be split into two. Therefore, the optimal way is to choose ["e","f","ccc"] which gives us 3 substrings. No other solution of the same number of substrings exist.

Example 2:

Input: s = "abbaccd"
Output: ["d","bb","cc"]
Explanation: Notice that while the set of substrings ["d","abba","cc"] also has length 3, it's considered incorrect since it has larger total length.

Constraints:

  - `1 <= s.length <= 10^5`
  - `s` contains only lowercase English letters.
*/
problem({
  number: 1644,
  title: "Maximum Number of Non-Overlapping Substrings",
  difficulty: "Hard",
  pattern: "Intervals",
  url: "https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings",
  compare: "unordered", // answer order doesn't matter
  tests: [
    { args: ["adefaddaccc"], expected: ["e", "f", "ccc"] },
    { args: ["abbaccd"], expected: ["d", "bb", "cc"] },
  ],
  /**
   * @param {string} s
   * @return {string[]}
   */
  solve: function maxNumOfSubstrings(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2559 · Maximum Number of Non-overlapping Palindrome Substrings · Hard · Intervals
 https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings
 ──────────────────────────────────────────────────────────────────────

You are given a string `s` and a positive integer `k`.

Select a set of non-overlapping substrings from the string `s` that satisfy the following conditions:

  - The length of each substring is at least `k`.
  - Each substring is a palindrome.

Return the maximum number of substrings in an optimal selection.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "abaccdbbd", k = 3
Output: 2
Explanation: We can select the substrings underlined in s = "abaccdbbd". Both "aba" and "dbbd" are palindromes and have a length of at least k = 3.
It can be shown that we cannot find a selection with more than two valid substrings.

Example 2:

Input: s = "adbcda", k = 2
Output: 0
Explanation: There is no palindrome substring of length at least 2 in the string.

Constraints:

  - `1 <= k <= s.length <= 2000`
  - `s` consists of lowercase English letters.
*/
problem({
  number: 2559,
  title: "Maximum Number of Non-overlapping Palindrome Substrings",
  difficulty: "Hard",
  pattern: "Intervals",
  url: "https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings",
  tests: [
    { args: ["abaccdbbd", 3], expected: 2 },
    { args: ["adbcda", 2], expected: 0 },
  ],
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  solve: function maxPalindromes(s, k) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3562 · Maximum Score of Non-overlapping Intervals · Hard · Intervals
 https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals
 ──────────────────────────────────────────────────────────────────────

You are given a 2D integer array `intervals`, where `intervals[i] = [li, ri, weighti]`. Interval `i` starts at position `li` and ends at `ri`, and has a weight of `weighti`. You can choose up to 4 non-overlapping intervals. The score of the chosen intervals is defined as the total sum of their weights.

Return the lexicographically smallest array of at most 4 indices from `intervals` with maximum score, representing your choice of non-overlapping intervals.

Two intervals are said to be non-overlapping if they do not share any points. In particular, intervals sharing a left or right boundary are considered overlapping.

Example 1:

Input: intervals = [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]

Output: [2,3]

Explanation:

You can choose the intervals with indices 2, and 3 with respective weights of 5, and 3.

Example 2:

Input: intervals = [[5,8,1],[6,7,7],[4,7,3],[9,10,6],[7,8,2],[11,14,3],[3,5,5]]

Output: [1,3,5,6]

Explanation:

You can choose the intervals with indices 1, 3, 5, and 6 with respective weights of 7, 6, 3, and 5.

Constraints:

  - `1 <= intevals.length <= 5 * 10^4`
  - `intervals[i].length == 3`
  - `intervals[i] = [li, ri, weighti]`
  - `1 <= li <= ri <= 10^9`
  - `1 <= weighti <= 10^9`
*/
problem({
  number: 3562,
  title: "Maximum Score of Non-overlapping Intervals",
  difficulty: "Hard",
  pattern: "Intervals",
  url: "https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals",
  tests: [
    {
      args: [
        [
          [1, 3, 2],
          [4, 5, 2],
          [1, 5, 5],
          [6, 9, 3],
          [6, 7, 1],
          [8, 9, 1],
        ],
      ],
      expected: [2, 3],
    },
    {
      args: [
        [
          [5, 8, 1],
          [6, 7, 7],
          [4, 7, 3],
          [9, 10, 6],
          [7, 8, 2],
          [11, 14, 3],
          [3, 5, 5],
        ],
      ],
      expected: [1, 3, 5, 6],
    },
  ],
  /**
   * @param {number[][]} intervals
   * @return {number[]}
   */
  solve: function maximumWeight(intervals) {
    // Write your solution here
  },
});

// ── Hard · Stack & Parentheses (3) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #32 · Longest Valid Parentheses · Hard · Stack & Parentheses
 https://leetcode.com/problems/longest-valid-parentheses
 ──────────────────────────────────────────────────────────────────────

Given a string containing just the characters `'('` and `')'`, return the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:

Input: s = ""
Output: 0

Constraints:

  - `0 <= s.length <= 3 * 10^4`
  - `s[i]` is `'('`, or `')'`.
*/
problem({
  number: 32,
  title: "Longest Valid Parentheses",
  difficulty: "Hard",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/longest-valid-parentheses",
  tests: [
    { args: ["(()"], expected: 2 },
    { args: [")()())"], expected: 4 },
    { args: [""], expected: 0 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function longestValidParentheses(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #301 · Remove Invalid Parentheses · Hard · Stack & Parentheses
 https://leetcode.com/problems/remove-invalid-parentheses
 ──────────────────────────────────────────────────────────────────────

Given a string `s` that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.

Example 1:

Input: s = "()())()"
Output: ["(())()","()()()"]

Example 2:

Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]

Example 3:

Input: s = ")("
Output: [""]

Constraints:

  - `1 <= s.length <= 25`
  - `s` consists of lowercase English letters and parentheses `'('` and `')'`.
  - There will be at most `20` parentheses in `s`.
*/
problem({
  number: 301,
  title: "Remove Invalid Parentheses",
  difficulty: "Hard",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/remove-invalid-parentheses",
  compare: "unordered", // answer order doesn't matter
  tests: [
    { args: ["()())()"], expected: ["(())()", "()()()"] },
    { args: ["(a)())()"], expected: ["(a())()", "(a)()()"] },
    { args: [")("], expected: [""] },
  ],
  /**
   * @param {string} s
   * @return {string[]}
   */
  solve: function removeInvalidParentheses(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1188 · Brace Expansion II · Hard · Stack & Parentheses
 https://leetcode.com/problems/brace-expansion-ii
 ──────────────────────────────────────────────────────────────────────

Under the grammar given below, strings can represent a set of lowercase words. Let `R(expr)` denote the set of words the expression represents.

The grammar can best be understood through simple examples:

  - Single letters represent a singleton set containing that word.

    `R("a") = {"a"}`

    - `R("w") = {"w"}`
  - When we take a comma-delimited list of two or more expressions, we take the union of possibilities.

    `R("{a,b,c}") = {"a","b","c"}`

    - `R("{{a,b},{b,c}}") = {"a","b","c"}` (notice the final set only contains each word at most once)
  - When we concatenate two expressions, we take the set of possible concatenations between two words where the first word comes from the first expression and the second word comes from the second expression.

    `R("{a,b}{c,d}") = {"ac","ad","bc","bd"}`

    - `R("a{b,c}{d,e}f{g,h}") = {"abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"}`

Formally, the three rules for our grammar:

  - For every lowercase letter `x`, we have `R(x) = {x}`.
  - For expressions `e1, e2, ... , ek` with `k >= 2`, we have `R({e1, e2, ...}) = R(e1) ∪ R(e2) ∪ ...`
  - For expressions `e1` and `e2`, we have `R(e1 + e2) = {a + b for (a, b) in R(e1) × R(e2)}`, where `+` denotes concatenation, and `×` denotes the cartesian product.

Given an expression representing a set of words under the given grammar, return the sorted list of words that the expression represents.

Example 1:

Input: expression = "{a,b}{c,{d,e}}"
Output: ["ac","ad","ae","bc","bd","be"]

Example 2:

Input: expression = "{{a,z},a{b,c},{ab,z}}"
Output: ["a","ab","ac","z"]
Explanation: Each distinct word is written only once in the final answer.

Constraints:

  - `1 <= expression.length <= 60`
  - `expression[i]` consists of `'{'`, `'}'`, `','`or lowercase English letters.
  - The given `expression` represents a set of words based on the grammar given in the description.
*/
problem({
  number: 1188,
  title: "Brace Expansion II",
  difficulty: "Hard",
  pattern: "Stack & Parentheses",
  url: "https://leetcode.com/problems/brace-expansion-ii",
  tests: [
    {
      args: ["{a,b}{c,{d,e}}"],
      expected: ["ac", "ad", "ae", "bc", "bd", "be"],
    },
    { args: ["{{a,z},a{b,c},{ab,z}}"], expected: ["a", "ab", "ac", "z"] },
  ],
  /**
   * @param {string} expression
   * @return {string[]}
   */
  solve: function braceExpansionII(expression) {
    // Write your solution here
  },
});

// ── Hard · Binary Tree (1) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #4209 · Palindromic Path Queries in a Tree · Hard · Binary Tree
 https://leetcode.com/problems/palindromic-path-queries-in-a-tree
 ──────────────────────────────────────────────────────────────────────

You are given an undirected tree with `n` nodes labeled 0 to `n - 1`. This is represented by a 2D array `edges` of length `n - 1`, where `edges[i] = [ui, vi]` indicates an undirected edge between nodes `ui` and `vi`.

You are also given a string `s` of length `n` consisting of lowercase English letters, where `s[i]` represents the character assigned to node `i`.

You are also given a string array `queries`, where each `queries[i]` is either:

  - `"update ui c"`: Change the character at node `ui` to `c`. Formally, update `s[ui] = c`.
  - `"query ui vi"`: Determine whether the string formed by the characters on the unique path from `ui` to `vi` (inclusive) can be rearranged into a palindrome.

Return a boolean array `answer`, where `answer[j]` is `true` if the `j^th` query of type `"query ui vi"` can be rearranged into a palindrome, and `false` otherwise.

Example 1:

Input: n = 3, edges = [[0,1],[1,2]], s = "aac", queries = ["query 0 2","update 1 b","query 0 2"]

Output: [true,false]

Explanation:

  - `"query 0 2"`: Path `0 → 1 → 2` gives `"aac"`, which can be rearranged to form `"aca"`, a palindrome. Thus, `answer[0] = true`.
  - `"update 1 b"`: Update node 1 to `'b'`, now `s = "abc"`.
  - `"query 0 2"`: Path characters are `"abc"`, which cannot be rearranged to form a palindrome. Thus, `answer[1] = false`.

Thus, `answer = [true, false]`.

Example 2:

Input: n = 4, edges = [[0,1],[0,2],[0,3]], s = "abca", queries = ["query 1 2","update 0 b","query 2 3","update 3 a","query 1 3"]

Output: [false,false,true]

Explanation:

  - `"query 1 2"`: Path `1 → 0 → 2` gives `"bac"`, which cannot be rearranged to form a palindrome. Thus, `answer[0] = false`.
  - `"update 0 b"`: Update node 0 to `'b'`, now `s = "bbca"`.
  - `"query 2 3"`: Path `2 → 0 → 3` gives `"cba"`, which cannot be rearranged to form a palindrome. Thus, `answer[1] = false`.
  - `"update 3 a"`: Update node 3 to `'a'`, `s = "bbca"`.
  - `"query 1 3"`: Path `1 → 0 → 3` gives `"bba"`, which can be rearranged to form `"bab"`, a palindrome. Thus, `answer[2] = true`.

Thus, `answer = [false, false, true]`.

Constraints:

  - `1 <= n == s.length <= 5 * 10^4`
  - `edges.length == n - 1`
  - `edges[i] = [ui, vi]`
  - `0 <= ui, vi <= n - 1`
  - `s` consists of lowercase English letters.
  - The input is generated such that `edges` represents a valid tree.
  - `1 <= queries.length <= 5 * 10^4`

    `queries[i] = "update ui c"` or

    - `queries[i] = "query ui vi"`
    - `0 <= ui, vi <= n - 1`
    - `c` is a lowercase English letter.
*/
problem({
  number: 4209,
  title: "Palindromic Path Queries in a Tree",
  difficulty: "Hard",
  pattern: "Binary Tree",
  url: "https://leetcode.com/problems/palindromic-path-queries-in-a-tree",
  tests: [
    {
      args: [
        3,
        [
          [0, 1],
          [1, 2],
        ],
        "aac",
        ["query 0 2", "update 1 b", "query 0 2"],
      ],
      expected: [true, false],
    },
    {
      args: [
        4,
        [
          [0, 1],
          [0, 2],
          [0, 3],
        ],
        "abca",
        ["query 1 2", "update 0 b", "query 2 3", "update 3 a", "query 1 3"],
      ],
      expected: [false, false, true],
    },
  ],
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @param {string} s
   * @param {string[]} queries
   * @return {boolean[]}
   */
  solve: function palindromePath(n, edges, s, queries) {
    // Write your solution here
  },
});

// ── Hard · Graph (BFS / DFS / Union-Find) (2) ──────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3852 · Path Existence Queries in a Graph II · Hard · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/path-existence-queries-in-a-graph-ii
 ──────────────────────────────────────────────────────────────────────

You are given an integer `n` representing the number of nodes in a graph, labeled from 0 to `n - 1`.

You are also given an integer array `nums` of length `n` and an integer `maxDiff`.

An undirected edge exists between nodes `i` and `j` if the absolute difference between `nums[i]` and `nums[j]` is at most `maxDiff` (i.e., `|nums[i] - nums[j]| <= maxDiff`).

You are also given a 2D integer array `queries`. For each `queries[i] = [ui, vi]`, find the minimum distance between nodes `ui` and `vi`. If no path exists between the two nodes, return -1 for that query.

Return an array `answer`, where `answer[i]` is the result of the `i^th` query.

Note: The edges between the nodes are unweighted.

Example 1:

Input: n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]

Output: [1,1]

Explanation:

The resulting graph is:

      Query
      Shortest Path
      Minimum Distance

      [0, 3]
      0 → 3
      1

      [2, 4]
      2 → 4
      1

Thus, the output is `[1, 1]`.

Example 2:

Input: n = 5, nums = [5,3,1,9,10], maxDiff = 2, queries = [[0,1],[0,2],[2,3],[4,3]]

Output: [1,2,-1,1]

Explanation:

The resulting graph is:

      Query
      Shortest Path
      Minimum Distance

      [0, 1]
      0 → 1
      1

      [0, 2]
      0 → 1 → 2
      2

      [2, 3]
      None
      -1

      [4, 3]
      3 → 4
      1

Thus, the output is `[1, 2, -1, 1]`.

Example 3:

Input: n = 3, nums = [3,6,1], maxDiff = 1, queries = [[0,0],[0,1],[1,2]]

Output: [0,-1,-1]

Explanation:

There are no edges between any two nodes because:

  - Nodes 0 and 1: `|nums[0] - nums[1]| = |3 - 6| = 3 > 1`
  - Nodes 0 and 2: `|nums[0] - nums[2]| = |3 - 1| = 2 > 1`
  - Nodes 1 and 2: `|nums[1] - nums[2]| = |6 - 1| = 5 > 1`

Thus, no node can reach any other node, and the output is `[0, -1, -1]`.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `0 <= nums[i] <= 10^5`
  - `0 <= maxDiff <= 10^5`
  - `1 <= queries.length <= 10^5`
  - `queries[i] == [ui, vi]`
  - `0 <= ui, vi < n`
*/
problem({
  number: 3852,
  title: "Path Existence Queries in a Graph II",
  difficulty: "Hard",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/path-existence-queries-in-a-graph-ii",
  tests: [
    {
      args: [
        5,
        [1, 8, 3, 4, 2],
        3,
        [
          [0, 3],
          [2, 4],
        ],
      ],
      expected: [1, 1],
    },
    {
      args: [
        5,
        [5, 3, 1, 9, 10],
        2,
        [
          [0, 1],
          [0, 2],
          [2, 3],
          [4, 3],
        ],
      ],
      expected: [1, 2, -1, 1],
    },
    {
      args: [
        3,
        [3, 6, 1],
        1,
        [
          [0, 0],
          [0, 1],
          [1, 2],
        ],
      ],
      expected: [0, -1, -1],
    },
  ],
  /**
   * @param {number} n
   * @param {number[]} nums
   * @param {number} maxDiff
   * @param {number[][]} queries
   * @return {number[]}
   */
  solve: function pathExistenceQueries(n, nums, maxDiff, queries) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3919 · Network Recovery Pathways · Hard · Graph (BFS / DFS / Union-Find)
 https://leetcode.com/problems/network-recovery-pathways
 ──────────────────────────────────────────────────────────────────────

You are given a directed acyclic graph of `n` nodes numbered from 0 to `n − 1`. This is represented by a 2D array edges of length `m`, where edges[i] = [ui, vi, costi] indicates a one‑way communication from node ui to node vi with a recovery cost of costi.

Some nodes may be offline. You are given a boolean array online where online[i] = true means node i is online. Nodes 0 and `n − 1` are always online.

A path from 0 to `n − 1` is valid if:

  - All intermediate nodes on the path are online.

  The total recovery cost of all edges on the path does not exceed `k`.

For each valid path, define its score as the minimum edge‑cost along that path.

Return the maximum path score (i.e., the largest minimum-edge cost) among all valid paths. If no valid path exists, return -1.

Example 1:

Input: edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10

Output: 3

Explanation:

The graph has two possible routes from node 0 to node 3:

Path `0 → 1 → 3`

Total cost = `5 + 10 = 15`, which exceeds k (`15 > 10`), so this path is invalid.

Path `0 → 2 → 3`

Total cost = `3 + 4 = 7 <= k`, so this path is valid.

The minimum edge‐cost along this path is `min(3, 4) = 3`.

There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.

Example 2:

Input: edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12

Output: 6

Explanation:

Node 3 is offline, so any path passing through 3 is invalid.

Consider the remaining routes from 0 to 4:

Path `0 → 1 → 4`

Total cost = `7 + 5 = 12 <= k`, so this path is valid.

The minimum edge‐cost along this path is `min(7, 5) = 5`.

Path `0 → 2 → 3 → 4`

Node 3 is offline, so this path is invalid regardless of cost.

Path `0 → 2 → 4`

Total cost = `6 + 6 = 12 <= k`, so this path is valid.

The minimum edge‐cost along this path is `min(6, 6) = 6`.

Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.

Constraints:

  n == online.length
  2 <= n <= 5 * 10^4
  0 <= m == edges.length <= `min(10^5, n * (n - 1) / 2)`
  edges[i] = [ui, vi, costi]
  0 <= ui, vi < n
  ui != vi
  0 <= costi <= 10^9
  0 <= k <= 5 * 10^13
  online[i] is either true or false, and both online[0] and online[n − 1] are true.
  The given graph is a directed acyclic graph.
*/
problem({
  number: 3919,
  title: "Network Recovery Pathways",
  difficulty: "Hard",
  pattern: "Graph (BFS / DFS / Union-Find)",
  url: "https://leetcode.com/problems/network-recovery-pathways",
  tests: [
    {
      args: [
        [
          [0, 1, 5],
          [1, 3, 10],
          [0, 2, 3],
          [2, 3, 4],
        ],
        [true, true, true, true],
        10,
      ],
      expected: 3,
    },
    {
      args: [
        [
          [0, 1, 7],
          [1, 4, 5],
          [0, 2, 6],
          [2, 3, 6],
          [3, 4, 2],
          [2, 4, 6],
        ],
        [true, true, true, false, true],
        12,
      ],
      expected: 6,
    },
  ],
  /**
   * @param {number[][]} edges
   * @param {boolean[]} online
   * @param {number} k
   * @return {number}
   */
  solve: function findMaxPathScore(edges, online, k) {
    // Write your solution here
  },
});

// ── Hard · Dynamic Programming (3) ─────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #115 · Distinct Subsequences · Hard · Dynamic Programming
 https://leetcode.com/problems/distinct-subsequences
 ──────────────────────────────────────────────────────────────────────

Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

Example 1:

Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
`rabbbit`
`rabbbit`
`rabbbit`

Example 2:

Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from s.
`babgbag`
`babgbag`
`babgbag`
`babgbag`
`babgbag`

Constraints:

  - `1 <= s.length, t.length <= 1000`
  - `s` and `t` consist of English letters.
*/
problem({
  number: 115,
  title: "Distinct Subsequences",
  difficulty: "Hard",
  pattern: "Dynamic Programming",
  url: "https://leetcode.com/problems/distinct-subsequences",
  tests: [
    { args: ["rabbbit", "rabbit"], expected: 3 },
    { args: ["babgbag", "bag"], expected: 5 },
  ],
  /**
   * @param {string} s
   * @param {string} t
   * @return {number}
   */
  solve: function numDistinct(s, t) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #977 · Distinct Subsequences II · Hard · Dynamic Programming
 https://leetcode.com/problems/distinct-subsequences-ii
 ──────────────────────────────────────────────────────────────────────

Given a string s, return the number of distinct non-empty subsequences of `s`. Since the answer may be very large, return it modulo `10^9 + 7`.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not.

Example 1:

Input: s = "abc"
Output: 7
Explanation: The 7 distinct subsequences are "a", "b", "c", "ab", "ac", "bc", and "abc".

Example 2:

Input: s = "aba"
Output: 6
Explanation: The 6 distinct subsequences are "a", "b", "ab", "aa", "ba", and "aba".

Example 3:

Input: s = "aaa"
Output: 3
Explanation: The 3 distinct subsequences are "a", "aa" and "aaa".

Constraints:

  - `1 <= s.length <= 2000`
  - `s` consists of lowercase English letters.
*/
problem({
  number: 977,
  title: "Distinct Subsequences II",
  difficulty: "Hard",
  pattern: "Dynamic Programming",
  url: "https://leetcode.com/problems/distinct-subsequences-ii",
  tests: [
    { args: ["abc"], expected: 7 },
    { args: ["aba"], expected: 6 },
    { args: ["aaa"], expected: 3 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function distinctSubseqII(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3608 · Find the Number of Subsequences With Equal GCD · Hard · Dynamic Programming
 https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums`.

Your task is to find the number of pairs of non-empty subsequences `(seq1, seq2)` of `nums` that satisfy the following conditions:

  - The subsequences `seq1` and `seq2` are disjoint, meaning no index of `nums` is common between them.
  - The GCD of the elements of `seq1` is equal to the GCD of the elements of `seq2`.

Return the total number of such pairs.

Since the answer may be very large, return it modulo `10^9 + 7`.

Example 1:

Input: nums = [1,2,3,4]

Output: 10

Explanation:

The subsequence pairs which have the GCD of their elements equal to 1 are:

  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`
  - `([1, 2, 3, 4], [1, 2, 3, 4])`

Example 2:

Input: nums = [10,20,30]

Output: 2

Explanation:

The subsequence pairs which have the GCD of their elements equal to 10 are:

  - `([10, 20, 30], [10, 20, 30])`
  - `([10, 20, 30], [10, 20, 30])`

Example 3:

Input: nums = [1,1,1,1]

Output: 50

Constraints:

  - `1 <= nums.length <= 200`
  - `1 <= nums[i] <= 200`
*/
problem({
  number: 3608,
  title: "Find the Number of Subsequences With Equal GCD",
  difficulty: "Hard",
  pattern: "Dynamic Programming",
  url: "https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd",
  tests: [
    { args: [[1, 2, 3, 4]], expected: 10 },
    { args: [[10, 20, 30]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 50 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function subsequencePairCount(nums) {
    // Write your solution here
  },
});

// ── Hard · Grid & Path DP (2) ──────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1234 · Number of Paths with Max Score · Hard · Grid & Path DP
 https://leetcode.com/problems/number-of-paths-with-max-score
 ──────────────────────────────────────────────────────────────────────

You are given a square `board` of characters. You can move on the board starting at the bottom right square marked with the character `'S'`.

You need to reach the top left square marked with the character `'E'`. The rest of the squares are labeled either with a numeric character `1, 2, ..., 9` or with an obstacle `'X'`. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.

Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo `10^9 + 7`.

In case there is no path, return `[0, 0]`.

Example 1:

Input: board = ["E23","2X2","12S"]
Output: [7,1]

Example 2:

Input: board = ["E12","1X1","21S"]
Output: [4,2]

Example 3:

Input: board = ["E11","XXX","11S"]
Output: [0,0]

Constraints:

  - `2 <= board.length == board[i].length <= 100`
*/
problem({
  number: 1234,
  title: "Number of Paths with Max Score",
  difficulty: "Hard",
  pattern: "Grid & Path DP",
  url: "https://leetcode.com/problems/number-of-paths-with-max-score",
  tests: [
    { args: [["E23", "2X2", "12S"]], expected: [7, 1] },
    { args: [["E12", "1X1", "21S"]], expected: [4, 2] },
    { args: [["E11", "XXX", "11S"]], expected: [0, 0] },
  ],
  /**
   * @param {string[]} board
   * @return {number[]}
   */
  solve: function pathsWithMaxScore(board) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2349 · Check if There Is a Valid Parentheses String Path · Hard · Grid & Path DP
 https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path
 ──────────────────────────────────────────────────────────────────────

A parentheses string is a non-empty string consisting only of `'('` and `')'`. It is valid if any of the following conditions is true:

  - It is `()`.
  - It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid parentheses strings.
  - It can be written as `(A)`, where `A` is a valid parentheses string.

You are given an `m x n` matrix of parentheses `grid`. A valid parentheses string path in the grid is a path satisfying all of the following conditions:

  - The path starts from the upper left cell `(0, 0)`.
  - The path ends at the bottom-right cell `(m - 1, n - 1)`.
  - The path only ever moves down or right.
  - The resulting parentheses string formed by the path is valid.

Return `true` if there exists a valid parentheses string path in the grid. Otherwise, return `false`.

Example 1:

Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string "()(())".
The second path shown results in the valid parentheses string "((()))".
Note that there may be other valid parentheses string paths.

Example 2:

Input: grid = [[")",")"],["(","("]]
Output: false
Explanation: The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false.

Constraints:

  - `m == grid.length`
  - `n == grid[i].length`
  - `1 <= m, n <= 100`
  - `grid[i][j]` is either `'('` or `')'`.
*/
problem({
  number: 2349,
  title: "Check if There Is a Valid Parentheses String Path",
  difficulty: "Hard",
  pattern: "Grid & Path DP",
  url: "https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path",
  tests: [
    {
      args: [
        [
          ["(", "(", "("],
          [")", "(", ")"],
          ["(", "(", ")"],
          ["(", "(", ")"],
        ],
      ],
      expected: true,
    },
    {
      args: [
        [
          [")", ")"],
          ["(", "("],
        ],
      ],
      expected: false,
    },
  ],
  /**
   * @param {character[][]} grid
   * @return {boolean}
   */
  solve: function hasValidPath(grid) {
    // Write your solution here
  },
});

// ── Hard · Game Theory (4) ─────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1522 · Stone Game III · Hard · Game Theory
 https://leetcode.com/problems/stone-game-iii
 ──────────────────────────────────────────────────────────────────────

Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array `stoneValue`.

Alice and Bob take turns, with Alice starting first. On each player's turn, that player can take `1`, `2`, or `3` stones from the first remaining stones in the row.

The score of each player is the sum of the values of the stones taken. The score of each player is `0` initially.

The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken.

Assume Alice and Bob play optimally.

Return `"Alice"` if Alice will win, `"Bob"` if Bob will win, or `"Tie"` if they will end the game with the same score.

Example 1:

Input: stoneValue = [1,2,3,7]
Output: "Bob"
Explanation: Alice will always lose. Her best move will be to take three piles and the score become 6. Now the score of Bob is 7 and Bob wins.

Example 2:

Input: stoneValue = [1,2,3,-9]
Output: "Alice"
Explanation: Alice must choose all the three piles at the first move to win and leave Bob with negative score.
If Alice chooses one pile her score will be 1 and the next move Bob's score becomes 5. In the next move, Alice will take the pile with value = -9 and lose.
If Alice chooses two piles her score will be 3 and the next move Bob's score becomes 3. In the next move, Alice will take the pile with value = -9 and also lose.
Remember that both play optimally so here Alice will choose the scenario that makes her win.

Example 3:

Input: stoneValue = [1,2,3,6]
Output: "Tie"
Explanation: Alice cannot win this game. She can end the game in a draw if she decided to choose all the first three piles, otherwise she will lose.

Constraints:

  - `1 <= stoneValue.length <= 5 * 10^4`
  - `-1000 <= stoneValue[i] <= 1000`
*/
problem({
  number: 1522,
  title: "Stone Game III",
  difficulty: "Hard",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game-iii",
  tests: [
    { args: [[1, 2, 3, 7]], expected: "Bob" },
    { args: [[1, 2, 3, -9]], expected: "Alice" },
    { args: [[1, 2, 3, 6]], expected: "Tie" },
  ],
  /**
   * @param {number[]} stoneValue
   * @return {string}
   */
  solve: function stoneGameIII(stoneValue) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1617 · Stone Game IV · Hard · Game Theory
 https://leetcode.com/problems/stone-game-iv
 ──────────────────────────────────────────────────────────────────────

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there are `n` stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.

Also, if a player cannot make a move, he/she loses the game.

Given a positive integer `n`, return `true` if and only if Alice wins the game otherwise return `false`, assuming both players play optimally.

Example 1:

Input: n = 1
Output: true
Explanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.

Example 2:

Input: n = 2
Output: false
Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).

Example 3:

Input: n = 4
Output: true
Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).

Constraints:

  - `1 <= n <= 10^5`
*/
problem({
  number: 1617,
  title: "Stone Game IV",
  difficulty: "Hard",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game-iv",
  tests: [
    { args: [1], expected: true },
    { args: [2], expected: false },
    { args: [4], expected: true },
  ],
  /**
   * @param {number} n
   * @return {boolean}
   */
  solve: function winnerSquareGame(n) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #1685 · Stone Game V · Hard · Game Theory
 https://leetcode.com/problems/stone-game-v
 ──────────────────────────────────────────────────────────────────────

There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array `stoneValue`.

In each round of the game, Alice divides the row into two non-empty rows (i.e. left row and right row), then Bob calculates the value of each row which is the sum of the values of all the stones in this row. Bob throws away the row which has the maximum value, and Alice's score increases by the value of the remaining row. If the value of the two rows are equal, Bob lets Alice decide which row will be thrown away. The next round starts with the remaining row.

The game ends when there is only one stone remaining. Alice's score is initially zero.

Return the maximum score that Alice can obtain.

Example 1:

Input: stoneValue = [6,2,3,4,5,5]
Output: 18
Explanation: In the first round, Alice divides the row to [6,2,3], [4,5,5]. The left row has the value 11 and the right row has value 14. Bob throws away the right row and Alice's score is now 11.
In the second round Alice divides the row to [6], [2,3]. This time Bob throws away the left row and Alice's score becomes 16 (11 + 5).
The last round Alice has only one choice to divide the row which is [2], [3]. Bob throws away the right row and Alice's score is now 18 (16 + 2). The game ends because only one stone is remaining in the row.

Example 2:

Input: stoneValue = [7,7,7,7,7,7,7]
Output: 28

Example 3:

Input: stoneValue = [4]
Output: 0

Constraints:

  - `1 <= stoneValue.length <= 500`
  - `1 <= stoneValue[i] <= 10^6`
*/
problem({
  number: 1685,
  title: "Stone Game V",
  difficulty: "Hard",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game-v",
  tests: [
    { args: [[6, 2, 3, 4, 5, 5]], expected: 18 },
    { args: [[7, 7, 7, 7, 7, 7, 7]], expected: 28 },
    { args: [[4]], expected: 0 },
  ],
  /**
   * @param {number[]} stoneValue
   * @return {number}
   */
  solve: function stoneGameV(stoneValue) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2002 · Stone Game VIII · Hard · Game Theory
 https://leetcode.com/problems/stone-game-viii
 ──────────────────────────────────────────────────────────────────────

Alice and Bob take turns playing a game, with Alice starting first.

There are `n` stones arranged in a row. On each player's turn, while the number of stones is more than one, they will do the following:

  - Choose an integer `x > 1`, and remove the leftmost `x` stones from the row.
  - Add the sum of the removed stones' values to the player's score.
  - Place a new stone, whose value is equal to that sum, on the left side of the row.

The game stops when only one stone is left in the row.

The score difference between Alice and Bob is `(Alice's score - Bob's score)`. Alice's goal is to maximize the score difference, and Bob's goal is the minimize the score difference.

Given an integer array `stones` of length `n` where `stones[i]` represents the value of the `i^th` stone from the left, return the score difference between Alice and Bob if they both play optimally.

Example 1:

Input: stones = [-1,2,-3,4,-5]
Output: 5
Explanation:
- Alice removes the first 4 stones, adds (-1) + 2 + (-3) + 4 = 2 to her score, and places a stone of
  value 2 on the left. stones = [2,-5].
- Bob removes the first 2 stones, adds 2 + (-5) = -3 to his score, and places a stone of value -3 on
  the left. stones = [-3].
The difference between their scores is 2 - (-3) = 5.

Example 2:

Input: stones = [7,-6,5,10,5,-2,-6]
Output: 13
Explanation:
- Alice removes all stones, adds 7 + (-6) + 5 + 10 + 5 + (-2) + (-6) = 13 to her score, and places a
  stone of value 13 on the left. stones = [13].
The difference between their scores is 13 - 0 = 13.

Example 3:

Input: stones = [-10,-12]
Output: -22
Explanation:
- Alice can only make one move, which is to remove both stones. She adds (-10) + (-12) = -22 to her
  score and places a stone of value -22 on the left. stones = [-22].
The difference between their scores is (-22) - 0 = -22.

Constraints:

  - `n == stones.length`
  - `2 <= n <= 10^5`
  - `-10^4 <= stones[i] <= 10^4`
*/
problem({
  number: 2002,
  title: "Stone Game VIII",
  difficulty: "Hard",
  pattern: "Game Theory",
  url: "https://leetcode.com/problems/stone-game-viii",
  tests: [
    { args: [[-1, 2, -3, 4, -5]], expected: 5 },
    { args: [[7, -6, 5, 10, 5, -2, -6]], expected: 13 },
    { args: [[-10, -12]], expected: -22 },
  ],
  /**
   * @param {number[]} stones
   * @return {number}
   */
  solve: function stoneGameVIII(stones) {
    // Write your solution here
  },
});

// ── Hard · Math & Number Theory (4) ────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #1692 · Number of Ways to Reorder Array to Get Same BST · Hard · Math & Number Theory
 https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst
 ──────────────────────────────────────────────────────────────────────

Given an array `nums` that represents a permutation of integers from `1` to `n`. We are going to construct a binary search tree (BST) by inserting the elements of `nums` in order into an initially empty BST. Find the number of different ways to reorder `nums` so that the constructed BST is identical to that formed from the original array `nums`.

  - For example, given `nums = [2,1,3]`, we will have 2 as the root, 1 as a left child, and 3 as a right child. The array `[2,3,1]` also yields the same BST but `[3,2,1]` yields a different BST.

Return the number of ways to reorder `nums` such that the BST formed is identical to the original BST formed from `nums`.

Since the answer may be very large, return it modulo `10^9 + 7`.

Example 1:

Input: nums = [2,1,3]
Output: 1
Explanation: We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST.

Example 2:

Input: nums = [3,4,5,1,2]
Output: 5
Explanation: The following 5 arrays will yield the same BST:
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]

Example 3:

Input: nums = [1,2,3]
Output: 0
Explanation: There are no other orderings of nums that will yield the same BST.

Constraints:

  - `1 <= nums.length <= 1000`
  - `1 <= nums[i] <= nums.length`
  - All integers in `nums` are distinct.
*/
problem({
  number: 1692,
  title: "Number of Ways to Reorder Array to Get Same BST",
  difficulty: "Hard",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst",
  tests: [
    { args: [[2, 1, 3]], expected: 1 },
    { args: [[3, 4, 5, 1, 2]], expected: 5 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function numOfWays(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #2605 · Count Anagrams · Hard · Math & Number Theory
 https://leetcode.com/problems/count-anagrams
 ──────────────────────────────────────────────────────────────────────

You are given a string `s` containing one or more words. Every consecutive pair of words is separated by a single space `' '`.

A string `t` is an anagram of string `s` if the `i^th` word of `t` is a permutation of the `i^th` word of `s`.

  - For example, `"acb dfe"` is an anagram of `"abc def"`, but `"def cab"` and `"adc bef"` are not.

Return the number of distinct anagrams of `s`. Since the answer may be very large, return it modulo `10^9 + 7`.

Example 1:

Input: s = "too hot"
Output: 18
Explanation: Some of the anagrams of the given string are "too hot", "oot hot", "oto toh", "too toh", and "too oht".

Example 2:

Input: s = "aa"
Output: 1
Explanation: There is only one anagram possible for the given string.

Constraints:

  - `1 <= s.length <= 10^5`
  - `s` consists of lowercase English letters and spaces `' '`.
  - There is single space between consecutive words.
*/
problem({
  number: 2605,
  title: "Count Anagrams",
  difficulty: "Hard",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/count-anagrams",
  tests: [
    { args: ["too hot"], expected: 18 },
    { args: ["aa"], expected: 1 },
  ],
  /**
   * @param {string} s
   * @return {number}
   */
  solve: function countAnagrams(s) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3583 · Sorted GCD Pair Queries · Hard · Math & Number Theory
 https://leetcode.com/problems/sorted-gcd-pair-queries
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n` and an integer array `queries`.

Let `gcdPairs` denote an array obtained by calculating the GCD of all possible pairs `(nums[i], nums[j])`, where `0 <= i < j < n`, and then sorting these values in ascending order.

For each query `queries[i]`, you need to find the element at index `queries[i]` in `gcdPairs`.

Return an integer array `answer`, where `answer[i]` is the value at `gcdPairs[queries[i]]` for each query.

The term `gcd(a, b)` denotes the greatest common divisor of `a` and `b`.

Example 1:

Input: nums = [2,3,4], queries = [0,2,2]

Output: [1,2,2]

Explanation:

`gcdPairs = [gcd(nums[0], nums[1]), gcd(nums[0], nums[2]), gcd(nums[1], nums[2])] = [1, 2, 1]`.

After sorting in ascending order, `gcdPairs = [1, 1, 2]`.

So, the answer is `[gcdPairs[queries[0]], gcdPairs[queries[1]], gcdPairs[queries[2]]] = [1, 2, 2]`.

Example 2:

Input: nums = [4,4,2,1], queries = [5,3,1,0]

Output: [4,2,1,1]

Explanation:

`gcdPairs` sorted in ascending order is `[1, 1, 1, 2, 2, 4]`.

Example 3:

Input: nums = [2,2], queries = [0,0]

Output: [2,2]

Explanation:

`gcdPairs = [2]`.

Constraints:

  - `2 <= n == nums.length <= 10^5`
  - `1 <= nums[i] <= 5 * 10^4`
  - `1 <= queries.length <= 10^5`
  - `0 <= queries[i] < n * (n - 1) / 2`
*/
problem({
  number: 3583,
  title: "Sorted GCD Pair Queries",
  difficulty: "Hard",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/sorted-gcd-pair-queries",
  tests: [
    {
      args: [
        [2, 3, 4],
        [0, 2, 2],
      ],
      expected: [1, 2, 2],
    },
    {
      args: [
        [4, 4, 2, 1],
        [5, 3, 1, 0],
      ],
      expected: [4, 2, 1, 1],
    },
    {
      args: [
        [2, 2],
        [0, 0],
      ],
      expected: [2, 2],
    },
  ],
  /**
   * @param {number[]} nums
   * @param {number[]} queries
   * @return {number[]}
   */
  solve: function gcdValues(nums, queries) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #4257 · Sum of Sortable Integers · Hard · Math & Number Theory
 https://leetcode.com/problems/sum-of-sortable-integers
 ──────────────────────────────────────────────────────────────────────

You are given an integer array `nums` of length `n`.

An integer `k` is called sortable if `k` divides `n` and you can sort `nums` in non-decreasing order by sequentially performing the following operations:

  - Partition `nums` into consecutive subarrays of length `k`.
  - Cyclically rotate each subarray independently any number of times to the left or to the right.

Return an integer denoting the sum of all possible sortable integers `k`.

Example 1:

Input: nums = [3,1,2]

Output: 3

Explanation:

  - For `n = 3`, possible divisors are 1 and 3.
  - For `k = 1`: each subarray has one element. No rotation can sort the array.
  - For `k = 3`: the single subarray `[3, 1, 2]` can be rotated once to produce `[1, 2, 3]`, which is sorted.
  - Only `k = 3` is sortable. Hence, the answer is 3.

Example 2:

Input: nums = [7,6,5]

Output: 0

Explanation:

  - For `n = 3`, possible divisors are 1 and 3.
  - For `k = 1`: each subarray has one element. No rotation can sort the array.
  - For `k = 3`: the single subarray `[7, 6, 5]` cannot be rotated into non-decreasing order.
  - No `k` is sortable. Hence, the answer is 0.

Example 3:

Input: nums = [5,8]

Output: 3

Explanation:

  - For `n = 2`, possible divisors are 1 and 2.
  - Since `[5, 8]` is already sorted, every divisor is sortable. Hence, the answer is `1 + 2 = 3`.

Constraints:

  - `1 <= n == nums.length <= 10^5`
  - `1 <= nums[i] <= 10^5`
*/
problem({
  number: 4257,
  title: "Sum of Sortable Integers",
  difficulty: "Hard",
  pattern: "Math & Number Theory",
  url: "https://leetcode.com/problems/sum-of-sortable-integers",
  tests: [
    { args: [[3, 1, 2]], expected: 3 },
    { args: [[7, 6, 5]], expected: 0 },
    { args: [[5, 8]], expected: 3 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function sortableIntegers(nums) {
    // Write your solution here
  },
});

// ── Hard · Digits & Number Arithmetic (1) ──────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #3635 · Smallest Divisible Digit Product II · Hard · Digits & Number Arithmetic
 https://leetcode.com/problems/smallest-divisible-digit-product-ii
 ──────────────────────────────────────────────────────────────────────

You are given a string `num` which represents a positive integer, and an integer `t`.

A number is called zero-free if none of its digits are 0.

Return a string representing the smallest zero-free number greater than or equal to `num` such that the product of its digits is divisible by `t`. If no such number exists, return `"-1"`.

Example 1:

Input: num = "1234", t = 256

Output: "1488"

Explanation:

The smallest zero-free number that is greater than 1234 and has the product of its digits divisible by 256 is 1488, with the product of its digits equal to 256.

Example 2:

Input: num = "12355", t = 50

Output: "12355"

Explanation:

12355 is already zero-free and has the product of its digits divisible by 50, with the product of its digits equal to 150.

Example 3:

Input: num = "11111", t = 26

Output: "-1"

Explanation:

No number greater than 11111 has the product of its digits divisible by 26.

Constraints:

  - `2 <= num.length <= 2 * 10^5`
  - `num` consists only of digits in the range `['0', '9']`.
  - `num` does not contain leading zeros.
  - `1 <= t <= 10^14`
*/
problem({
  number: 3635,
  title: "Smallest Divisible Digit Product II",
  difficulty: "Hard",
  pattern: "Digits & Number Arithmetic",
  url: "https://leetcode.com/problems/smallest-divisible-digit-product-ii",
  tests: [
    { args: ["1234", 256], expected: "1488" },
    { args: ["12355", 50], expected: "12355" },
    { args: ["11111", 26], expected: "-1" },
  ],
  /**
   * @param {string} num
   * @param {number} t
   * @return {string}
   */
  solve: function smallestNumber(num, t) {
    // Write your solution here
  },
});

// ── Hard · Design & Heap (1) ───────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #460 · LFU Cache · Hard · Design & Heap
 https://leetcode.com/problems/lfu-cache
 ──────────────────────────────────────────────────────────────────────

Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the `LFUCache` class:

  - `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.
  - `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`.
  - `void put(int key, int value)` Update the value of the `key` if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used `key` would be invalidated.

To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to `1` (due to the `put` operation). The use counter for a key in the cache is incremented either a `get` or `put` operation is called on it.

The functions get and put must each run in `O(1)` average time complexity.

Example 1:

Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3

Constraints:

  - `1 <= capacity <= 10^4`
  - `0 <= key <= 10^5`
  - `0 <= value <= 10^9`
  - At most `2 * 10^5` calls will be made to `get` and `put`.
*/
problem({
  number: 460,
  title: "LFU Cache",
  difficulty: "Hard",
  pattern: "Design & Heap",
  url: "https://leetcode.com/problems/lfu-cache",
  design: true,
  tests: [
    {
      args: [
        [
          "LFUCache",
          "put",
          "put",
          "get",
          "put",
          "get",
          "get",
          "put",
          "get",
          "get",
          "get",
        ],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]],
      ],
      expected: [null, null, null, 1, null, -1, 3, null, -1, 3, 4],
    },
  ],
  solve: class LFUCache {
    /** @param {number} capacity */
    constructor(capacity) {
      // Write your solution here
    }

    /** @return {number} */
    get(key) {
      // Write your solution here
    }

    /** @return {void} */
    put(key, value) {
      // Write your solution here
    }
  },
});

// ── Hard · Segment Tree (4) ────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────────────
 #2319 · Longest Substring of One Repeating Character · Hard · Segment Tree
 https://leetcode.com/problems/longest-substring-of-one-repeating-character
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed string `s`. You are also given a 0-indexed string `queryCharacters` of length `k` and a 0-indexed array of integer indices `queryIndices` of length `k`, both of which are used to describe `k` queries.

The `i^th` query updates the character in `s` at index `queryIndices[i]` to the character `queryCharacters[i]`.

Return an array `lengths` of length `k` where `lengths[i]` is the length of the longest substring of `s` consisting of only one repeating character after the `i^th` query is performed.

Example 1:

Input: s = "babacc", queryCharacters = "bcb", queryIndices = [1,3,3]
Output: [3,3,4]
Explanation:
- 1^st query updates s = "bbbacc". The longest substring consisting of one repeating character is "bbb" with length 3.
- 2^nd query updates s = "bbbccc".
  The longest substring consisting of one repeating character can be "bbb" or "ccc" with length 3.
- 3^rd query updates s = "bbbbcc". The longest substring consisting of one repeating character is "bbbb" with length 4.
Thus, we return [3,3,4].

Example 2:

Input: s = "abyzz", queryCharacters = "aa", queryIndices = [2,1]
Output: [2,3]
Explanation:
- 1^st query updates s = "abazz". The longest substring consisting of one repeating character is "zz" with length 2.
- 2^nd query updates s = "aaazz". The longest substring consisting of one repeating character is "aaa" with length 3.
Thus, we return [2,3].

Constraints:

  - `1 <= s.length <= 10^5`
  - `s` consists of lowercase English letters.
  - `k == queryCharacters.length == queryIndices.length`
  - `1 <= k <= 10^5`
  - `queryCharacters` consists of lowercase English letters.
  - `0 <= queryIndices[i] < s.length`
*/
problem({
  number: 2319,
  title: "Longest Substring of One Repeating Character",
  difficulty: "Hard",
  pattern: "Segment Tree",
  url: "https://leetcode.com/problems/longest-substring-of-one-repeating-character",
  tests: [
    { args: ["babacc", "bcb", [1, 3, 3]], expected: [3, 3, 4] },
    { args: ["abyzz", "aa", [2, 1]], expected: [2, 3] },
  ],
  /**
   * @param {string} s
   * @param {string} queryCharacters
   * @param {number[]} queryIndices
   * @return {number[]}
   */
  solve: function longestRepeating(s, queryCharacters, queryIndices) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3139 · Subarrays Distinct Element Sum of Squares II · Hard · Segment Tree
 https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii
 ──────────────────────────────────────────────────────────────────────

You are given a 0-indexed integer array `nums`.

The distinct count of a subarray of `nums` is defined as:

  - Let `nums[i..j]` be a subarray of `nums` consisting of all the indices from `i` to `j` such that `0 <= i <= j < nums.length`. Then the number of distinct values in `nums[i..j]` is called the distinct count of `nums[i..j]`.

Return the sum of the squares of distinct counts of all subarrays of `nums`.

Since the answer may be very large, return it modulo `10^9 + 7`.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,1]
Output: 15
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 1^2 + 1^2 + 1^2 + 2^2 + 2^2 + 2^2 = 15.

Example 2:

Input: nums = [2,2]
Output: 3
Explanation: Three possible subarrays are:
[2]: 1 distinct value
[2]: 1 distinct value
[2,2]: 1 distinct value
The sum of the squares of the distinct counts in all subarrays is equal to 1^2 + 1^2 + 1^2 = 3.

Constraints:

  - `1 <= nums.length <= 10^5`
  - `1 <= nums[i] <= 10^5`
*/
problem({
  number: 3139,
  title: "Subarrays Distinct Element Sum of Squares II",
  difficulty: "Hard",
  pattern: "Segment Tree",
  url: "https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii",
  tests: [
    { args: [[1, 2, 1]], expected: 15 },
    { args: [[2, 2]], expected: 3 },
  ],
  /**
   * @param {number[]} nums
   * @return {number}
   */
  solve: function sumCounts(nums) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3804 · Maximize Active Section with Trade II · Hard · Segment Tree
 https://leetcode.com/problems/maximize-active-section-with-trade-ii
 ──────────────────────────────────────────────────────────────────────

You are given a binary string `s` of length `n`, where:

  - `'1'` represents an active section.
  - `'0'` represents an inactive section.

You can perform at most one trade to maximize the number of active sections in `s`. In a trade, you:

  - Convert a contiguous block of `'1'`s that is surrounded by `'0'`s to all `'0'`s.
  - Afterward, convert a contiguous block of `'0'`s that is surrounded by `'1'`s to all `'1'`s.

Additionally, you are given a 2D array `queries`, where `queries[i] = [li, ri]` represents a substring `s[li...ri]`.

For each query, determine the maximum possible number of active sections in `s` after making the optimal trade on the substring `s[li...ri]`.

Return an array `answer`, where `answer[i]` is the result for `queries[i]`.

Note

  - For each query, treat `s[li...ri]` as if it is augmented with a `'1'` at both ends, forming `t = '1' + s[li...ri] + '1'`. The augmented `'1'`s do not contribute to the final count.
  - The queries are independent of each other.

Example 1:

Input: s = "01", queries = [[0,1]]

Output: [1]

Explanation:

Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

Example 2:

Input: s = "0100", queries = [[0,3],[0,2],[1,3],[2,3]]

Output: [4,3,1,1]

Explanation:

  - Query `[0, 3]` → Substring `"0100"` → Augmented to `"101001"`

  Choose `"0100"`, convert `"0100"` → `"0000"` → `"1111"`.

  The final string without augmentation is `"1111"`. The maximum number of active sections is 4.

  - Query `[0, 2]` → Substring `"010"` → Augmented to `"10101"`

  Choose `"010"`, convert `"010"` → `"000"` → `"111"`.

  The final string without augmentation is `"1110"`. The maximum number of active sections is 3.

  - Query `[1, 3]` → Substring `"100"` → Augmented to `"11001"`

  Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

  - Query `[2, 3]` → Substring `"00"` → Augmented to `"1001"`

  Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

Example 3:

Input: s = "1000100", queries = [[1,5],[0,6],[0,4]]

Output: [6,7,2]

Explanation:

Query `[1, 5]` → Substring "00010" → Augmented to "1000101"
  Choose "00010", convert "00010" → "00000" → "11111".

  The final string without augmentation is "1111110". The maximum number of active sections is 6.

Query `[0, 6]` → Substring "1000100" → Augmented to "110001001"
  Choose "000100", convert "000100" → "000000" → "111111".

  The final string without augmentation is "1111111". The maximum number of active sections is 7.

Query `[0, 4]` → Substring "10001" → Augmented to "1100011"
  Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.

Example 4:

Input: s = "01010", queries = [[0,3],[1,4],[1,3]]

Output: [4,4,2]

Explanation:

  - Query `[0, 3]` → Substring `"0101"` → Augmented to `"101011"`

  Choose `"010"`, convert `"010"` → `"000"` → `"111"`.

  The final string without augmentation is `"11110"`. The maximum number of active sections is 4.

  - Query `[1, 4]` → Substring `"1010"` → Augmented to `"110101"`

  Choose `"010"`, convert `"010"` → `"000"` → `"111"`.

  The final string without augmentation is `"01111"`. The maximum number of active sections is 4.

  - Query `[1, 3]` → Substring `"101"` → Augmented to `"11011"`

  Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.

Constraints:

  - `1 <= n == s.length <= 10^5`
  - `1 <= queries.length <= 10^5`
  - `s[i]` is either `'0'` or `'1'`.
  - `queries[i] = [li, ri]`
  - `0 <= li <= ri < n`
*/
problem({
  number: 3804,
  title: "Maximize Active Section with Trade II",
  difficulty: "Hard",
  pattern: "Segment Tree",
  url: "https://leetcode.com/problems/maximize-active-section-with-trade-ii",
  tests: [
    { args: ["01", [[0, 1]]], expected: [1] },
    {
      args: [
        "0100",
        [
          [0, 3],
          [0, 2],
          [1, 3],
          [2, 3],
        ],
      ],
      expected: [4, 3, 1, 1],
    },
    {
      args: [
        "1000100",
        [
          [1, 5],
          [0, 6],
          [0, 4],
        ],
      ],
      expected: [6, 7, 2],
    },
    {
      args: [
        "01010",
        [
          [0, 3],
          [1, 4],
          [1, 3],
        ],
      ],
      expected: [4, 4, 2],
    },
  ],
  /**
   * @param {string} s
   * @param {number[][]} queries
   * @return {number[]}
   */
  solve: function maxActiveSectionsAfterTrade(s, queries) {
    // Write your solution here
  },
});

/* ──────────────────────────────────────────────────────────────────────
 #3840 · Find X Value of Array II · Hard · Segment Tree
 https://leetcode.com/problems/find-x-value-of-array-ii
 ──────────────────────────────────────────────────────────────────────

You are given an array of positive integers `nums` and a positive integer `k`. You are also given a 2D array `queries`, where `queries[i] = [indexi, valuei, starti, xi]`.

You are allowed to perform an operation once on `nums`, where you can remove any suffix from `nums` such that `nums` remains non-empty.

The x-value of `nums` for a given `x` is defined as the number of ways to perform this operation so that the product of the remaining elements leaves a remainder of `x` modulo `k`.

For each query in `queries` you need to determine the x-value of `nums` for `xi` after performing the following actions:

  - Update `nums[indexi]` to `valuei`. Only this step persists for the rest of the queries.
  - Remove the prefix `nums[0..(starti - 1)]` (where `nums[0..(-1)]` will be used to represent the empty prefix).

Return an array `result` of size `queries.length` where `result[i]` is the answer for the `i^th` query.

A prefix of an array is a subarray that starts from the beginning of the array and extends to any point within it.

A suffix of an array is a subarray that starts at any point within the array and extends to the end of the array.

Note that the prefix and suffix to be chosen for the operation can be empty.

Note that x-value has a different definition in this version.

Example 1:

Input: nums = [1,2,3,4,5], k = 3, queries = [[2,2,0,2],[3,3,3,0],[0,1,0,1]]

Output: [2,2,2]

Explanation:

  - For query 0, `nums` becomes `[1, 2, 2, 4, 5]`, and the empty prefix must be removed. The possible operations are:

    Remove the suffix `[2, 4, 5]`. `nums` becomes `[1, 2]`.

    - Remove the empty suffix. `nums` becomes `[1, 2, 2, 4, 5]` with a product 80, which gives remainder 2 when divided by 3.
  - For query 1, `nums` becomes `[1, 2, 2, 3, 5]`, and the prefix `[1, 2, 2]` must be removed. The possible operations are:

    Remove the empty suffix. `nums` becomes `[3, 5]`.

    - Remove the suffix `[5]`. `nums` becomes `[3]`.
  - For query 2, `nums` becomes `[1, 2, 2, 3, 5]`, and the empty prefix must be removed. The possible operations are:

    Remove the suffix `[2, 2, 3, 5]`. `nums` becomes `[1]`.

    - Remove the suffix `[3, 5]`. `nums` becomes `[1, 2, 2]`.

Example 2:

Input: nums = [1,2,4,8,16,32], k = 4, queries = [[0,2,0,2],[0,2,0,1]]

Output: [1,0]

Explanation:

  - For query 0, `nums` becomes `[2, 2, 4, 8, 16, 32]`. The only possible operation is:

    Remove the suffix `[2, 4, 8, 16, 32]`.

  - For query 1, `nums` becomes `[2, 2, 4, 8, 16, 32]`. There is no possible way to perform the operation.

Example 3:

Input: nums = [1,1,2,1,1], k = 2, queries = [[2,1,0,1]]

Output: [5]

Constraints:

  - `1 <= nums[i] <= 10^9`
  - `1 <= nums.length <= 10^5`
  - `1 <= k <= 5`
  - `1 <= queries.length <= 2 * 10^4`
  - `queries[i] == [indexi, valuei, starti, xi]`
  - `0 <= indexi <= nums.length - 1`
  - `1 <= valuei <= 10^9`
  - `0 <= starti <= nums.length - 1`
  - `0 <= xi <= k - 1`
*/
problem({
  number: 3840,
  title: "Find X Value of Array II",
  difficulty: "Hard",
  pattern: "Segment Tree",
  url: "https://leetcode.com/problems/find-x-value-of-array-ii",
  tests: [
    {
      args: [
        [1, 2, 3, 4, 5],
        3,
        [
          [2, 2, 0, 2],
          [3, 3, 3, 0],
          [0, 1, 0, 1],
        ],
      ],
      expected: [2, 2, 2],
    },
    {
      args: [
        [1, 2, 4, 8, 16, 32],
        4,
        [
          [0, 2, 0, 2],
          [0, 2, 0, 1],
        ],
      ],
      expected: [1, 0],
    },
    { args: [[1, 1, 2, 1, 1], 2, [[2, 1, 0, 1]]], expected: [5] },
  ],
  /**
   * @param {number[]} nums
   * @param {number} k
   * @param {number[][]} queries
   * @return {number[]}
   */
  solve: function resultArray(nums, k, queries) {
    // Write your solution here
  },
});

// ═══════════════════════════════════════════════════════════════════════════
//  RUNNER  (you don't need to edit anything below this line)
// ═══════════════════════════════════════════════════════════════════════════
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const PROGRESS_FILE = path.join(__dirname, "practice-progress.json");
const RESULT_TAG = "__PRACTICE_RESULT__";
const DIFFS = ["Easy", "Medium", "Hard"];

const useColor = process.stdout.isTTY;
const paint = (code) => (s) =>
  useColor ? `\x1b[${code}m${s}\x1b[0m` : String(s);
const green = paint(32),
  red = paint(31),
  yellow = paint(33),
  dim = paint(90),
  bold = paint(1),
  cyan = paint(36);

// ── conversions ────────────────────────────────────────────────────────────
function buildList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);
  return head;
}
function listToArray(node) {
  const out = [];
  let guard = 0;
  while (node && guard++ < 1e6) {
    out.push(node.val);
    node = node.next;
  }
  return out;
}
function buildTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < arr.length) {
    const node = q.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      q.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      q.push(node.right);
    }
    i++;
  }
  return root;
}
const clone = (x) => JSON.parse(JSON.stringify(x));

// ── comparison ─────────────────────────────────────────────────────────────
const isNil = (x) => x === null || x === undefined;
function equal(a, b) {
  if (isNil(a) || isNil(b)) return isNil(a) && isNil(b);
  if (typeof a === "number" && typeof b === "number") {
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    if (a === b) return true;
    if (Number.isInteger(a) && Number.isInteger(b)) return false;
    return Math.abs(a - b) <= 1e-5;
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((x, i) => equal(x, b[i]))
    );
  }
  if (typeof a === "object" && typeof b === "object") {
    const ka = Object.keys(a),
      kb = Object.keys(b);
    return ka.length === kb.length && ka.every((k) => equal(a[k], b[k]));
  }
  return a === b;
}
function canon(x) {
  if (!Array.isArray(x)) return x;
  return x.map(canon).sort((p, q) => {
    const a = JSON.stringify(p),
      b = JSON.stringify(q);
    return a < b ? -1 : a > b ? 1 : 0;
  });
}

// ── custom checkers (problems with several valid answers / in-place + return) ──
// Each returns null when OK, otherwise a message explaining what is wrong.
const CHECKERS = {
  // Remove Duplicates from Sorted Array: return k and put the unique values in nums[0..k)
  26({ orig, args, result, expected }) {
    const want = orig[0].filter((v, i, a) => i === 0 || v !== a[i - 1]);
    if (result !== expected)
      return `returned k = ${result}, expected ${expected}`;
    const got = args[0].slice(0, result);
    return equal(got, want)
      ? null
      : `first k elements are ${JSON.stringify(got)}, expected ${JSON.stringify(want)}`;
  },
  // Remove Element: return k and put the kept values (any order) in nums[0..k)
  27({ orig, args, result, expected }) {
    const want = orig[0].filter((v) => v !== orig[1]).sort((a, b) => a - b);
    if (result !== expected)
      return `returned k = ${result}, expected ${expected}`;
    const got = args[0].slice(0, result).sort((a, b) => a - b);
    return equal(got, want)
      ? null
      : `first k elements are ${JSON.stringify(got)}, expected (any order) ${JSON.stringify(want)}`;
  },
  // Max Nesting Depth of Two Valid Parentheses Strings: any valid split with minimal depth
  1208({ orig, result }) {
    const seq = orig[0];
    if (!Array.isArray(result) || result.length !== seq.length)
      return "answer must be an array with the same length as seq";
    let a = "",
      b = "";
    for (let i = 0; i < seq.length; i++) {
      if (result[i] === 0) a += seq[i];
      else if (result[i] === 1) b += seq[i];
      else return "answer may only contain 0 and 1";
    }
    const depth = (s) => {
      let d = 0,
        m = 0;
      for (const c of s) {
        d += c === "(" ? 1 : -1;
        if (d < 0) return -1;
        m = Math.max(m, d);
      }
      return d === 0 ? m : -1;
    };
    const da = depth(a),
      db = depth(b);
    if (da < 0 || db < 0)
      return `A = "${a}" and B = "${b}" must both be valid parentheses strings`;
    const best = Math.ceil(depth(seq) / 2);
    return Math.max(da, db) === best
      ? null
      : `max depth is ${Math.max(da, db)}, minimum possible is ${best}`;
  },
  // Build an Array With Stack Operations: simulate the operations
  1552({ orig, result }) {
    const [target, n] = orig;
    if (!Array.isArray(result)) return 'must return an array of "Push"/"Pop"';
    const stack = [];
    let next = 1;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === "Push") {
        if (next > n) return `pushed past n = ${n}`;
        stack.push(next++);
      } else if (result[i] === "Pop") {
        if (!stack.length) return "popped from an empty stack";
        stack.pop();
      } else return `unknown operation ${JSON.stringify(result[i])}`;
      if (i < result.length - 1 && equal(stack, target))
        return "continued after the stack already equals target";
    }
    return equal(stack, target)
      ? null
      : `final stack is ${JSON.stringify(stack)}, expected ${JSON.stringify(target)}`;
  },
  // Create Grid With Exactly One Path: count right/down paths
  4342({ orig, result }) {
    const [m, n] = orig;
    if (!Array.isArray(result) || result.length !== m)
      return `grid must have ${m} rows`;
    for (const row of result) {
      if (typeof row !== "string" || row.length !== n || /[^.#]/.test(row))
        return `each row must be a string of ${n} characters from '.' and '#'`;
    }
    const dp = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (result[i][j] === "#") continue;
        if (i === 0 && j === 0) dp[i][j] = 1;
        else dp[i][j] = (i ? dp[i - 1][j] : 0) + (j ? dp[i][j - 1] : 0);
      }
    }
    return dp[m - 1][n - 1] === 1
      ? null
      : `grid has ${dp[m - 1][n - 1]} valid paths, expected exactly 1`;
  },
};

// ── is the solve function still the empty stub? ────────────────────────────
function isStub(fn) {
  const src = fn
    .toString()
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/\s+/g, "");
  if (/^function\w*\([^)]*\)\{\}$/.test(src)) return true;
  if (/^class\w*\{(?:\w+\([^)]*\)\{\})*\}$/.test(src)) return true;
  return false;
}

// ── run the tests of one problem (inside the child process) ────────────────
function runProblem(num) {
  const p = PROBLEMS[num];
  if (!p) return { status: "missing" };
  if (p.kind === "sql") return { status: "sql" };
  if (!p.tests || !p.tests.length) return { status: "notests" };
  if (isStub(p.solve)) return { status: "todo", total: p.tests.length };

  const types = p.types || {};
  const failures = [];
  let passed = 0;
  p.tests.forEach((t, i) => {
    const orig = clone(t.args);
    let args = clone(t.args);
    try {
      let actual,
        expected = t.expected;
      if (p.design) {
        const [ops, params] = args;
        const obj = new p.solve(...params[0]);
        actual = [null];
        for (let k = 1; k < ops.length; k++)
          actual.push(obj[ops[k]](...params[k]));
      } else {
        const callArgs = args.map((a, k) =>
          types.args && types.args[k] === "list"
            ? buildList(a)
            : types.args && types.args[k] === "tree"
              ? buildTree(a)
              : a,
        );
        let result = p.solve(...callArgs);
        if (types.returns === "list") result = listToArray(result);
        actual = p.inPlace ? callArgs[0] : result;
        if (p.check) {
          const msg = CHECKERS[p.number]({
            orig,
            args: callArgs,
            result,
            expected,
          });
          if (msg) throw new Error(msg);
          passed++;
          return;
        }
      }
      const ok =
        p.compare === "unordered"
          ? equal(canon(actual), canon(expected))
          : equal(actual, expected);
      if (ok) passed++;
      else
        failures.push({
          i: i + 1,
          args: orig,
          expected,
          got:
            actual === undefined
              ? "(undefined, did you forget to return?)"
              : actual,
        });
    } catch (e) {
      failures.push({
        i: i + 1,
        args: orig,
        expected: t.expected,
        error: e && e.message ? e.message : String(e),
      });
    }
  });
  return {
    status: failures.length ? "fail" : "pass",
    passed,
    total: p.tests.length,
    failures,
  };
}

// ── progress file ──────────────────────────────────────────────────────────
function loadProgress() {
  try {
    return Object.assign(
      { solved: {}, daily: null },
      JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8")),
    );
  } catch (e) {
    return { solved: {}, daily: null };
  }
}
function saveProgress(pr) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(pr, null, 2));
}
const today = () => new Date().toLocaleDateString("en-CA");

// ── helpers ────────────────────────────────────────────────────────────────
const short = (v, n = 160) => {
  const s = JSON.stringify(v);
  return s && s.length > n ? s.slice(0, n) + "…" : s;
};
const diffColor = (d) =>
  d === "Easy"
    ? green(d.padEnd(6))
    : d === "Medium"
      ? yellow(d.padEnd(6))
      : red(d.padEnd(6));
const runnable = (p) => p.kind !== "sql" && p.tests && p.tests.length > 0;

function runInChild(num, timeoutMs) {
  const r = spawnSync(process.execPath, [__filename, "__child", String(num)], {
    encoding: "utf8",
    timeout: timeoutMs,
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.error && r.error.code === "ETIMEDOUT") return { status: "timeout" };
  const out = r.stdout || "";
  const idx = out.lastIndexOf(RESULT_TAG);
  if (idx === -1)
    return {
      status: "crash",
      error: (r.stderr || out || "").split("\n").slice(0, 6).join("\n"),
    };
  const printed = out.slice(0, idx).trim();
  const res = JSON.parse(out.slice(idx + RESULT_TAG.length));
  if (printed) res.printed = printed;
  return res;
}

function header(p) {
  return `${bold("#" + p.number)} ${bold(p.title)}  ${diffColor(p.difficulty)} ${dim("· " + p.pattern)}`;
}

function report(p, res, progress) {
  console.log(header(p));
  switch (res.status) {
    case "pass":
      console.log("  " + green(`✔ PASS  ${res.passed}/${res.total} tests`));
      if (!progress.solved[p.number]) {
        progress.solved[p.number] = today();
        saveProgress(progress);
        console.log("  " + cyan("★ saved to progress"));
      }
      break;
    case "fail":
      console.log(
        "  " + red(`✘ FAIL  ${res.passed}/${res.total} tests passed`),
      );
      for (const f of res.failures.slice(0, 3)) {
        console.log(dim(`   test ${f.i}`));
        console.log(`     input:    ${short(f.args)}`);
        console.log(`     expected: ${short(f.expected)}`);
        if (f.error) console.log("     " + red("error:    " + f.error));
        else console.log(`     got:      ${short(f.got)}`);
      }
      if (res.failures.length > 3)
        console.log(
          dim(`   … ${res.failures.length - 3} more failing test(s)`),
        );
      break;
    case "todo":
      console.log(
        "  " +
          yellow(
            `⏳ not started (${res.total} tests ready), fill in the solve function`,
          ),
      );
      break;
    case "timeout":
      console.log("  " + red("⏱ TIMEOUT, infinite loop or too slow"));
      break;
    case "sql":
      console.log(
        "  " +
          dim(
            "SQL problem, practice it in a SQL editor, then: node practice.js done " +
              p.number,
          ),
      );
      break;
    case "notests":
      console.log("  " + dim("no tests available"));
      break;
    default:
      console.log("  " + red("💥 crashed: " + (res.error || res.status)));
  }
  if (res.printed)
    console.log(
      dim("  console output:\n    " + res.printed.split("\n").join("\n    ")),
    );
  console.log(dim("  " + p.url));
}

// ── argument parsing ───────────────────────────────────────────────────────
function parseArgs(argv) {
  const nums = [],
    opts = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val =
        argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
      opts[key] = val;
    } else if (/^\d+$/.test(a)) nums.push(Number(a));
  }
  return { nums, opts };
}
function filterProblems(opts) {
  let list = Object.values(PROBLEMS).sort((a, b) => a.number - b.number);
  if (opts.difficulty)
    list = list.filter(
      (p) =>
        p.difficulty.toLowerCase() === String(opts.difficulty).toLowerCase(),
    );
  if (opts.pattern) {
    const q = String(opts.pattern).toLowerCase();
    list = list.filter((p) => p.pattern.toLowerCase().includes(q));
  }
  return list;
}

// ── deterministic daily pick ───────────────────────────────────────────────
function hashStr(s) {
  let h = 2166136261;
  for (const c of s) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickDaily(opts, progress) {
  const counts = { Easy: 1, Medium: 1, Hard: 0 };
  for (const d of DIFFS)
    if (opts[d.toLowerCase()] !== undefined)
      counts[d] = Number(opts[d.toLowerCase()]) || 0;
  const date = today();
  const key = JSON.stringify([counts, opts.pattern || null]);
  if (
    progress.daily &&
    progress.daily.date === date &&
    progress.daily.key === key
  )
    return progress.daily.numbers;

  const picks = [];
  for (const d of DIFFS) {
    let pool = filterProblems({ difficulty: d, pattern: opts.pattern }).filter(
      runnable,
    );
    const fresh = pool.filter((p) => !progress.solved[p.number]);
    if (fresh.length) pool = fresh;
    const chosen = new Set();
    for (let k = 0; k < counts[d] && chosen.size < pool.length; k++) {
      let idx = hashStr(`${date}:${d}:${k}`) % pool.length;
      while (chosen.has(pool[idx].number)) idx = (idx + 1) % pool.length;
      chosen.add(pool[idx].number);
      picks.push(pool[idx].number);
    }
  }
  progress.daily = { date, key, numbers: picks };
  saveProgress(progress);
  return picks;
}

// ── streak ─────────────────────────────────────────────────────────────────
function streak(progress) {
  const days = new Set(Object.values(progress.solved));
  const d = new Date();
  const fmt = (x) => x.toLocaleDateString("en-CA");
  if (!days.has(fmt(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(fmt(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// ── commands ───────────────────────────────────────────────────────────────
function runMany(numbers, timeoutMs, progress) {
  let pass = 0,
    fail = 0,
    todo = 0;
  for (const n of numbers) {
    const p = PROBLEMS[n];
    if (!p) {
      console.log(red(`#${n} not found`));
      continue;
    }
    const res = runInChild(n, timeoutMs);
    report(p, res, progress);
    console.log();
    if (res.status === "pass") pass++;
    else if (res.status === "todo") todo++;
    else if (res.status !== "sql") fail++;
  }
  if (numbers.length > 1)
    console.log(
      `${green(pass + " passed")} · ${red(fail + " failing")} · ${yellow(todo + " not started")}`,
    );
}

function cmdDesc(num) {
  const p = PROBLEMS[num];
  if (!p) return console.log(red(`#${num} not found`));
  const src = fs.readFileSync(__filename, "utf8");
  const m = src.match(new RegExp(`/\\* ─+\\n #${num} · [\\s\\S]*?\\*/`));
  console.log(m ? m[0].replace(/^\/\* /, "").replace(/\*\/$/, "") : header(p));
}

function cmdList(opts, progress) {
  let list = filterProblems(opts);
  if (opts.todo) list = list.filter((p) => !progress.solved[p.number]);
  let lastDiff = null;
  for (const p of list) {
    if (p.difficulty !== lastDiff) {
      console.log("\n" + bold(`── ${p.difficulty} ──`));
      lastDiff = p.difficulty;
    }
    const mark = progress.solved[p.number] ? green("✔") : dim("·");
    const tests = p.kind === "sql" ? "sql" : `${(p.tests || []).length}t`;
    console.log(
      `${mark} ${String(p.number).padStart(4)}  ${p.title.slice(0, 52).padEnd(52)} ${dim(p.pattern.padEnd(32))} ${dim(tests)}`,
    );
  }
  console.log(`\n${list.length} problems`);
}

function cmdPatterns(progress) {
  const map = {};
  for (const p of Object.values(PROBLEMS)) {
    const m = (map[p.pattern] = map[p.pattern] || { total: 0, solved: 0 });
    m.total++;
    if (progress.solved[p.number]) m.solved++;
  }
  for (const [name, m] of Object.entries(map).sort(
    (a, b) => b[1].total - a[1].total,
  )) {
    const bar = "█"
      .repeat(Math.round((m.solved / m.total) * 10))
      .padEnd(10, "░");
    console.log(`${name.padEnd(34)} ${bar} ${m.solved}/${m.total}`);
  }
}

function cmdStatus(progress) {
  const all = Object.values(PROBLEMS);
  const solved = all.filter((p) => progress.solved[p.number]);
  console.log(bold("Progress"));
  for (const d of DIFFS) {
    const t = all.filter((p) => p.difficulty === d),
      s = t.filter((p) => progress.solved[p.number]);
    console.log(
      `  ${diffColor(d)} ${String(s.length).padStart(3)} / ${t.length}`,
    );
  }
  console.log(
    `  ${bold("Total ")} ${String(solved.length).padStart(3)} / ${all.length}`,
  );
  console.log(`  Streak: ${bold(streak(progress))} day(s)`);
  const t = today();
  console.log(
    `  Solved today: ${solved.filter((p) => progress.solved[p.number] === t).length}`,
  );
}

function main() {
  const [cmdRaw, ...rest] = process.argv.slice(2);
  if (cmdRaw === "__child") {
    const out = runProblem(Number(rest[0]));
    process.stdout.write("\n" + RESULT_TAG + JSON.stringify(out));
    return;
  }
  const { nums, opts } = parseArgs(rest);
  const timeoutMs = Number(opts.timeout) || 10000;
  const progress = loadProgress();
  const cmd = cmdRaw && /^\d+$/.test(cmdRaw) ? "run" : cmdRaw;
  if (cmdRaw && /^\d+$/.test(cmdRaw)) nums.unshift(Number(cmdRaw));

  switch (cmd) {
    case "daily": {
      const picks = pickDaily(opts, progress);
      console.log(bold(`Today's practice (${today()})`) + "\n");
      runMany(picks, timeoutMs, progress);
      console.log(
        dim(
          "Open this file and search for #<number> to find a problem. `node practice.js desc <n>` prints the statement.",
        ),
      );
      break;
    }
    case "run":
      runMany(nums, timeoutMs, progress);
      break;
    case "all": {
      const list = filterProblems(opts).filter(runnable);
      const attempted = list
        .filter((p) => !isStub(p.solve))
        .map((p) => p.number);
      if (!attempted.length)
        return console.log(
          "Nothing attempted yet. Try: node practice.js daily",
        );
      runMany(attempted, timeoutMs, progress);
      break;
    }
    case "desc":
      nums.forEach(cmdDesc);
      break;
    case "list":
      cmdList(opts, progress);
      break;
    case "patterns":
      cmdPatterns(progress);
      break;
    case "status":
      cmdStatus(progress);
      break;
    case "done":
      nums.forEach((n) => {
        progress.solved[n] = today();
      });
      saveProgress(progress);
      console.log("Marked solved: " + nums.join(", "));
      break;
    case "undone":
      nums.forEach((n) => {
        delete progress.solved[n];
      });
      saveProgress(progress);
      console.log("Cleared: " + nums.join(", "));
      break;
    default: {
      const lines = fs
        .readFileSync(__filename, "utf8")
        .split("\n")
        .slice(0, 60);
      const a = lines.findIndex((l) => l.includes("HOW TO USE"));
      const b = lines.findIndex((l) => l.includes("Notes"));
      console.log(
        lines
          .slice(a, b)
          .map((l) => l.replace(/^ \*/, "").replace(/^  /, ""))
          .join("\n"),
      );
    }
  }
}

main();
