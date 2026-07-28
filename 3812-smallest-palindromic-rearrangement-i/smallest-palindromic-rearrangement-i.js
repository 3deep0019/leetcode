/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const count = new Map();

    for (const c of s) {
        count.set(c, (count.get(c) || 0) + 1);
    }

    const chars = [...count.keys()].sort();

    let left = "";
    let mid = "";

    for (const c of chars) {
        const freq = count.get(c);

        left += c.repeat(Math.floor(freq / 2));

        if (freq % 2 === 1) {
            mid = c;
        }
    }

    const right = left.split("").reverse().join("");

    return left + mid + right;
};