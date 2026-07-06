#!/usr/bin/env node
/**
 * LeetCode Easy — practice file
 *
 * Implement each function below, then run tests:
 *   node compiled/easy.js
 *   node compiled/easy.js 1-two-sum
 *   node compiled/easy.js twoSum
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
 * 1-two-sum
 *
 * Two Sum
 * https://leetcode.com/problems/two-sum
 * 
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * 
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * 
 * 	- `2 <= nums.length <= 10^4`
 * 
 * 	- `-10^9 <= nums[i] <= 10^9`
 * 
 * 	- `-10^9 <= target <= 10^9`
 * 
 * 	- Only one valid answer exists.
 * 
 * Follow-up: Can you come up with an algorithm that is less than `O(n^2)` time complexity?
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

globalThis.twoSum = function(nums, target) {
  // Write your solution here
};

/*
 * 9-palindrome-number
 *
 * Palindrome Number
 * https://leetcode.com/problems/palindrome-number
 * 
 * Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * Example 2:
 * 
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * 
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * Constraints:
 * 
 * 	- `-2^31 <= x <= 2^31 - 1`
 * 
 * Follow up: Could you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */

globalThis.isPalindrome = function(x) {
  // Write your solution here
};

/*
 * 13-roman-to-integer
 *
 * Roman to Integer
 * https://leetcode.com/problems/roman-to-integer
 * 
 * Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.
 * 
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:
 * 
 * 	- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
 * 
 * 	- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
 * 
 * 	- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.
 * 
 * Given a roman numeral, convert it to an integer.
 * 
 * Example 1:
 * 
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * 
 * Example 2:
 * 
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * Example 3:
 * 
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 15`
 * 
 * 	- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
 * 
 * 	- It is guaranteed that `s` is a valid roman numeral in the range `[1, 3999]`.
 */

/**
 * @param {string} s
 * @return {number}
 */

globalThis.romanToInt = function(s) {
  // Write your solution here
};

/*
 * 14-longest-common-prefix
 *
 * Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string `""`.
 * 
 * Example 1:
 * 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 * 
 * 	- `1 <= strs.length <= 200`
 * 
 * 	- `0 <= strs[i].length <= 200`
 * 
 * 	- `strs[i]` consists of only lowercase English letters if it is non-empty.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

globalThis.longestCommonPrefix = function(strs) {
  // Write your solution here
};

/*
 * 20-valid-parentheses
 *
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses
 * 
 * Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 	- Open brackets must be closed by the same type of brackets.
 * 
 * 	- Open brackets must be closed in the correct order.
 * 
 * 	- Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * 
 * Input: s = "()"
 * 
 * Output: true
 * 
 * Example 2:
 * 
 * Input: s = "()[]{}"
 * 
 * Output: true
 * 
 * Example 3:
 * 
 * Input: s = "(]"
 * 
 * Output: false
 * 
 * Example 4:
 * 
 * Input: s = "([])"
 * 
 * Output: true
 * 
 * Example 5:
 * 
 * Input: s = "([)]"
 * 
 * Output: false
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 10^4`
 * 
 * 	- `s` consists of parentheses only `'()[]{}'`.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

globalThis.isValid = function(s) {
  // Write your solution here
};

/*
 * 21-merge-two-sorted-lists
 *
 * Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists
 * 
 * You are given the heads of two sorted linked lists `list1` and `list2`.
 * 
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 * 
 * Example 1:
 * 
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Example 2:
 * 
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * Example 3:
 * 
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * 
 * Constraints:
 * 
 * 	- The number of nodes in both lists is in the range `[0, 50]`.
 * 
 * 	- `-100 <= Node.val <= 100`
 * 
 * 	- Both `list1` and `list2` are sorted in non-decreasing order.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

globalThis.mergeTwoLists = function(list1, list2) {
  // Write your solution here
};

/*
 * 26-remove-duplicates-from-sorted-array
 *
 * Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 * 
 * Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 * 
 * Consider the number of unique elements in `nums` to be `k​​​​​​​`​​​​​​​. After removing duplicates, return the number of unique elements `k`.
 * 
 * The first `k` elements of `nums` should contain the unique numbers in sorted order. The remaining elements beyond index `k - 1` can be ignored.
 * 
 * Custom Judge:
 * 
 * The judge will test your solution with the following code:
 * 
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 * 
 * int k = removeDuplicates(nums); // Calls your implementation
 * 
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 *     assert nums[i] == expectedNums[i];
 * }
 * 
 * If all assertions pass, then your solution will be accepted.
 * 
 * Example 1:
 * 
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 * Example 2:
 * 
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 3 * 10^4`
 * 
 * 	- `-100 <= nums[i] <= 100`
 * 
 * 	- `nums` is sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.removeDuplicates = function(nums) {
  // Write your solution here
};

/*
 * 27-remove-element
 *
 * Remove Element
 * https://leetcode.com/problems/remove-element
 * 
 * Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.
 * 
 * Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:
 * 
 * 	- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
 * 
 * 	- Return `k`.
 * 
 * Custom Judge:
 * 
 * The judge will test your solution with the following code:
 * 
 * int[] nums = [...]; // Input array
 * int val = ...; // Value to remove
 * int[] expectedNums = [...]; // The expected answer with correct length.
 *                             // It is sorted with no values equaling val.
 * 
 * int k = removeElement(nums, val); // Calls your implementation
 * 
 * assert k == expectedNums.length;
 * sort(nums, 0, k); // Sort the first k elements of nums
 * for (int i = 0; i < actualLength; i++) {
 *     assert nums[i] == expectedNums[i];
 * }
 * 
 * If all assertions pass, then your solution will be accepted.
 * 
 * Example 1:
 * 
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 * Example 2:
 * 
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
 * Note that the five elements can be returned in any order.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 * Constraints:
 * 
 * 	- `0 <= nums.length <= 100`
 * 
 * 	- `0 <= nums[i] <= 50`
 * 
 * 	- `0 <= val <= 100`
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

globalThis.removeElement = function(nums, val) {
  // Write your solution here
};

/*
 * 28-find-the-index-of-the-first-occurrence-in-a-string
 *
 * Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 * 
 * Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.
 * 
 * Example 1:
 * 
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * 
 * Example 2:
 * 
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * 
 * Constraints:
 * 
 * 	- `1 <= haystack.length, needle.length <= 10^4`
 * 
 * 	- `haystack` and `needle` consist of only lowercase English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

globalThis.strStr = function(haystack, needle) {
  // Write your solution here
};

/*
 * 35-search-insert-position
 *
 * Search Insert Position
 * https://leetcode.com/problems/search-insert-position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with `O(log n)` runtime complexity.
 * 
 * Example 1:
 * 
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * 
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * 
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 10^4`
 * 
 * 	- `-10^4 <= nums[i] <= 10^4`
 * 
 * 	- `nums` contains distinct values sorted in ascending order.
 * 
 * 	- `-10^4 <= target <= 10^4`
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

globalThis.searchInsert = function(nums, target) {
  // Write your solution here
};

/*
 * 58-length-of-last-word
 *
 * Length of Last Word
 * https://leetcode.com/problems/length-of-last-word
 * 
 * Given a string `s` consisting of words and spaces, return the length of the last word in the string.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * Example 1:
 * 
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 * 
 * Example 2:
 * 
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 * 
 * Example 3:
 * 
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 10^4`
 * 
 * 	- `s` consists of only English letters and spaces `' '`.
 * 
 * 	- There will be at least one word in `s`.
 */

