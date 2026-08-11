/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    seen = {}
    for (let i = 0; i < nums.length; i++){
        if (typeof seen[nums[i]] == 'number' && Math.abs(seen[nums[i]] - (i)) <= k) {
            return true;
        } else {
            seen[nums[i]] = i;
        }
    }
    return false;
};