/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};

// var addBinary = function (a, b) {
//     let i = a.length - 1, j = b.length - 1;
//     let carry = 0;
//     const result = [];
//     while (i >= 0 || j >= 0 || carry) {
//         let total = carry;
//         if (i >= 0) {
//             console.log('a', a[i]);
//             total += parseInt(a[i])
//             i--
//         }
//         if (j >= 0) {
//             console.log('b', b[j]);
//             total += parseInt(b[j])
//             j--
//         }
//         result.unshift(total % 2);
//         carry = Math.floor(total / 2);
//     }
//     return result
// };