# LeetCode Medium Problems

25 problem(s)

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
