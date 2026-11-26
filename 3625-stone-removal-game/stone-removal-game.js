/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = n => (0x61F03F807FC00n >> BigInt(n) & 1n) === 1n;