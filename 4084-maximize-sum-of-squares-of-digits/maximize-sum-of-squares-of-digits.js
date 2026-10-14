/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if (sum > 9 * num) return "";

    let ans = "";

    while (num-- > 0) {
        const digit = Math.min(9, sum);
        ans += digit;
        sum -= digit;
    }

    return sum === 0 ? ans : "";
};