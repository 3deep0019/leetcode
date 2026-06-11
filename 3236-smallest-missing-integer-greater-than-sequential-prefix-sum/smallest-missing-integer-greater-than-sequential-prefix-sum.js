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