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
 * 460-lfu-cache
 *
 * LFU Cache
 * https://leetcode.com/problems/lfu-cache
 * 
 * Design and implement a data structure for a Least Frequently Used (LFU) cache.
 * 
 * Implement the `LFUCache` class:
 * 
 * 	- `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.
 * 
 * 	- `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`.
 * 
 * 	- `void put(int key, int value)` Update the value of the `key` if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used `key` would be invalidated.
 * 
 * To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.
 * 
 * When a key is first inserted into the cache, its use counter is set to `1` (due to the `put` operation). The use counter for a key in the cache is incremented either a `get` or `put` operation is called on it.
 * 
 * The functions get and put must each run in `O(1)` average time complexity.
 * 
 * Example 1:
 * 
 * Input
 * ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
 * Output
 * [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
 * 
 * Explanation
 * // cnt(x) = the use counter for key x
 * // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
 * LFUCache lfu = new LFUCache(2);
 * lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
 * lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
 * lfu.get(1);      // return 1
 *                  // cache=[1,2], cnt(2)=1, cnt(1)=2
 * lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
 *                  // cache=[3,1], cnt(3)=1, cnt(1)=2
 * lfu.get(2);      // return -1 (not found)
 * lfu.get(3);      // return 3
 *                  // cache=[3,1], cnt(3)=2, cnt(1)=2
 * lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
 *                  // cache=[4,3], cnt(4)=1, cnt(3)=2
 * lfu.get(1);      // return -1 (not found)
 * lfu.get(3);      // return 3
 *                  // cache=[3,4], cnt(4)=1, cnt(3)=3
 * lfu.get(4);      // return 4
 *                  // cache=[4,3], cnt(4)=2, cnt(3)=3
 * 
 * Constraints:
 * 
 * 	- `1 <= capacity <= 10^4`
 * 
 * 	- `0 <= key <= 10^5`
 * 
 * 	- `0 <= value <= 10^9`
 * 
 * 	- At most `2 * 10^5` calls will be made to `get` and `put`.
 */

/**
 * @param {number} capacity
 */

/**
 * @param {number} key
 * @return {number}
 */

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

globalThis.LFUCache = function (capacity) {
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
 * 1522-stone-game-iii
 *
 * Stone Game III
 * https://leetcode.com/problems/stone-game-iii
 * 
 * Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array `stoneValue`.
 * 
 * Alice and Bob take turns, with Alice starting first. On each player's turn, that player can take `1`, `2`, or `3` stones from the first remaining stones in the row.
 * 
 * The score of each player is the sum of the values of the stones taken. The score of each player is `0` initially.
 * 
 * The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken.
 * 
 * Assume Alice and Bob play optimally.
 * 
 * Return `"Alice"` if Alice will win, `"Bob"` if Bob will win, or `"Tie"` if they will end the game with the same score.
 * 
 * Example 1:
 * 
 * Input: stoneValue = [1,2,3,7]
 * Output: "Bob"
 * Explanation: Alice will always lose. Her best move will be to take three piles and the score become 6. Now the score of Bob is 7 and Bob wins.
 * 
 * Example 2:
 * 
 * Input: stoneValue = [1,2,3,-9]
 * Output: "Alice"
 * Explanation: Alice must choose all the three piles at the first move to win and leave Bob with negative score.
 * If Alice chooses one pile her score will be 1 and the next move Bob's score becomes 5. In the next move, Alice will take the pile with value = -9 and lose.
 * If Alice chooses two piles her score will be 3 and the next move Bob's score becomes 3. In the next move, Alice will take the pile with value = -9 and also lose.
 * Remember that both play optimally so here Alice will choose the scenario that makes her win.
 * 
 * Example 3:
 * 
 * Input: stoneValue = [1,2,3,6]
 * Output: "Tie"
 * Explanation: Alice cannot win this game. She can end the game in a draw if she decided to choose all the first three piles, otherwise she will lose.
 * 
 * Constraints:
 * 
 * 	- `1 <= stoneValue.length <= 5 * 10^4`
 * 
 * 	- `-1000 <= stoneValue[i] <= 1000`
 */

/**
 * @param {number[]} stoneValue
 * @return {string}
 */

globalThis.stoneGameIII = function(stoneValue) {
  // Write your solution here
};

/*
 * 1617-stone-game-iv
 *
 * Stone Game IV
 * https://leetcode.com/problems/stone-game-iv
 * 
 * Alice and Bob take turns playing a game, with Alice starting first.
 * 
 * Initially, there are `n` stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.
 * 
 * Also, if a player cannot make a move, he/she loses the game.
 * 
 * Given a positive integer `n`, return `true` if and only if Alice wins the game otherwise return `false`, assuming both players play optimally.
 * 
 * Example 1:
 * 
 * Input: n = 1
 * Output: true
 * Explanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.
 * 
 * Example 2:
 * 
 * Input: n = 2
 * Output: false
 * Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).
 * 
 * Example 3:
 * 
 * Input: n = 4
 * Output: true
 * Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).
 * 
 * Constraints:
 * 
 * 	- `1 <= n <= 10^5`
 */

// 1617-stone-game-iv — implement your solution below
// globalThis.myFunction = function(...) {
//   // your code
// };

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
 * 3635-smallest-divisible-digit-product-ii
 *
 * Smallest Divisible Digit Product II
 * https://leetcode.com/problems/smallest-divisible-digit-product-ii
 * 
 * You are given a string `num` which represents a positive integer, and an integer `t`.
 * 
 * A number is called zero-free if none of its digits are 0.
 * 
 * Return a string representing the smallest zero-free number greater than or equal to `num` such that the product of its digits is divisible by `t`. If no such number exists, return `"-1"`.
 * 
 * Example 1:
 * 
 * Input: num = "1234", t = 256
 * 
 * Output: "1488"
 * 
 * Explanation:
 * 
 * The smallest zero-free number that is greater than 1234 and has the product of its digits divisible by 256 is 1488, with the product of its digits equal to 256.
 * 
 * Example 2:
 * 
 * Input: num = "12355", t = 50
 * 
 * Output: "12355"
 * 
 * Explanation:
 * 
 * 12355 is already zero-free and has the product of its digits divisible by 50, with the product of its digits equal to 150.
 * 
 * Example 3:
 * 
 * Input: num = "11111", t = 26
 * 
 * Output: "-1"
 * 
 * Explanation:
 * 
 * No number greater than 11111 has the product of its digits divisible by 26.
 * 
 * Constraints:
 * 
 * 	- `2 <= num.length <= 2 * 10^5`
 * 
 * 	- `num` consists only of digits in the range `['0', '9']`.
 * 
 * 	- `num` does not contain leading zeros.
 * 
 * 	- `1 <= t <= 10^14`
 */

/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */

globalThis.smallestNumber = function (num, t) {
  // Write your solution here
};

/*
 * 3804-maximize-active-section-with-trade-ii
 *
 * Maximize Active Section with Trade II
 * https://leetcode.com/problems/maximize-active-section-with-trade-ii
 * 
 * You are given a binary string `s` of length `n`, where:
 * 
 * 	- `'1'` represents an active section.
 * 
 * 	- `'0'` represents an inactive section.
 * 
 * You can perform at most one trade to maximize the number of active sections in `s`. In a trade, you:
 * 
 * 	- Convert a contiguous block of `'1'`s that is surrounded by `'0'`s to all `'0'`s.
 * 
 * 	- Afterward, convert a contiguous block of `'0'`s that is surrounded by `'1'`s to all `'1'`s.
 * 
 * Additionally, you are given a 2D array `queries`, where `queries[i] = [li, ri]` represents a substring `s[li...ri]`.
 * 
 * For each query, determine the maximum possible number of active sections in `s` after making the optimal trade on the substring `s[li...ri]`.
 * 
 * Return an array `answer`, where `answer[i]` is the result for `queries[i]`.
 * 
 * Note
 * 
 * 	- For each query, treat `s[li...ri]` as if it is augmented with a `'1'` at both ends, forming `t = '1' + s[li...ri] + '1'`. The augmented `'1'`s do not contribute to the final count.
 * 
 * 	- The queries are independent of each other.
 * 
 * Example 1:
 * 
 * Input: s = "01", queries = [[0,1]]
 * 
 * Output: [1]
 * 
 * Explanation:
 * 
 * Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.
 * 
 * Example 2:
 * 
 * Input: s = "0100", queries = [[0,3],[0,2],[1,3],[2,3]]
 * 
 * Output: [4,3,1,1]
 * 
 * Explanation:
 * 
 * 	- Query `[0, 3]` &rarr; Substring `"0100"` &rarr; Augmented to `"101001"`
 * 
 * 	Choose `"0100"`, convert `"0100"` &rarr; `"0000"` &rarr; `"1111"`.
 * 
 * 	The final string without augmentation is `"1111"`. The maximum number of active sections is 4.
 * 
 * 	- Query `[0, 2]` &rarr; Substring `"010"` &rarr; Augmented to `"10101"`
 * 
 * 	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.
 * 
 * 	The final string without augmentation is `"1110"`. The maximum number of active sections is 3.
 * 
 * 	- Query `[1, 3]` &rarr; Substring `"100"` &rarr; Augmented to `"11001"`
 * 
 * 	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.
 * 
 * 	- Query `[2, 3]` &rarr; Substring `"00"` &rarr; Augmented to `"1001"`
 * 
 * 	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.
 * 
 * Example 3:
 * 
 * Input: s = "1000100", queries = [[1,5],[0,6],[0,4]]
 * 
 * Output: [6,7,2]
 * 
 * Explanation:
 * 
 * Query `[1, 5]` &rarr; Substring "00010" &rarr; Augmented to "1000101"
 * 	Choose "00010", convert "00010" &rarr; "00000" &rarr; "11111".
 * 
 * 	The final string without augmentation is "1111110". The maximum number of active sections is 6.
 * 
 * Query `[0, 6]` &rarr; Substring "1000100" &rarr; Augmented to "110001001"
 * 	Choose "000100", convert "000100" &rarr; "000000" &rarr; "111111".
 * 
 * 	The final string without augmentation is "1111111". The maximum number of active sections is 7.
 * 
 * Query `[0, 4]` &rarr; Substring "10001" &rarr; Augmented to "1100011"
 * 	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.
 * 
 * Example 4:
 * 
 * Input: s = "01010", queries = [[0,3],[1,4],[1,3]]
 * 
 * Output: [4,4,2]
 * 
 * Explanation:
 * 
 * 	- Query `[0, 3]` &rarr; Substring `"0101"` &rarr; Augmented to `"101011"`
 * 
 * 	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.
 * 
 * 	The final string without augmentation is `"11110"`. The maximum number of active sections is 4.
 * 
 * 	- Query `[1, 4]` &rarr; Substring `"1010"` &rarr; Augmented to `"110101"`
 * 
 * 	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.
 * 
 * 	The final string without augmentation is `"01111"`. The maximum number of active sections is 4.
 * 
 * 	- Query `[1, 3]` &rarr; Substring `"101"` &rarr; Augmented to `"11011"`
 * 
 * 	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.
 * 
 * Constraints:
 * 
 * 	- `1 <= n == s.length <= 10^5`
 * 
 * 	- `1 <= queries.length <= 10^5`
 * 
 * 	- `s[i]` is either `'0'` or `'1'`.
 * 
 * 	- `queries[i] = [li, ri]`
 * 
 * 	- `0 <= li <= ri < n`
 */

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */

globalThis.maxActiveSectionsAfterTrade = function(s, queries) {
  // Write your solution here
};

/*
 * 3813-smallest-palindromic-rearrangement-ii
 *
 * Smallest Palindromic Rearrangement II
 * https://leetcode.com/problems/smallest-palindromic-rearrangement-ii
 * 
 * You are given a palindromic string `s` and an integer `k`.
 * 
 * Return the k-th lexicographically smallest palindromic permutation of `s`. If there are fewer than `k` distinct palindromic permutations, return an empty string.
 * 
 * Note: Different rearrangements that yield the same palindromic string are considered identical and are counted once.
 * 
 * Example 1:
 * 
 * Input: s = "abba", k = 2
 * 
 * Output: "baab"
 * 
 * Explanation:
 * 
 * 	- The two distinct palindromic rearrangements of `"abba"` are `"abba"` and `"baab"`.
 * 
 * 	- Lexicographically, `"abba"` comes before `"baab"`. Since `k = 2`, the output is `"baab"`.
 * 
 * Example 2:
 * 
 * Input: s = "aa", k = 2
 * 
 * Output: ""
 * 
 * Explanation:
 * 
 * 	- There is only one palindromic rearrangement: "aa".
 * 
 * 	- The output is an empty string since `k = 2` exceeds the number of possible rearrangements.
 * 
 * Example 3:
 * 
 * Input: s = "bacab", k = 1
 * 
 * Output: "abcba"
 * 
 * Explanation:
 * 
 * 	- The two distinct palindromic rearrangements of `"bacab"` are `"abcba"` and `"bacab"`.
 * 
 * 	- Lexicographically, `"abcba"` comes before `"bacab"`. Since `k = 1`, the output is `"abcba"`.
 * 
 * Constraints:
 * 
 * 	- `1 <= s.length <= 10^4`
 * 
 * 	- `s` consists of lowercase English letters.
 * 
 * 	- `s` is guaranteed to be palindromic.
 * 
 * 	- `1 <= k <= 10^6`
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

globalThis.smallestPalindrome = function(s, k) {
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
    "id": "460-lfu-cache",
    "fn": "LFUCache",
    "usesListNode": false,
    "mutatesInput": true,
    "cases": []
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
    "id": "1522-stone-game-iii",
    "fn": "stoneGameIII",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "1617-stone-game-iv",
    "fn": "MAX",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          1
        ],
        "expected": true
      },
      {
        "args": [
          2
        ],
        "expected": false
      },
      {
        "args": [
          4
        ],
        "expected": true
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
    "id": "3635-smallest-divisible-digit-product-ii",
    "fn": "smallestNumber",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3804-maximize-active-section-with-trade-ii",
    "fn": "maxActiveSectionsAfterTrade",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3813-smallest-palindromic-rearrangement-ii",
    "fn": "smallestPalindrome",
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
