/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length, a = nums[0];
    let ans = Infinity, asc = true, desc = true;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== (a + i) % n) asc = false;
        if (nums[i] !== (((a - i) % n) + n) % n) desc = false;
    }

    if (asc) ans = a === 0 ? 0 : Math.min(n - a, a + 2);
    if (desc) {
        const k = (a + 1) % n;
        ans = Math.min(ans, 1 + (n - k) % n, k + 1);
    }
    return ans === Infinity ? -1 : ans;
};