/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    n = n.toString().split("");
    let max = 0;
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
        const multi = n[i] * n[j];
        if (multi > max) {
            max = multi;
        }
        }
    }
    return max;
};