/**
 * @param {string} s
 * @return {number}
 */

globalThis.lengthOfLastWord = function(s) {
  // Write your solution here
};

/*
 * 66-plus-one
 *
 * Plus One
 * https://leetcode.com/problems/plus-one
 * 
 * You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i^th` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Example 1:
 * 
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 * 
 * Example 2:
 * 
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 * 
 * Example 3:
 * 
 * Input: digits = [9]
 * Output: [1,0]
 * Explanation: The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1,0].
 * 
 * Constraints:
 * 
 * 	- `1 <= digits.length <= 100`
 * 
 * 	- `0 <= digits[i] <= 9`
 * 
 * 	- `digits` does not contain any leading `0`'s.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

globalThis.plusOne = function(digits) {
  // Write your solution here
};

/*
 * 67-add-binary
 *
 * Add Binary
 * https://leetcode.com/problems/add-binary
 * 
 * Given two binary strings `a` and `b`, return their sum as a binary string.
 * 
 * Example 1:
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * Constraints:
 * 
 * 	- `1 <= a.length, b.length <= 10^4`
 * 
 * 	- `a` and `b` consist only of `'0'` or `'1'` characters.
 * 
 * 	- Each string does not contain leading zeros except for the zero itself.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

globalThis.addBinary = function(a, b) {
  // Write your solution here
};

/*
 * 69-sqrtx
 *
 * Sqrt(x)
 * https://leetcode.com/problems/sqrtx
 * 
 * Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.
 * 
 * You must not use any built-in exponent function or operator.
 * 
 * 	- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.
 * 
 * Example 1:
 * 
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 * 
 * Example 2:
 * 
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 * 
 * Constraints:
 * 
 * 	- `0 <= x <= 2^31 - 1`
 */

/**
 * @param {number} x
 * @return {number}
 */

globalThis.mySqrt = function(x) {
  // Write your solution here
};

/*
 * 70-climbing-stairs
 *
 * Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs
 * 
 * You are climbing a staircase. It takes `n` steps to reach the top.
 * 
 * Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * 
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * 
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Constraints:
 * 
 * 	- `1 <= n <= 45`
 */

