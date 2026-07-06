# LeetCode Easy Problems

39 problem(s)

## 1-two-sum

### Problem

Two Sum
https://leetcode.com/problems/two-sum

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (typeof(seen[diff]) == 'number') {
            return [seen[diff], i];
        } else {
            seen[nums[i]] = i;
        }
    }
};
```

---

## 9-palindrome-number

### Problem

Palindrome Number
https://leetcode.com/problems/palindrome-number

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

### Solution

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     x = x.toString()
    let left = 0
    let right = x.length - 1

    while (left < right) {
        if (x[left] !== x[right]) {
            return false
        }
        left++
        right--
    }
    return true
};
```

---

## 13-roman-to-integer

### Problem

Roman to Integer
https://leetcode.com/problems/roman-to-integer

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};
```

### Notes

<h2>roman-to-integer Notes</h2><hr>[ Time taken: 1hr 58m 34s ]

---

## 14-longest-common-prefix

### Problem

Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix

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

### Solution

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ""
    let prefix = strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!== 0){
            prefix = prefix.slice(0,-1);
            if(!prefix) return "";
        }
    }
    return prefix;
};
```

---

## 20-valid-parentheses

### Problem

Valid Parentheses
https://leetcode.com/problems/valid-parentheses

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
```

### Notes

<h2>valid-parentheses Notes</h2><hr>[ Time taken: 29m 33s ]

---

## 21-merge-two-sorted-lists

### Problem

Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    let curr1 = list1, curr2 = list2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next;
    }

    // Attach the remaining nodes
    temp.next = curr1 !== null ? curr1 : curr2;

    return dummyNode.next;
};
```

---

## 26-remove-duplicates-from-sorted-array

### Problem

Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in `nums` to be `k​​​​​​​`​​​​​​​. After removing duplicates, return the number of unique elements `k`.

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let removeZero = 1;
    let duplicate = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== duplicate) {
            duplicate = nums[i];
            nums[removeZero] = nums[i];
            removeZero++
        }
        
    }
    const length = nums.length;
    while (removeZero < length) {
        nums.pop();
        removeZero++;
    }
    return nums.length
};
```

---

## 27-remove-element

### Problem

Remove Element
https://leetcode.com/problems/remove-element

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[k] = nums[i]
            k++;
        }
    }
    return k
};
```

---

## 28-find-the-index-of-the-first-occurrence-in-a-string

### Problem

Find the Index of the First Occurrence in a String
https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

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

### Solution

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1;
    return haystack.indexOf(needle)
};
```

### Notes

<h2>find-the-index-of-the-first-occurrence-in-a-string Notes</h2><hr>[ Time taken: 3d 9hrs 44m 25s ]

---

## 35-search-insert-position

### Problem

Search Insert Position
https://leetcode.com/problems/search-insert-position

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;  
};
```

---

## 58-length-of-last-word

### Problem

Length of Last Word
https://leetcode.com/problems/length-of-last-word

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(' ');
    return s[s.length-1].length
};
```

---

## 66-plus-one

### Problem

Plus One
https://leetcode.com/problems/plus-one

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

### Solution

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    digits.unshift(1);
    return digits;
};
```

---

## 67-add-binary

### Problem

Add Binary
https://leetcode.com/problems/add-binary

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

### Solution

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};

// var addBinary = function (a, b) {
//     let i = a.length - 1, j = b.length - 1;
//     let carry = 0;
//     const result = [];
//     while (i >= 0 || j >= 0 || carry) {
//         let total = carry;
//         if (i >= 0) {
//             console.log('a', a[i]);
//             total += parseInt(a[i])
//             i--
//         }
//         if (j >= 0) {
//             console.log('b', b[j]);
//             total += parseInt(b[j])
//             j--
//         }
//         result.unshift(total % 2);
//         carry = Math.floor(total / 2);
//     }
//     return result
// };
```

---

## 69-sqrtx

### Problem

Sqrt(x)
https://leetcode.com/problems/sqrtx

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

### Solution

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let low = 1;
    let high = Math.floor(x / 2); 
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};
```

