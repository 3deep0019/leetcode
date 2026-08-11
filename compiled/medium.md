# LeetCode Medium Problems

37 problem(s)

## 2-add-two-numbers

### Problem

Add Two Numbers
https://leetcode.com/problems/add-two-numbers

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

### Solution

```javascript
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
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
};
```

---

## 11-container-with-most-water

### Problem

Container With Most Water
https://leetcode.com/problems/container-with-most-water

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

### Solution

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length
    let left = 0, right = n - 1, max = 0;

    while(left<right){
        area = (right-left) * Math.min(height[left],height[right]);
        max = Math.max(max,area);
        if(height[left] <= height[right]) left++;
        else right--;
    }

    return max
};
```

---

## 15-3sum

### Problem

3Sum
https://leetcode.com/problems/3sum

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

const result = [];
const n = nums.length;

for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
            result.push([nums[i], nums[left], nums[right]]);

            left++;
            right--;

            while (left < right && nums[left] === nums[left - 1]) left++;
            while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

return result;
};
```

---

## 49-group-anagrams

### Problem

Group Anagrams
https://leetcode.com/problems/group-anagrams

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

### Solution

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (const str of strs) {
        const key = str.split('').sort().join('');

        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    return Object.values(map);
};
```

---

## 75-sort-colors

### Problem

Sort Colors
https://leetcode.com/problems/sort-colors

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length
    let front = 0;
    for(let i =0; i<n;i++){
        if(nums[i] == 0){
            [nums[i],nums[front]] = [nums[front], nums[i]];
            front++;
        }
    }

    let i = front, back = n-1;
    while(i<=back){
        if(nums[i]==2){
            [nums[i],nums[back]] = [nums[back], nums[i]];
            back--;
        }
        else{
            i++;
        }
    }
    return nums
};
```

---

## 146-lru-cache

### Problem

LRU Cache
https://leetcode.com/problems/lru-cache

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

### Solution

```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
    const temp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
      const isKeyPresent = this.cache.get(key);
  if (isKeyPresent) {
    this.cache.delete(key);
    this.cache.set(key, value);
  } else if (!isKeyPresent && this.cache.size < this.capacity) {
    this.cache.set(key, value);
  } else if (this.cache.size == this.capacity) {
    const firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey);
    this.cache.set(key, value);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

---

## 150-evaluate-reverse-polish-notation

### Problem

Evaluate Reverse Polish Notation
https://leetcode.com/problems/evaluate-reverse-polish-notation

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

### Solution

```javascript
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let c of tokens) {
        if (c === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (c === "-") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        } else if (c === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (c === "/") {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first / second));
        } else {
            stack.push(parseInt(c));
        }
    }

    return stack[0]; 
};
```

---

## 167-two-sum-ii-input-array-is-sorted

### Problem

Two Sum II - Input Array Is Sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

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

### Solution

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const n = numbers.length
    let left = 0, right = n - 1;
    while(left < right){
        const sum = numbers[left] + numbers[right];
        if(sum == target){
            return [left+1,right+1]
        }
        if(sum<target) left++;
        else right--;
    }
};
```

---

## 189-rotate-array

### Problem

Rotate Array
https://leetcode.com/problems/rotate-array

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let l = 0;
    let r = nums.length - 1;
    
    nums = reverseArr(nums, l, r);
    
    l = 0;
    r = k - 1;
    nums = reverseArr(nums, l, r);
    
    l = k;
    r = nums.length - 1;
    nums = reverseArr(nums, l, r);
};

function reverseArr(nums, l, r) {
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    return nums;
}
```

---

## 486-predict-the-winner

### Problem

Predict the Winner
https://leetcode.com/problems/predict-the-winner

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    if (!(n & 1)) return true;

    const maxDiff = _.memoize(
        (i, j) => {
            if (i === j) return nums[i];
            return Math.max(nums[i] - maxDiff(i + 1, j),
                            nums[j] - maxDiff(i, j - 1));
        },
        (i, j) => (i << 16) | j
    );

    return maxDiff(0, n - 1) >= 0;
};
```

