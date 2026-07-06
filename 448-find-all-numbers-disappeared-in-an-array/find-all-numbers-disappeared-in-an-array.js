/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const freq = new Array(n + 1).fill(0);
    const result = []

    for (const num of nums) {
        freq[num]++;
    }

    for (let i = 1; i <= n; i++){
        if (freq[i] == 0) {
            result.push(i)
        }
    }
    
    return result
};