/**
 * @param {number} n
 * @return {number}
 */

globalThis.climbStairs = function(n) {
  // Write your solution here
};

/*
 * 125-valid-palindrome
 *
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 * 
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 * 
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 2 * 10^5`
 * 
 * 	- `s` consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

globalThis.isPalindrome = function(s) {
  // Write your solution here
};

/*
 * 136-single-number
 *
 * Single Number
 * https://leetcode.com/problems/single-number
 * 
 * Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * Example 1:
 * 
 * Input: nums = [2,2,1]
 * 
 * Output: 1
 * 
 * Example 2:
 * 
 * Input: nums = [4,1,2,1,2]
 * 
 * Output: 4
 * 
 * Example 3:
 * 
 * Input: nums = [1]
 * 
 * Output: 1
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 3 * 10^4`
 * 
 * 	- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
 * 
 * 	- Each element in the array appears twice except for one element which appears only once.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.singleNumber = function(nums) {
  // Write your solution here
};

/*
 * 169-majority-element
 *
 * Majority Element
 * https://leetcode.com/problems/majority-element
 * 
 * Given an array `nums` of size `n`, return the majority element.
 * 
 * The majority element is the element that appears more than `&lfloor;n / 2&rfloor;` times. You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * 
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * Constraints:
 * 
 * 	- `n == nums.length`
 * 
 * 	- `1 <= n <= 5 * 10^4`
 * 
 * 	- `-10^9 <= nums[i] <= 10^9`
 * 
 * 	- The input is generated such that a majority element will exist in the array.
 * 
 * Follow-up: Could you solve the problem in linear time and in `O(1)` space?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.majorityElement = function(nums) {
  // Write your solution here
};

/*
 * 217-contains-duplicate
 *
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate
 * 
 * Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1]
 * 
 * Output: true
 * 
 * Explanation:
 * 
 * The element 1 occurs at the indices 0 and 3.
 * 
 * Example 2:
 * 
 * Input: nums = [1,2,3,4]
 * 
 * Output: false
 * 
 * Explanation:
 * 
 * All elements are distinct.
 * 
 * Example 3:
 * 
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * 
 * Output: true
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 10^5`
 * 
 * 	- `-10^9 <= nums[i] <= 10^9`
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

globalThis.containsDuplicate = function(nums) {
  // Write your solution here
};

/*
 * 219-contains-duplicate-ii
 *
 * Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii
 * 
 * Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * Example 2:
 * 
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * 
 * Example 3:
 * 
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 10^5`
 * 
 * 	- `-10^9 <= nums[i] <= 10^9`
 * 
 * 	- `0 <= k <= 10^5`
 */

// 219-contains-duplicate-ii — implement your solution below
// globalThis.myFunction = function(...) {
//   // your code
// };

