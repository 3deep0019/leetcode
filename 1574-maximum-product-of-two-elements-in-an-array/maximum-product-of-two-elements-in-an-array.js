/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
        const product = (nums[i] - 1) * (nums[j] - 1);
        if (product > max) {
            max = product;
        }
        }
    }
    return max;
};