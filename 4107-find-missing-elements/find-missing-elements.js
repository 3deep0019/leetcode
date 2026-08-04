/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
  nums.sort((a, b) => a - b);

    const values = new Set(nums);
    const res = [];

    for (let x = nums[0]; x < nums[nums.length - 1]; x++) {
        if (!values.has(x)) {
            res.push(x);
        }
    }

    return res;
};