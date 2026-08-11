/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const q = word.length >> 3;
    const r = word.length & 7;
    return ((q << 2) + r) * (q + 1);
};