---

## 611-valid-triangle-number

### Problem

Valid Triangle Number
https://leetcode.com/problems/valid-triangle-number

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    const n = nums.length;
    let count = 0;

    for(let k = n - 1; k >= 2;k--){
        let left = 0, right = k - 1;
        while(left<right){
            if((nums[left]+nums[right])>nums[k]){
                count += right -left;
                right--;
            }
            else left++;
        }
    }

    return count;
};
```

---

## 636-exclusive-time-of-functions

### Problem

Exclusive Time of Functions
https://leetcode.com/problems/exclusive-time-of-functions

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

### Solution

```javascript
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const result = new Array(n).fill(0);
    const stack = [];

    let prevTime = 0;

    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(":");

        const id = Number(idStr);
        const time = Number(timeStr);

        if (type === "start") {
            if (stack.length) {
                result[stack[stack.length - 1]] += time - prevTime;
            }

            stack.push(id);
            prevTime = time;
        } else {
            result[stack[stack.length - 1]] += time - prevTime + 1;

            stack.pop();
            prevTime = time + 1;
        }
    }

    return result;
};
```

---

## 686-repeated-string-match

### Problem

Repeated String Match
https://leetcode.com/problems/repeated-string-match

Given two strings `a` and `b`, return the minimum number of times you should repeat string `a` so that string `b` is a substring of it. If it is impossible for `b`​​​​​​ to be a substring of `a` after repeating it, return `-1`.

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

### Solution

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let times = Math.ceil(b.length / a.length);
    let repeated = a.repeat(times);

    if (repeated.includes(b)) return times;
    if ((repeated + a).includes(b)) return times + 1;
    return -1;
};
```

### Notes

<h2>repeated-string-match Notes</h2><hr>[ Time taken: 12m 33s ]

---

## 739-daily-temperatures

### Problem

Daily Temperatures
https://leetcode.com/problems/daily-temperatures

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

### Solution

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // stores indices

    for (let i = 0; i < n; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return answer;
};
```

---

## 909-stone-game

### Problem

Stone Game
https://leetcode.com/problems/stone-game

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

### Solution

```javascript
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const n = piles.length;
    const dp = [...piles];

    for (let len = 2; len <= n; len++) {

        for (let i = 0; i + len - 1 < n; i++) {

            const j = i + len - 1;

            dp[i] = Math.max(
                piles[i] - dp[i + 1],
                piles[j] - dp[i]
            );
        }
    }

    return dp[0] > 0;
};
```

---

## 1138-grumpy-bookstore-owner

### Problem

Grumpy Bookstore Owner
https://leetcode.com/problems/grumpy-bookstore-owner

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

### Solution

```javascript
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let total = 0;
    const n = customers.length;
    for (let i = 0; i < n; i++) {
        if (!grumpy[i]) {
        total += customers[i];
        }
    }

    let notSatisfy = 0;
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i]) {
        notSatisfy += customers[i];
        }
    }

    let maxSatisfy = notSatisfy;
    for (let i = minutes; i < n; i++) {
        if (grumpy[i] == 1) {
        notSatisfy += customers[i];
        }

        if (grumpy[i - minutes] == 1) {
        notSatisfy -= customers[i - minutes];
        }

        maxSatisfy = Math.max(maxSatisfy, notSatisfy);
    }

    return total + maxSatisfy;
};
```

---

## 1159-smallest-subsequence-of-distinct-characters

### Problem

Smallest Subsequence of Distinct Characters
https://leetcode.com/problems/smallest-subsequence-of-distinct-characters

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const last = new Int32Array(26);
    const seen = new Uint8Array(26);
    const stack = new Int8Array(26);
    let top = -1;

    for (let i = 0; i < s.length; i++)
        last[s.charCodeAt(i) - 97] = i;

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;

        if (seen[c]) continue;

        while (
            top >= 0 &&
            stack[top] > c &&
            last[stack[top]] > i
        ) {
            seen[stack[top--]] = 0;
        }

        stack[++top] = c;
        seen[c] = 1;
    }

    let ans = "";
    for (let i = 0; i <= top; i++)
        ans += String.fromCharCode(stack[i] + 97);

    return ans;
};
```

