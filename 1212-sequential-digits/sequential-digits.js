/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const lowLength = low.toString().length;
    const highLength = high.toString().length;

    const result = [];

    for (let length = lowLength; length <= highLength; length++) {

        for (let start = 1; start <= 10 - length; start++) {

            let num = 0;
            let digit = start;

            for (let i = 0; i < length; i++) {
                num = num * 10 + digit;
                digit++;
            }

            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result;
};