### Notes

<h2>sqrtx Notes</h2><hr>[ Time taken: 23m 30s ]

---

## 70-climbing-stairs

### Problem

Climbing Stairs
https://leetcode.com/problems/climbing-stairs

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

### Solution

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n
    let first = 1, second = 2;
    for(let i = 3;i<=n;i++){
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
};
```

---

## 125-valid-palindrome

### Problem

Valid Palindrome
https://leetcode.com/problems/valid-palindrome

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s) return true;
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};
```

---

## 136-single-number

### Problem

Single Number
https://leetcode.com/problems/single-number

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    for (let n of nums) {
        res ^= n;
    }

    return res;  
};
```

---

## 169-majority-element

### Problem

Majority Element
https://leetcode.com/problems/majority-element

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `&lfloor;n / 2&rfloor;` times. You may assume that the majority element always exists in the array.

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0;
    let votes = 0;

    for (const num of nums) {
        if (votes == 0) {
            votes+=1;
            majority = num;
        } else if (majority == num) {
            votes+=1
        } else {
            votes-=1
        }
    }
    return majority
};
```

---

## 217-contains-duplicate

### Problem

Contains Duplicate
https://leetcode.com/problems/contains-duplicate

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
        const seen = {};
    for (const num of nums) {
        if (seen[num]) {
            return true;
        } else {
            seen[num] = 1;
        }
    }
    return false;
};
```

---

## 219-contains-duplicate-ii

### Problem

Contains Duplicate II
https://leetcode.com/problems/contains-duplicate-ii

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

### Solution

_No solution file found._

---

## 242-valid-anagram

### Problem

Valid Anagram
https://leetcode.com/problems/valid-anagram

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

### Solution

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};
```

---

## 283-move-zeroes

### Problem

Move Zeroes
https://leetcode.com/problems/move-zeroes

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;

    for (const num of nums) {
        if (num !== 0) {
            nums[insertPos] = num;
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};
```

---

## 344-reverse-string

### Problem

Reverse String
https://leetcode.com/problems/reverse-string

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

### Solution

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
```

### Notes

<h2>reverse-string Notes</h2><hr>[ Time taken: 5m 59s ]

---

## 392-is-subsequence

### Problem

Is Subsequence
https://leetcode.com/problems/is-subsequence

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

### Solution

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sCount = 0;
    
    for (const _t of t) {
        if (s[sCount] == _t) {
            sCount++;
        }
    }
    return sCount == s.length
};
```

---

## 415-add-strings

### Problem

Add Strings
https://leetcode.com/problems/add-strings

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

### Solution

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    ans = BigInt(num1) + BigInt(num2);
    return ans.toString();
};
```

---

## 448-find-all-numbers-disappeared-in-an-array

### Problem

Find All Numbers Disappeared in an Array
https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const freq = new Array(n + 1).fill(0);
    const result = []

    for (const num of nums) {
        freq[num]++;
    }

    for (let i = 1; i <= n; i++){
        if (freq[i] == 0) {
            result.push(i)
        }
    }
    
    return result
};
```

---

## 459-repeated-substring-pattern

### Problem

Repeated Substring Pattern
https://leetcode.com/problems/repeated-substring-pattern

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

### Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            let pattern = s.substring(0, len);
            let temp = pattern.repeat(n / len);

            if (temp === s) return true;
        }
    }

    return false;
};
```

---

## 485-max-consecutive-ones

### Problem

Max Consecutive Ones
https://leetcode.com/problems/max-consecutive-ones

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCounts = 0;
    let temp = 0;
    for (let i = 0; i < nums.length;i++){
        if (nums[i] == 1) {
            temp++
            if (temp > maxCounts) {
                maxCounts = temp
            }
        } else {
            temp=0
        }
    }
    return maxCounts;
};
```

---

## 645-set-mismatch

### Problem

Set Mismatch
https://leetcode.com/problems/set-mismatch

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    const freq = new Array(n + 1).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    let duplicate = -1;
    let missing = -1;

    for (let i = 1; i <= n; i++) {
        if (freq[i] === 2) {
            duplicate = i;
        } else if (freq[i] === 0) {
            missing = i;
        }
    }

    return [duplicate, missing];
};
```