---

## 1212-sequential-digits

### Problem

Sequential Digits
https://leetcode.com/problems/sequential-digits

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

### Solution

```javascript
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const lowLength = low.toString().length;
    const highLength = high.toString().length;

    const result = [];

    for (let length = lowLength; length <= highLength; length++) {

        for (let start = 1; start <= 10 - length; start++) {

            let num = 0;
            let digit = start;

            for (let i = 0; i < length; i++) {
                num = num * 10 + digit;
                digit++;
            }

            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result;
};
```

---

## 1222-remove-covered-intervals

### Problem

Remove Covered Intervals
https://leetcode.com/problems/remove-covered-intervals

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

### Solution

```javascript
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    let count = 0;
    let maxEnd = 0;

    for (const interval of intervals) {
        if (interval[1] > maxEnd) {
            count++;
            maxEnd = interval[1];
        }
    }

    return count;
};
```

---

## 1240-stone-game-ii

### Problem

Stone Game II
https://leetcode.com/problems/stone-game-ii

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

### Solution

```javascript
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    const memo = Array.from({ length: 2 }, () => 
        Array.from({ length: n }, () => Array(n + 1).fill(-1))
    );

    const solve = (person, i, M) => {
        if (i >= n) return 0;
        if (memo[person][i][M] !== -1) return memo[person][i][M];

        let result = person === 1 ? 0 : Infinity;
        let stones = 0;

        for (let x = 1; x <= Math.min(2 * M, n - i); x++) {
            stones += piles[i + x - 1];
            if (person === 1) {
                result = Math.max(result, stones + solve(0, i + x, Math.max(M, x)));
            } else {
                result = Math.min(result, solve(1, i + x, Math.max(M, x)));
            }
        }

        return memo[person][i][M] = result;
    };

    return solve(1, 0, 1);
};
```

---

## 1460-number-of-substrings-containing-all-three-characters

### Problem

Number of Substrings Containing All Three Characters
https://leetcode.com/problems/number-of-substrings-containing-all-three-characters

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let left = 0;
    let ans = 0;
    const count = { a: 0, b: 0, c: 0 };
    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;
        while (count.a > 0 && count.b > 0 && count.c > 0) {
            ans += s.length - right;
            count[s[left]]--;
            left++;
        }
    }
    return ans;
};
```

### Notes

<h2>number-of-substrings-containing-all-three-characters Notes</h2><hr>[ Time taken: 19m 15s ]

---

## 1552-build-an-array-with-stack-operations

### Problem

Build an Array With Stack Operations
https://leetcode.com/problems/build-an-array-with-stack-operations

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

### Solution

```javascript
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    let i = 0;

    for (let num = 1; num <= n && i < target.length; num++) {
        if (num === target[i]) {
            result.push('Push');
            i++;
        } else {
            result.push('Push');
            result.push('Pop');
        }
    }

    return result;
};
```

---

## 2552-maximum-sum-of-distinct-subarrays-with-length-k

### Problem

Maximum Sum of Distinct Subarrays With Length K
https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const n = nums.length;
  if (n < k) return 0;

  const freq = new Map();
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  if (freq.size === k) {
    maxSum = windowSum;
  }

  for (let i = k; i < n; i++) {
    const outgoing = nums[i - k];
    const incoming = nums[i];

    windowSum -= outgoing;
    freq.set(outgoing, freq.get(outgoing) - 1);

    if (freq.get(outgoing) === 0) {
      freq.delete(outgoing);
    }

    windowSum += incoming;
    freq.set(incoming, (freq.get(incoming) || 0) + 1);

    if (freq.size === k) {
      maxSum = Math.max(maxSum, windowSum);
    }
  }

  return maxSum;
};
```

---

