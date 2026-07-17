/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const n = nums.length;
    if(n<k) return 0;

    let windowSum = 0;
    for(let i=0;i<k;i++){
        windowSum+=nums[i];
    }

    let maxAvg = windowSum/k;

    for(let i = k;i<n;i++){
        windowSum += nums[i] - nums[i-k];
        maxAvg = Math.max(maxAvg,windowSum/k)
    }

    return maxAvg
};