/*
 * 242-valid-anagram
 *
 * Valid Anagram
 * https://leetcode.com/problems/valid-anagram
 * 
 * Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: s = "anagram", t = "nagaram"
 * 
 * Output: true
 * 
 * Example 2:
 * 
 * Input: s = "rat", t = "car"
 * 
 * Output: false
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length, t.length <= 5 * 10^4`
 * 
 * 	- `s` and `t` consist of lowercase English letters.
 * 
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

globalThis.isAnagram = function(s, t) {
  // Write your solution here
};

/*
 * 283-move-zeroes
 *
 * Move Zeroes
 * https://leetcode.com/problems/move-zeroes
 * 
 * Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * Example 1:
 * 
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * 
 * Input: nums = [0]
 * Output: [0]
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 10^4`
 * 
 * 	- `-2^31 <= nums[i] <= 2^31 - 1`
 * 
 * Follow up: Could you minimize the total number of operations done?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

globalThis.moveZeroes = function(nums) {
  // Write your solution here
};

/*
 * 344-reverse-string
 *
 * Reverse String
 * https://leetcode.com/problems/reverse-string
 * 
 * Write a function that reverses a string. The input string is given as an array of characters `s`.
 * 
 * You must do this by modifying the input array in-place with `O(1)` extra memory.
 * 
 * Example 1:
 * 
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * Example 2:
 * 
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 10^5`
 * 
 * 	- `s[i]` is a printable ascii character.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

globalThis.reverseString = function(s) {
  // Write your solution here
};

/*
 * 392-is-subsequence
 *
 * Is Subsequence
 * https://leetcode.com/problems/is-subsequence
 * 
 * Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.
 * 
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).
 * 
 * Example 1:
 * 
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * 
 * Example 2:
 * 
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 * 
 * Constraints:
 * 
 * 	- `0 <= s.length <= 100`
 * 
 * 	- `0 <= t.length <= 10^4`
 * 
 * 	- `s` and `t` consist only of lowercase English letters.
 * 
 * Follow up: Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10^9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

globalThis.isSubsequence = function(s, t) {
  // Write your solution here
};

/*
 * 415-add-strings
 *
 * Add Strings
 * https://leetcode.com/problems/add-strings
 * 
 * Given two non-negative integers, `num1` and `num2` represented as string, return the sum of `num1` and `num2` as a string.
 * 
 * You must solve the problem without using any built-in library for handling large integers (such as `BigInteger`). You must also not convert the inputs to integers directly.
 * 
 * Example 1:
 * 
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 * 
 * Example 2:
 * 
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 * 
 * Example 3:
 * 
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 * 
 * Constraints:
 * 
 * 	- `1 <= num1.length, num2.length <= 10^4`
 * 
 * 	- `num1` and `num2` consist of only digits.
 * 
 * 	- `num1` and `num2` don't have any leading zeros except for the zero itself.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

globalThis.addStrings = function(num1, num2) {
  // Write your solution here
};

/*
 * 448-find-all-numbers-disappeared-in-an-array
 *
 * Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 * 
 * Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.
 * 
 * Example 1:
 * 
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * 
 * Example 2:
 * 
 * Input: nums = [1,1]
 * Output: [2]
 * 
 * Constraints:
 * 
 * 	- `n == nums.length`
 * 
 * 	- `1 <= n <= 10^5`
 * 
 * 	- `1 <= nums[i] <= n`
 * 
 * Follow up: Could you do it without extra space and in `O(n)` runtime? You may assume the returned list does not count as extra space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

globalThis.findDisappearedNumbers = function(nums) {
  // Write your solution here
};

/*
 * 459-repeated-substring-pattern
 *
 * Repeated Substring Pattern
 * https://leetcode.com/problems/repeated-substring-pattern
 * 
 * Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 * 
 * Example 1:
 * 
 * Input: s = "abab"
 * Output: true
 * Explanation: It is the substring "ab" twice.
 * 
 * Example 2:
 * 
 * Input: s = "aba"
 * Output: false
 * 
 * Example 3:
 * 
 * Input: s = "abcabcabcabc"
 * Output: true
 * Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 10^4`
 * 
 * 	- `s` consists of lowercase English letters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

globalThis.repeatedSubstringPattern = function(s) {
  // Write your solution here
};

/*
 * 485-max-consecutive-ones
 *
 * Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones
 * 
 * Given a binary array `nums`, return the maximum number of consecutive `1`'s in the array.
 * 
 * Example 1:
 * 
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 * 
 * Example 2:
 * 
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 10^5`
 * 
 * 	- `nums[i]` is either `0` or `1`.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.findMaxConsecutiveOnes = function(nums) {
  // Write your solution here
};

/*
 * 645-set-mismatch
 *
 * Set Mismatch
 * https://leetcode.com/problems/set-mismatch
 * 
 * You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in repetition of one number and loss of another number.
 * 
 * You are given an integer array `nums` representing the data status of this set after the error.
 * 
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * 
 * Example 2:
 * 
 * Input: nums = [1,1]
 * Output: [1,2]
 * 
 * Constraints:
 * 
 * 	- `2 <= nums.length <= 10^4`
 * 
 * 	- `1 <= nums[i] <= 10^4`
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

globalThis.findErrorNums = function(nums) {
  // Write your solution here
};

/*
 * 1444-number-of-steps-to-reduce-a-number-to-zero
 *
 * Number of Steps to Reduce a Number to Zero
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
 * 
 * Given an integer `num`, return the number of steps to reduce it to zero.
 * 
 * In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.
 * 
 * Example 1:
 * 
 * Input: num = 14
 * Output: 6
 * Explanation:
 * Step 1) 14 is even; divide by 2 and obtain 7.
 * Step 2) 7 is odd; subtract 1 and obtain 6.
 * Step 3) 6 is even; divide by 2 and obtain 3.
 * Step 4) 3 is odd; subtract 1 and obtain 2.
 * Step 5) 2 is even; divide by 2 and obtain 1.
 * Step 6) 1 is odd; subtract 1 and obtain 0.
 * 
 * Example 2:
 * 
 * Input: num = 8
 * Output: 4
 * Explanation:
 * Step 1) 8 is even; divide by 2 and obtain 4.
 * Step 2) 4 is even; divide by 2 and obtain 2.
 * Step 3) 2 is even; divide by 2 and obtain 1.
 * Step 4) 1 is odd; subtract 1 and obtain 0.
 * 
 * Example 3:
 * 
 * Input: num = 123
 * Output: 12
 * 
 * Constraints:
 * 
 * 	- `0 <= num <= 10^6`
 */

/**
 * @param {number} num
 * @return {number}
 */

globalThis.numberOfSteps = function(num) {
  // Write your solution here
};

