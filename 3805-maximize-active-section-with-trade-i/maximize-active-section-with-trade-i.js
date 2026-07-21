/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let ones = 0;
    for (const ch of s) {
        if (ch === '1') ones++;
    }

    const t = "1" + s + "1";

    const runs = [];

    for (const ch of t) {
        if (runs.length === 0 || runs[runs.length - 1][0] !== ch) {
            runs.push([ch, 1]);
        } else {
            runs[runs.length - 1][1]++;
        }
    }

    let best = 0;

    for (let i = 1; i + 1 < runs.length; i++) {
        if (
            runs[i][0] === '1' &&
            runs[i - 1][0] === '0' &&
            runs[i + 1][0] === '0'
        ) {
            best = Math.max(best, runs[i - 1][1] + runs[i + 1][1]);
        }
    }

    return ones + best;
};