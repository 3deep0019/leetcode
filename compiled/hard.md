# LeetCode Hard Problems

2 problem(s)

## 220-contains-duplicate-iii

### Problem

<h2><a href="https://leetcode.com/problems/contains-duplicate-iii">Contains Duplicate III</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>You are given an integer array <code>nums</code> and two integers <code>indexDiff</code> and <code>valueDiff</code>.</p>

<p>Find a pair of indices <code>(i, j)</code> such that:</p>

<ul>
	<li><code>i != j</code>,</li>
	<li><code>abs(i - j) &lt;= indexDiff</code>.</li>
	<li><code>abs(nums[i] - nums[j]) &lt;= valueDiff</code>, and</li>
</ul>

<p>Return <code>true</code><em> if such pair exists or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
<strong>Output:</strong> true
<strong>Explanation:</strong> We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --&gt; 0 != 3
abs(i - j) &lt;= indexDiff --&gt; abs(0 - 3) &lt;= 3
abs(nums[i] - nums[j]) &lt;= valueDiff --&gt; abs(1 - 1) &lt;= 0
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
<strong>Output:</strong> false
<strong>Explanation:</strong> After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= indexDiff &lt;= nums.length</code></li>
	<li><code>0 &lt;= valueDiff &lt;= 10<sup>9</sup></code></li>
</ul>

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
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
```

---

## 2605-count-anagrams

### Problem

<h2><a href="https://leetcode.com/problems/count-anagrams">Count Anagrams</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>You are given a string <code>s</code> containing one or more words. Every consecutive pair of words is separated by a single space <code>&#39; &#39;</code>.</p>

<p>A string <code>t</code> is an <strong>anagram</strong> of string <code>s</code> if the <code>i<sup>th</sup></code> word of <code>t</code> is a <strong>permutation</strong> of the <code>i<sup>th</sup></code> word of <code>s</code>.</p>

<ul>
	<li>For example, <code>&quot;acb dfe&quot;</code> is an anagram of <code>&quot;abc def&quot;</code>, but <code>&quot;def cab&quot;</code>&nbsp;and <code>&quot;adc bef&quot;</code> are not.</li>
</ul>

<p>Return <em>the number of <strong>distinct anagrams</strong> of </em><code>s</code>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;too hot&quot;
<strong>Output:</strong> 18
<strong>Explanation:</strong> Some of the anagrams of the given string are &quot;too hot&quot;, &quot;oot hot&quot;, &quot;oto toh&quot;, &quot;too toh&quot;, and &quot;too oht&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aa&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is only one anagram possible for the given string.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters and spaces <code>&#39; &#39;</code>.</li>
	<li>There is single space between consecutive words.</li>
</ul>

### Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function(s) {
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
```

---