## 2582-minimum-score-of-a-path-between-two-cities

### Problem

Minimum Score of a Path Between Two Cities
https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities

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

### Solution

```javascript
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, dist] of roads) {
        graph[u].push([v, dist]);
        graph[v].push([u, dist]);
    }

    const visited = new Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;

    let minScore = Infinity;
    let head = 0;

    while (head < queue.length) {
        const city = queue[head++];

        for (const [next, dist] of graph[city]) {
            minScore = Math.min(minScore, dist);

            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }

    return minScore;
};
```

### Notes

<h2>minimum-score-of-a-path-between-two-cities Notes</h2><hr>[ Time taken: 1hr 19m 32s ]

---

## 2793-count-the-number-of-complete-components

### Problem

Count the Number of Complete Components
https://leetcode.com/problems/count-the-number-of-complete-components

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

### Solution

```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents = (n, edges) => {
    let result = n - new Set(edges.flat()).size, connectedGraph;
    while (edges.length > 0) {
        [connectedGraph, edges] = extractConnectedSubgraph(edges);
        result += isComplete(connectedGraph);
    }
    return result;
};

const extractConnectedSubgraph = (edges) => {
    const subgraph = [edges.shift()];
    while (!totallyDistinct(subgraph, edges)) {
        const vertices = subgraph.flat();
        for (let i in edges) {
            if (vertices.includes(edges[i][0]) || vertices.includes(edges[i][1])) {
                subgraph.push(edges.splice(i, 1)[0]);
            }
        }
    }
    return [subgraph, edges]
};

const isComplete = (graph, count = new Set(graph.flat()).size) => 
   (count - 1) * count === 2 * graph.length;

const totallyDistinct = (g1, g2, s2 = new Set(g2.flat())) =>
    !g1.flat().some(r=> s2.has(r));
```

---

## 2914-find-the-safest-path-in-a-grid

### Problem

Find the Safest Path in a Grid
https://leetcode.com/problems/find-the-safest-path-in-a-grid

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

