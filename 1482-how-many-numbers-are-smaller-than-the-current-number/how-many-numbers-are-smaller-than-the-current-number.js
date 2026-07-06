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