---

## 1444-number-of-steps-to-reduce-a-number-to-zero

### Problem

Number of Steps to Reduce a Number to Zero
https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero

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

### Solution

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let step = 0;

    while (num !== 0) {
        num % 2 === 0 ? num /= 2 : num--;
        step++;
    }
    return step;
};
```

---

## 1482-how-many-numbers-are-smaller-than-the-current-number

### Problem

How Many Numbers Are Smaller Than the Current Number
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const n = nums.length;
    const count = new Array(n).fill(0);

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (nums[i] > nums[j]) {
                count[i]++
            }
        }
    }

    return count;
};
```

---

## 1570-final-prices-with-a-special-discount-in-a-shop

### Problem

Final Prices With a Special Discount in a Shop
https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop

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

### Solution

```javascript
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const result = [...prices];
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (
            stack.length &&
            prices[stack[stack.length - 1]] >= prices[i]
        ) {
            const idx = stack.pop();
            result[idx] -= prices[i];
        }

        stack.push(i);
    }

    return result;
};
```

---

## 1580-shuffle-the-array

### Problem

Shuffle the Array
https://leetcode.com/problems/shuffle-the-array

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const newArr = [];
    for(let i=0;i<nums.length/2;i++){
        newArr.push(nums[i]);
        newArr.push(nums[i+n]);
    }

    return newArr
};
```

---

## 1603-running-sum-of-1d-array

### Problem

Running Sum of 1d Array
https://leetcode.com/problems/running-sum-of-1d-array

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
};
```

---

## 1791-richest-customer-wealth

### Problem

Richest Customer Wealth
https://leetcode.com/problems/richest-customer-wealth

You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i​​​​​^​​​​​​th​​​​` customer has in the `j​​​​​^​​​​​​th`​​​​ bank. Return the wealth that the richest customer has.

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

### Solution

```javascript
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(let i =0;i<accounts.length;i++){
        let sum = 0;
        for(let j = 0; j<accounts[i].length;j++){
            sum+=accounts[i][j]
        }
        if(sum>max){
            max = sum
        }
    }
    return max
};
```

### Notes

<h2>richest-customer-wealth Notes</h2><hr>[ Time taken: 1hr 58m 46s ]

---

## 1960-check-if-the-sentence-is-pangram

### Problem

Check if the Sentence Is Pangram
https://leetcode.com/problems/check-if-the-sentence-is-pangram

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

### Solution

```javascript
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false

    const aplhabetSet = new Set(sentence)
    return aplhabetSet.size == 26 ? true: false
};
```

### Notes

<h2>check-if-the-sentence-is-pangram Notes</h2><hr>[ Time taken: 19m 11s ]

---

## 2058-concatenation-of-array

### Problem

Concatenation of Array
https://leetcode.com/problems/concatenation-of-array

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums,...nums]
};
```

---

## 2099-number-of-strings-that-appear-as-substrings-in-word

### Problem

Number of Strings That Appear as Substrings in Word
https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word

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

### Solution

```javascript
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    for(const pattern of patterns){
        if(word.indexOf(pattern)>-1){
            count++
        }
    }
    return count;
};
```

### Notes

<h2>number-of-strings-that-appear-as-substrings-in-word Notes</h2><hr>[ Time taken: 8d 13hrs 53m 44s ]

---

## 3236-smallest-missing-integer-greater-than-sequential-prefix-sum

### Problem

Smallest Missing Integer Greater Than Sequential Prefix Sum
https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum

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

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let longestPrefixSum = nums[0];
    for (let i = 1; i < nums.length; i++){
        if (nums[i] == nums[i - 1] + 1) {
            longestPrefixSum += nums[i];
        } else {
            break;
        }
    }

    const set = new Set(nums)
    while (set.has(longestPrefixSum)) {
        longestPrefixSum++;
    }
    return longestPrefixSum
};
```

---
