/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0;
    let votes = 0;

    for (const num of nums) {
        if (votes == 0) {
            votes+=1;
            majority = num;
        } else if (majority == num) {
            votes+=1
        } else {
            votes-=1
        }
    }
    return majority
};