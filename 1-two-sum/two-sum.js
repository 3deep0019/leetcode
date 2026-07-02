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