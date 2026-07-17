/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumEven = n * (n + 1);
    let sumOdd = n * n;
    while (sumEven != sumOdd) {
        if (sumEven > sumOdd) sumEven -= sumOdd;
        else sumOdd -= sumEven;
    }
    return sumEven;
};