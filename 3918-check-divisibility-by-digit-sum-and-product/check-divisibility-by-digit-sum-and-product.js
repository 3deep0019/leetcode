/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
  let s = 0;
    let p = 1;

    const str = Math.abs(n).toString();

    for (const ch of str) {
        const d = Number(ch);
        s += d;
        p *= d;
    }

    if (n % (s + p) === 0) {
        return true;
    } else {
        return false;
    }
};