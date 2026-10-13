/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const a = nums.map(x => x * x);
    
    a.sort((p, q) => p - q);

    let ans = 0;
    const k = Math.floor(nums.length / 2);  

    for (let i = 0; i < k; i++)
        ans -= a[i];

    for (let i = k; i < nums.length; i++)
        ans += a[i];

    return ans;
};