/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;

    const digitSum = (x) => {
        let s = 0;
        while (x > 0) {
            s += x % 10;
            x = Math.floor(x / 10);
        }
        return s;
    };

    const ds = nums.map(digitSum);
    const order = Array.from({ length: n }, (_, i) => i);
    order.sort((i, j) => ds[i] !== ds[j] ? ds[i] - ds[j] : nums[i] - nums[j]);

    const vis = new Array(n).fill(false);
    let swaps = 0;
    for (let i = 0; i < n; i++) {
        if (vis[i] || order[i] === i) continue;
        let j = i, len = 0;
        while (!vis[j]) {
            vis[j] = true;
            j = order[j];
            len++;
        }
        swaps += len - 1;
    }
    return swaps;
};