/*
 * 1482-how-many-numbers-are-smaller-than-the-current-number
 *
 * How Many Numbers Are Smaller Than the Current Number
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
 * 
 * Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` and `nums[j] < nums[i]`.
 * 
 * Return the answer in an array.
 * 
 * Example 1:
 * 
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 * Explanation:
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1).
 * For nums[3]=2 there exist one smaller number than it (1).
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 * 
 * Example 2:
 * 
 * Input: nums = [6,5,4,8]
 * Output: [2,1,0,3]
 * 
 * Example 3:
 * 
 * Input: nums = [7,7,7,7]
 * Output: [0,0,0,0]
 * 
 * Constraints:
 * 
 * 	- `2 <= nums.length <= 500`
 * 
 * 	- `0 <= nums[i] <= 100`
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

globalThis.smallerNumbersThanCurrent = function(nums) {
  // Write your solution here
};

/*
 * 1570-final-prices-with-a-special-discount-in-a-shop
 *
 * Final Prices With a Special Discount in a Shop
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
 * 
 * You are given an integer array `prices` where `prices[i]` is the price of the `i^th` item in a shop.
 * 
 * There is a special discount for items in the shop. If you buy the `i^th` item, then you will receive a discount equivalent to `prices[j]` where `j` is the minimum index such that `j > i` and `prices[j] <= prices[i]`. Otherwise, you will not receive any discount at all.
 * 
 * Return an integer array `answer` where `answer[i]` is the final price you will pay for the `i^th` item of the shop, considering the special discount.
 * 
 * Example 1:
 * 
 * Input: prices = [8,4,6,2,3]
 * Output: [4,2,4,2,3]
 * Explanation:
 * For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
 * For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
 * For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
 * For items 3 and 4 you will not receive any discount at all.
 * 
 * Example 2:
 * 
 * Input: prices = [1,2,3,4,5]
 * Output: [1,2,3,4,5]
 * Explanation: In this case, for all items, you will not receive any discount at all.
 * 
 * Example 3:
 * 
 * Input: prices = [10,1,1,6]
 * Output: [9,0,1,6]
 * 
 * Constraints:
 * 
 * 	- `1 <= prices.length <= 500`
 * 
 * 	- `1 <= prices[i] <= 1000`
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */

globalThis.finalPrices = function(prices) {
  // Write your solution here
};

/*
 * 1580-shuffle-the-array
 *
 * Shuffle the Array
 * https://leetcode.com/problems/shuffle-the-array
 * 
 * Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.
 * 
 * Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.
 * 
 * Example 1:
 * 
 * Input: nums = [2,5,1,3,4,7], n = 3
 * Output: [2,3,5,4,1,7]
 * Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
 * 
 * Example 2:
 * 
 * Input: nums = [1,2,3,4,4,3,2,1], n = 4
 * Output: [1,4,2,3,3,2,4,1]
 * 
 * Example 3:
 * 
 * Input: nums = [1,1,2,2], n = 2
 * Output: [1,2,1,2]
 * 
 * Constraints:
 * 
 * 	- `1 <= n <= 500`
 * 
 * 	- `nums.length == 2n`
 * 
 * 	- `1 <= nums[i] <= 10^3`
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

globalThis.shuffle = function(nums, n) {
  // Write your solution here
};

/*
 * 1603-running-sum-of-1d-array
 *
 * Running Sum of 1d Array
 * https://leetcode.com/problems/running-sum-of-1d-array
 * 
 * Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]...nums[i])`.
 * 
 * Return the running sum of `nums`.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 * 
 * Example 2:
 * 
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 * 
 * Example 3:
 * 
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 1000`
 * 
 * 	- `-10^6 <= nums[i] <= 10^6`
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

globalThis.runningSum = function(nums) {
  // Write your solution here
};

/*
 * 1791-richest-customer-wealth
 *
 * Richest Customer Wealth
 * https://leetcode.com/problems/richest-customer-wealth
 * 
 * You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i​​​​​^​​​​​​th​​​​` customer has in the `j​​​​​^​​​​​​th`​​​​ bank. Return the wealth that the richest customer has.
 * 
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * 
 * Example 1:
 * 
 * Input: accounts = [[1,2,3],[3,2,1]]
 * Output: 6
 * Explanation:
 * `1st customer has wealth = 1 + 2 + 3 = 6
 * ``2nd customer has wealth = 3 + 2 + 1 = 6
 * `Both customers are considered the richest with a wealth of 6 each, so return 6.
 * 
 * Example 2:
 * 
 * Input: accounts = [[1,5],[7,3],[3,5]]
 * Output: 10
 * Explanation:
 * 1st customer has wealth = 6
 * 2nd customer has wealth = 10
 * 3rd customer has wealth = 8
 * The 2nd customer is the richest with a wealth of 10.
 * 
 * Example 3:
 * 
 * Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
 * Output: 17
 * 
 * Constraints:
 * 
 * 	- `m == accounts.length`
 * 
 * 	- `n == accounts[i].length`
 * 
 * 	- `1 <= m, n <= 50`
 * 
 * 	- `1 <= accounts[i][j] <= 100`
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */

