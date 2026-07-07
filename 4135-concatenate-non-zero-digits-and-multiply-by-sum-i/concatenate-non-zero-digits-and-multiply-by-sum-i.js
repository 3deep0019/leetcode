/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    if(n==0) return 0;
    n = n.toString()
    let total = 0;
    let newNum = ""
    for (const char of n) {
        const intNum = parseInt(char)
        if (intNum > 0) {
            total += intNum;
            newNum += intNum;
        }
    }
    return total * parseInt(newNum);
};