### Solution

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    if (grid[0][0] || grid.at(-1).at(-1)) return 0;
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const n = grid.length;
    const q = grid.reduce((grid, r, i) => (r.forEach((c, j) => c && grid.enqueue([i, j])), grid), new Queue());

    while (q.size()) {
        const [i, j] = q.dequeue();
        const d = grid[i][j];

        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;

            if (grid[x]?.[y] === 0) {
                grid[x][y] = d + 1;
                q.enqueue([x, y]);
            }
        }
    }

    const pq = new MaxPriorityQueue({ compare: ([grid], [b]) => b - grid });
    pq.enqueue([grid[0][0], 0, 0]);

    while (pq.size()) {
        const [sf, i, j] = pq.dequeue();

        if (i === n - 1 && j === n - 1) return sf - 1;

        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;

            if (grid[x]?.[y] > 0) {
                pq.enqueue([Math.min(sf, grid[x][y]), x, y]);
                grid[x][y] = -grid[x][y];
            }
        }
    }

    return grid[n - 1][n - 1] - 1;
};
```

### Notes

<h2>find-the-safest-path-in-a-grid Notes</h2><hr>[ Time taken: 1hr 8m 19s ]

---

## 3276-minimum-number-of-pushes-to-type-word-ii

### Problem

Minimum Number of Pushes to Type Word II
https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii

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

### Solution

```javascript
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const freq = Array(26).fill(0);

  for (const c of word) freq[c.charCodeAt(0) - 97]++;

  freq.sort((a, b) => b - a);

  let ans = 0;

  for (let i = 0; i < 26 && freq[i] > 0; i++) {
    ans += freq[i] * (Math.floor(i / 8) + 1);
  }

  return ans;
};
```

---

## 3558-find-a-safe-walk-through-a-grid

### Problem

Find a Safe Walk Through a Grid
https://leetcode.com/problems/find-a-safe-walk-through-a-grid

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

### Solution

```javascript
/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

    const deque = [];
    let head = 0;

    dist[0][0] = grid[0][0];
    deque.push([0, 0]);

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (head < deque.length) {
        const [x, y] = deque[head++];

        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            const newCost = dist[x][y] + grid[nx][ny];

            if (newCost < dist[nx][ny]) {
                dist[nx][ny] = newCost;

                if (grid[nx][ny] === 0) {
                    deque.splice(head, 0, [nx, ny]);
                } else {
                    deque.push([nx, ny]);
                }
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};
```

### Notes

<h2>find-a-safe-walk-through-a-grid Notes</h2><hr>[ Time taken: 40m 29s ]

---

## 3561-remove-methods-from-project

### Problem

Remove Methods From Project
https://leetcode.com/problems/remove-methods-from-project

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

### Solution

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    const vis = new Array(n).fill(false);

    function dfs(u) {
        vis[u] = true;

        for (const v of graph[u]) {
            if (!vis[v]) {
                dfs(v);
            }
        }
    }

    dfs(k);

    for (const [u, v] of invocations) {
        if (!vis[u] && vis[v]) {
            const ans = [];
            for (let i = 0; i < n; i++) {
                ans.push(i);
            }
            return ans;
        }
    }

    const ans = [];

    for (let i = 0; i < n; i++) {
        if (!vis[i]) {
            ans.push(i);
        }
    }

    return ans;
};
```

---

## 3584-find-the-lexicographically-smallest-valid-sequence

### Problem

Find the Lexicographically Smallest Valid Sequence
https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence

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

### Solution

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    
    const suffix = new Array(n + 1).fill(0);
    
    let j = m - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (j >= 0 && word1[i] === word2[j]) {
            j--;
        }
        suffix[i] = m - 1 - j;
    }
    
    const result = [];
    let w2Idx = 0;
    let changed = false; 
    for (let w1Idx = 0; w1Idx < n; w1Idx++) {
        if (w2Idx === m) break;
        
        if (word1[w1Idx] === word2[w2Idx]) {
            result.push(w1Idx);
            w2Idx++;
        } 
        else if (!changed && (suffix[w1Idx + 1] >= m - 1 - w2Idx)) {
            result.push(w1Idx);
            w2Idx++;
            changed = true; 
        }
    }
    
    return result.length === m ? result : [];
};
```

---

## 3805-maximize-active-section-with-trade-i

### Problem

Maximize Active Section with Trade I
https://leetcode.com/problems/maximize-active-section-with-trade-i

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

	- String `"0100"` &rarr; Augmented to `"101001"`.

	- Choose `"0100"`, convert `"101001"` &rarr; `"100001"` &rarr; `"111111"`.

	- The final string without augmentation is `"1111"`. The maximum number of active sections is 4.

Example 3:

Input: s = "1000100"

Output: 7

Explanation:

	- String `"1000100"` &rarr; Augmented to `"110001001"`.

	- Choose `"000100"`, convert `"110001001"` &rarr; `"110000001"` &rarr; `"111111111"`.

	- The final string without augmentation is `"1111111"`. The maximum number of active sections is 7.

Example 4:

Input: s = "01010"

Output: 4

Explanation:

	- String `"01010"` &rarr; Augmented to `"1010101"`.

	- Choose `"010"`, convert `"1010101"` &rarr; `"1000101"` &rarr; `"1111101"`.

	- The final string without augmentation is `"11110"`. The maximum number of active sections is 4.

Constraints:

	- `1 <= n == s.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`

### Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let ones = 0;
    for (const ch of s) {
        if (ch === '1') ones++;
    }

    const t = "1" + s + "1";

    const runs = [];

    for (const ch of t) {
        if (runs.length === 0 || runs[runs.length - 1][0] !== ch) {
            runs.push([ch, 1]);
        } else {
            runs[runs.length - 1][1]++;
        }
    }

    let best = 0;

    for (let i = 1; i + 1 < runs.length; i++) {
        if (
            runs[i][0] === '1' &&
            runs[i - 1][0] === '0' &&
            runs[i + 1][0] === '0'
        ) {
            best = Math.max(best, runs[i - 1][1] + runs[i + 1][1]);
        }
    }

    return ones + best;
};
```