globalThis.maximumWealth = function(accounts) {
  // Write your solution here
};

/*
 * 1960-check-if-the-sentence-is-pangram
 *
 * Check if the Sentence Is Pangram
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram
 * 
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * 
 * Given a string `sentence` containing only lowercase English letters, return `true` if `sentence` is a pangram, or `false` otherwise.
 * 
 * Example 1:
 * 
 * Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
 * Output: true
 * Explanation: sentence contains at least one of every letter of the English alphabet.
 * 
 * Example 2:
 * 
 * Input: sentence = "leetcode"
 * Output: false
 * 
 * Constraints:
 * 
 * 	- `1 <= sentence.length <= 1000`
 * 
 * 	- `sentence` consists of lowercase English letters.
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */

globalThis.checkIfPangram = function(sentence) {
  // Write your solution here
};

/*
 * 2058-concatenation-of-array
 *
 * Concatenation of Array
 * https://leetcode.com/problems/concatenation-of-array
 * 
 * Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` (0-indexed).
 * 
 * Specifically, `ans` is the concatenation of two `nums` arrays.
 * 
 * Return the array `ans`.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * - ans = [1,2,1,1,2,1]
 * 
 * Example 2:
 * 
 * Input: nums = [1,3,2,1]
 * Output: [1,3,2,1,1,3,2,1]
 * Explanation: The array ans is formed as follows:
 * - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
 * - ans = [1,3,2,1,1,3,2,1]
 * 
 * Constraints:
 * 
 * 	- `n == nums.length`
 * 
 * 	- `1 <= n <= 1000`
 * 
 * 	- `1 <= nums[i] <= 1000`
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

globalThis.getConcatenation = function(nums) {
  // Write your solution here
};

/*
 * 2099-number-of-strings-that-appear-as-substrings-in-word
 *
 * Number of Strings That Appear as Substrings in Word
 * https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word
 * 
 * Given an array of strings `patterns` and a string `word`, return the number of strings in `patterns` that exist as a substring in `word`.
 * 
 * A substring is a contiguous sequence of characters within a string.
 * 
 * Example 1:
 * 
 * Input: patterns = ["a","abc","bc","d"], word = "abc"
 * Output: 3
 * Explanation:
 * - "a" appears as a substring in "abc".
 * - "abc" appears as a substring in "abc".
 * - "bc" appears as a substring in "abc".
 * - "d" does not appear as a substring in "abc".
 * 3 of the strings in patterns appear as a substring in word.
 * 
 * Example 2:
 * 
 * Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
 * Output: 2
 * Explanation:
 * - "a" appears as a substring in "aaaaabbbbb".
 * - "b" appears as a substring in "aaaaabbbbb".
 * - "c" does not appear as a substring in "aaaaabbbbb".
 * 2 of the strings in patterns appear as a substring in word.
 * 
 * Example 3:
 * 
 * Input: patterns = ["a","a","a"], word = "ab"
 * Output: 3
 * Explanation: Each of the patterns appears as a substring in word "ab".
 * 
 * Constraints:
 * 
 * 	- `1 <= patterns.length <= 100`
 * 
 * 	- `1 <= patterns[i].length <= 100`
 * 
 * 	- `1 <= word.length <= 100`
 * 
 * 	- `patterns[i]` and `word` consist of lowercase English letters.
 */

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */

globalThis.numOfStrings = function(patterns, word) {
  // Write your solution here
};

