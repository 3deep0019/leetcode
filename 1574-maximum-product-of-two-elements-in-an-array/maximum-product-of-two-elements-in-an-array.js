/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let mx1 = 0;
    let mx2 = 0;

    for (const x of nums) {

        if (x >= mx1) {

            mx2 = mx1;
            mx1 = x;

        } else if (x > mx2) {

            mx2 = x;
        }
    }

    return (mx1 - 1) * (mx2 - 1);
};