---

## 3812-smallest-palindromic-rearrangement-i

### Problem

Smallest Palindromic Rearrangement I
https://leetcode.com/problems/smallest-palindromic-rearrangement-i

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

Rearranging `"babab"` &rarr; `"abbba"` gives the smallest lexicographic palindrome.

Example 3:

Input: s = "daccad"

Output: "acddca"

Explanation:

Rearranging `"daccad"` &rarr; `"acddca"` gives the smallest lexicographic palindrome.

Constraints:

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters.

	- `s` is guaranteed to be palindromic.

### Solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const count = new Map();

    for (const c of s) {
        count.set(c, (count.get(c) || 0) + 1);
    }

    const chars = [...count.keys()].sort();

    let left = "";
    let mid = "";

    for (const c of chars) {
        const freq = count.get(c);

        left += c.repeat(Math.floor(freq / 2));

        if (freq % 2 === 1) {
            mid = c;
        }
    }

    const right = left.split("").reverse().join("");

    return left + mid + right;
};
```

---

## 3820-number-of-unique-xor-triplets-ii

### Problem

Number of Unique XOR Triplets II
https://leetcode.com/problems/number-of-unique-xor-triplets-ii

You are given an integer array `nums`.

A XOR triplet is defined as the XOR of three elements `nums[i] XOR nums[j] XOR nums[k]` where `i <= j <= k`.

Return the number of unique XOR triplet values from all possible triplets `(i, j, k)`.

Example 1:

Input: nums = [1,3]

Output: 2

Explanation:

The possible XOR triplet values are:

	`(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1`
	`(0, 0, 1) &rarr; 1 XOR 1 XOR 3 = 3`
	`(0, 1, 1) &rarr; 1 XOR 3 XOR 3 = 1`
	`(1, 1, 1) &rarr; 3 XOR 3 XOR 3 = 3`

The unique XOR values are {1, 3}. Thus, the output is 2.

Example 2:

Input: nums = [6,7,8,9]

Output: 4

Explanation:

The possible XOR triplet values are {6, 7, 8, 9}. Thus, the output is 4.

Constraints:

	- `1 <= nums.length <= 1500`

	- `1 <= nums[i] <= 1500`

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const MAX_XOR = 2048;

    const present = new Array(MAX_XOR).fill(false);
    for (const x of nums) {
        present[x] = true;
    }

    let dp = new Array(MAX_XOR).fill(false);
    dp[0] = true;

    for (let step = 0; step < 3; step++) {
        const next = new Array(MAX_XOR).fill(false);

        for (let cur = 0; cur < MAX_XOR; cur++) {
            if (!dp[cur]) continue;

            for (let v = 0; v < MAX_XOR; v++) {
                if (present[v]) {
                    next[cur ^ v] = true;
                }
            }
        }

        dp = next;
    }

    let ans = 0;
    for (const ok of dp) {
        if (ok) ans++;
    }

    return ans;
};
```

---

## 3824-number-of-unique-xor-triplets-i

### Problem

Number of Unique XOR Triplets I
https://leetcode.com/problems/number-of-unique-xor-triplets-i

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the numbers in the range `[1, n]`.

A XOR triplet is defined as the XOR of three elements `nums[i] XOR nums[j] XOR nums[k]` where `i <= j <= k`.

Return the number of unique XOR triplet values from all possible triplets `(i, j, k)`.

Example 1:

Input: nums = [1,2]

Output: 2

Explanation:

The possible XOR triplet values are:

	- `(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1`

	- `(0, 0, 1) &rarr; 1 XOR 1 XOR 2 = 2`

	- `(0, 1, 1) &rarr; 1 XOR 2 XOR 2 = 1`

	- `(1, 1, 1) &rarr; 2 XOR 2 XOR 2 = 2`

The unique XOR values are `{1, 2}`, so the output is 2.

Example 2:

Input: nums = [3,1,2]

Output: 4

Explanation:

The possible XOR triplet values include:

	- `(0, 0, 0) &rarr; 3 XOR 3 XOR 3 = 3`

	- `(0, 0, 1) &rarr; 3 XOR 3 XOR 1 = 1`

	- `(0, 0, 2) &rarr; 3 XOR 3 XOR 2 = 2`

	- `(0, 1, 2) &rarr; 3 XOR 1 XOR 2 = 0`

The unique XOR values are `{0, 1, 2, 3}`, so the output is 4.

Constraints:

	- `1 <= n == nums.length <= 10^5`

	- `1 <= nums[i] <= n`

	- `nums` is a permutation of integers from `1` to `n`.

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;
    let m = n;
    
    m |= m >> 1;
    m |= m >> 2;
    m |= m >> 4;
    m |= m >> 8;
    m |= m >> 16;
    
    return (m + 1) >> ((3 / (n + 1)) | 0);
};
```

---

## 3838-path-existence-queries-in-a-graph-i

### Problem

Path Existence Queries in a Graph I
https://leetcode.com/problems/path-existence-queries-in-a-graph-i

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

### Solution

```javascript
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const group = new Array(n).fill(0);
    let currentGroup = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            currentGroup++;
        }
        group[i] = currentGroup;
    }

    const res = [];
    for (const [u, v] of queries) {
        res.push(group[u] === group[v]);
    }

    return res;
};
```

---

## 4136-concatenate-non-zero-digits-and-multiply-by-sum-ii

### Problem

Concatenate Non-Zero Digits and Multiply by Sum II
https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii

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

### Solution

```javascript
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */

const MOD = 1000000007;
const MAX = 100001;

const pow = new Int32Array(MAX);
pow[0] = 1;

for (let i = 1; i < MAX; i++)
    pow[i] = (pow[i - 1] * 10) % MOD;
    
var sumAndMultiply = function(s, queries) {
    const n = s.length;
    const A = new Int32Array(n + 1);
    const B = new Int32Array(n + 1);
    const len = new Int32Array(n + 1);

    for (let i = 0; i < n; i++) {
        const d = Number(s[i]);
        A[i + 1] = A[i] + d;
        B[i + 1] = d ? (B[i] * 10 + d) % MOD : B[i];
        len[i + 1] = len[i] + (d ? 1 : 0);
    }

    const res = [];

    for (let [l, r] of queries) {
        r++;

        const ln = len[r] - len[l];
        const sub = Number((BigInt(B[l]) * BigInt(pow[ln])) % BigInt(MOD));
        let x = B[r] - sub;

        x = ((x % MOD) + MOD) % MOD;

        res.push((x * (A[r] - A[l])) % MOD);
    }

    return res;
};
```

### Notes

<h2>concatenate-non-zero-digits-and-multiply-by-sum-ii Notes</h2><hr>[ Time taken: 7m 23s ]

---

## 4242-sum-of-gcd-of-formed-pairs

### Problem

Sum of GCD of Formed Pairs
https://leetcode.com/problems/sum-of-gcd-of-formed-pairs

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

	- `1 <= nums[i] <= 10^​​​​​​​9`

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    let prefix = [];
    let greatestNumber = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > greatestNumber) {
            greatestNumber = nums[i];
        }

        let a = nums[i];
        let b = greatestNumber;

        while (b != 0) {
            let remainder = a % b;
            a = b;
            b = remainder;
        }

        prefix.push(a)
    }

    prefix.sort((x, y) => x - y);

    let totalSum = 0;
    let frontIndex = 0;
    let backIndex = prefix.length - 1;

    while (frontIndex < backIndex) {
        let smallest = prefix[frontIndex];
        let largest = prefix[backIndex];

        while (smallest != 0) {
            let remainder2 = largest % smallest;
            largest = smallest;
            smallest = remainder2;
        }

        totalSum += largest;
        frontIndex++;
        backIndex--;
    }

    return totalSum;
};
```

---