/*
 * 3236-smallest-missing-integer-greater-than-sequential-prefix-sum
 *
 * Smallest Missing Integer Greater Than Sequential Prefix Sum
 * https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum
 * 
 * You are given a 0-indexed array of integers `nums`.
 * 
 * A prefix `nums[0..i]` is sequential if, for all `1 <= j <= i`, `nums[j] = nums[j - 1] + 1`. In particular, the prefix consisting only of `nums[0]` is sequential.
 * 
 * Return the smallest integer `x` missing from `nums` such that `x` is greater than or equal to the sum of the longest sequential prefix.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,2,5]
 * Output: 6
 * Explanation: The longest sequential prefix of nums is [1,2,3] with a sum of 6. 6 is not in the array, therefore 6 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.
 * 
 * Example 2:
 * 
 * Input: nums = [3,4,5,1,12,14,13]
 * Output: 15
 * Explanation: The longest sequential prefix of nums is [3,4,5] with a sum of 12. 12, 13, and 14 belong to the array while 15 does not. Therefore 15 is the smallest missing integer greater than or equal to the sum of the longest sequential prefix.
 * 
 * Constraints:
 * 
 * 	- `1 <= nums.length <= 50`
 * 
 * 	- `1 <= nums[i] <= 50`
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

globalThis.missingInteger = function(nums) {
  // Write your solution here
};

// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = [
  {
    "id": "1-two-sum",
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
          0,
          1
        ]
      },
      {
        "args": [
          [
            3,
            2,
            4
          ],
          6
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            3,
            3
          ],
          6
        ],
        "expected": [
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "9-palindrome-number",
    "fn": "isPalindrome",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          121
        ],
        "expected": true
      },
      {
        "args": [
          -121
        ],
        "expected": false
      },
      {
        "args": [
          10
        ],
        "expected": false
      }
    ]
  },
  {
    "id": "13-roman-to-integer",
    "fn": "romanToInt",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "14-longest-common-prefix",
    "fn": "longestCommonPrefix",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "20-valid-parentheses",
    "fn": "isValid",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "21-merge-two-sorted-lists",
    "fn": "mergeTwoLists",
    "usesListNode": true,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            4
          ],
          [
            1,
            3,
            4
          ]
        ],
        "expected": [
          1,
          1,
          2,
          3,
          4,
          4
        ]
      },
      {
        "args": [
          [],
          []
        ],
        "expected": []
      },
      {
        "args": [
          [],
          [
            0
          ]
        ],
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "id": "26-remove-duplicates-from-sorted-array",
    "fn": "removeDuplicates",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            1,
            2
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            0,
            1,
            1,
            1,
            2,
            2,
            3,
            3,
            4
          ]
        ],
        "expected": 5
      }
    ]
  },
  {
    "id": "27-remove-element",
    "fn": "removeElement",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            3,
            2,
            2,
            3
          ],
          3
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            1,
            2,
            2,
            3,
            0,
            4,
            2
          ],
          2
        ],
        "expected": 5
      }
    ]
  },
  {
    "id": "28-find-the-index-of-the-first-occurrence-in-a-string",
    "fn": "strStr",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "35-search-insert-position",
    "fn": "searchInsert",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          5
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          2
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          7
        ],
        "expected": 4
      }
    ]
  },
  {
    "id": "58-length-of-last-word",
    "fn": "lengthOfLastWord",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "66-plus-one",
    "fn": "plusOne",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          1,
          2,
          4
        ]
      },
      {
        "args": [
          [
            4,
            3,
            2,
            1
          ]
        ],
        "expected": [
          4,
          3,
          2,
          2
        ]
      },
      {
        "args": [
          [
            9
          ]
        ],
        "expected": [
          1,
          0
        ]
      }
    ]
  },
  {
    "id": "67-add-binary",
    "fn": "addBinary",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          "11",
          "1"
        ],
        "expected": "100"
      },
      {
        "args": [
          "1010",
          "1011"
        ],
        "expected": "10101"
      }
    ]
  },
  {
    "id": "69-sqrtx",
    "fn": "mySqrt",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          4
        ],
        "expected": 2
      },
      {
        "args": [
          8
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "70-climbing-stairs",
    "fn": "climbStairs",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          2
        ],
        "expected": 2
      },
      {
        "args": [
          3
        ],
        "expected": 3
      }
    ]
  },
  {
    "id": "125-valid-palindrome",
    "fn": "isPalindrome",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "136-single-number",
    "fn": "singleNumber",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "169-majority-element",
    "fn": "majorityElement",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            3,
            2,
            3
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            2,
            2,
            1,
            1,
            1,
            2,
            2
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "217-contains-duplicate",
    "fn": "containsDuplicate",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "219-contains-duplicate-ii",
    "fn": null,
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "242-valid-anagram",
    "fn": "isAnagram",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "283-move-zeroes",
    "fn": "moveZeroes",
    "usesListNode": false,
    "mutatesInput": true,
    "cases": [
      {
        "args": [
          [
            0,
            1,
            0,
            3,
            12
          ]
        ],
        "expected": [
          1,
          3,
          12,
          0,
          0
        ]
      },
      {
        "args": [
          [
            0
          ]
        ],
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "id": "344-reverse-string",
    "fn": "reverseString",
    "usesListNode": false,
    "mutatesInput": true,
    "cases": [
      {
        "args": [
          [
            "h",
            "e",
            "l",
            "l",
            "o"
          ]
        ],
        "expected": [
          "o",
          "l",
          "l",
          "e",
          "h"
        ]
      },
      {
        "args": [
          [
            "H",
            "a",
            "n",
            "n",
            "a",
            "h"
          ]
        ],
        "expected": [
          "h",
          "a",
          "n",
          "n",
          "a",
          "H"
        ]
      }
    ]
  },
  {
    "id": "392-is-subsequence",
    "fn": "isSubsequence",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          "abc",
          "ahbgdc"
        ],
        "expected": true
      },
      {
        "args": [
          "axc",
          "ahbgdc"
        ],
        "expected": false
      }
    ]
  },
  {
    "id": "415-add-strings",
    "fn": "addStrings",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "448-find-all-numbers-disappeared-in-an-array",
    "fn": "findDisappearedNumbers",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            4,
            3,
            2,
            7,
            8,
            2,
            3,
            1
          ]
        ],
        "expected": [
          5,
          6
        ]
      },
      {
        "args": [
          [
            1,
            1
          ]
        ],
        "expected": [
          2
        ]
      }
    ]
  },
  {
    "id": "459-repeated-substring-pattern",
    "fn": "repeatedSubstringPattern",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "485-max-consecutive-ones",
    "fn": "findMaxConsecutiveOnes",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            1,
            0,
            1,
            1,
            1
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            1,
            0,
            1,
            1,
            0,
            1
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "645-set-mismatch",
    "fn": "findErrorNums",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            2,
            4
          ]
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "args": [
          [
            1,
            1
          ]
        ],
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "1444-number-of-steps-to-reduce-a-number-to-zero",
    "fn": "numberOfSteps",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          14
        ],
        "expected": 6
      },
      {
        "args": [
          8
        ],
        "expected": 4
      },
      {
        "args": [
          123
        ],
        "expected": 12
      }
    ]
  },
  {
    "id": "1482-how-many-numbers-are-smaller-than-the-current-number",
    "fn": "smallerNumbersThanCurrent",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            8,
            1,
            2,
            2,
            3
          ]
        ],
        "expected": [
          4,
          0,
          1,
          1,
          3
        ]
      },
      {
        "args": [
          [
            6,
            5,
            4,
            8
          ]
        ],
        "expected": [
          2,
          1,
          0,
          3
        ]
      },
      {
        "args": [
          [
            7,
            7,
            7,
            7
          ]
        ],
        "expected": [
          0,
          0,
          0,
          0
        ]
      }
    ]
  },
  {
    "id": "1570-final-prices-with-a-special-discount-in-a-shop",
    "fn": "finalPrices",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            8,
            4,
            6,
            2,
            3
          ]
        ],
        "expected": [
          4,
          2,
          4,
          2,
          3
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            5
          ]
        ],
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "args": [
          [
            10,
            1,
            1,
            6
          ]
        ],
        "expected": [
          9,
          0,
          1,
          6
        ]
      }
    ]
  },
  {
    "id": "1580-shuffle-the-array",
    "fn": "shuffle",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            2,
            5,
            1,
            3,
            4,
            7
          ],
          3
        ],
        "expected": [
          2,
          3,
          5,
          4,
          1,
          7
        ]
      },
      {
        "args": [
          [
            1,
            2,
            3,
            4,
            4,
            3,
            2,
            1
          ],
          4
        ],
        "expected": [
          1,
          4,
          2,
          3,
          3,
          2,
          4,
          1
        ]
      },
      {
        "args": [
          [
            1,
            1,
            2,
            2
          ],
          2
        ],
        "expected": [
          1,
          2,
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "1603-running-sum-of-1d-array",
    "fn": "runningSum",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": [
          1,
          3,
          6,
          10
        ]
      },
      {
        "args": [
          [
            1,
            1,
            1,
            1,
            1
          ]
        ],
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "args": [
          [
            3,
            1,
            2,
            10,
            1
          ]
        ],
        "expected": [
          3,
          4,
          6,
          16,
          17
        ]
      }
    ]
  },
  {
    "id": "1791-richest-customer-wealth",
    "fn": "maximumWealth",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            [
              1,
              2,
              3
            ],
            [
              3,
              2,
              1
            ]
          ]
        ],
        "expected": 6
      },
      {
        "args": [
          [
            [
              1,
              5
            ],
            [
              7,
              3
            ],
            [
              3,
              5
            ]
          ]
        ],
        "expected": 10
      },
      {
        "args": [
          [
            [
              2,
              8,
              7
            ],
            [
              7,
              1,
              3
            ],
            [
              1,
              9,
              5
            ]
          ]
        ],
        "expected": 17
      }
    ]
  },
  {
    "id": "1960-check-if-the-sentence-is-pangram",
    "fn": "checkIfPangram",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "2058-concatenation-of-array",
    "fn": "getConcatenation",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            1
          ]
        ],
        "expected": [
          1,
          2,
          1,
          1,
          2,
          1
        ]
      },
      {
        "args": [
          [
            1,
            3,
            2,
            1
          ]
        ],
        "expected": [
          1,
          3,
          2,
          1,
          1,
          3,
          2,
          1
        ]
      }
    ]
  },
  {
    "id": "2099-number-of-strings-that-appear-as-substrings-in-word",
    "fn": "numOfStrings",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3236-smallest-missing-integer-greater-than-sequential-prefix-sum",
    "fn": "missingInteger",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            2,
            5
          ]
        ],
        "expected": 6
      },
      {
        "args": [
          [
            3,
            4,
            5,
            1,
            12,
            14,
            13
          ]
        ],
        "expected": 15
      }
    ]
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
