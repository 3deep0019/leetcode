/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const d = new Array(100001).fill(0);
    let k = k1 + k2, sum = 0, max = 0;

    // Step 1: count the differences
    for (let i = 0; i < nums1.length; i++) {
        const x = Math.abs(nums1[i] - nums2[i]);
        d[x]++;
        sum += x;
        max = Math.max(max, x);
    }

    // Enough budget -> every difference becomes 0
    if (sum <= k) return 0;

    // Step 2: shave the biggest differences, level by level
    for (let i = max; i > 0 && k > 0; i--) {
        const move = Math.min(k, d[i]);
        d[i] -= move;
        d[i - 1] += move;
        k -= move;
    }

    // Step 3: add up the squares
    let ans = 0;
    for (let i = 0; i <= max; i++)
        ans += i * i * d[i];

    return ans;
};