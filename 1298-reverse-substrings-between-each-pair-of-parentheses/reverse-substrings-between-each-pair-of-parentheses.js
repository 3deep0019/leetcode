/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const n = s.length;
    const link = Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === '(')
            stack.push(i);
        else if (s[i] === ')') {
            const j = stack.pop();
            link[i] = j;
            link[j] = i;
        }
    }

    const res = [];
    let dir = 1;
    let i = 0;

    while (i < n) {
        const c = s[i];
        if (c === '(' || c === ')') {
            i = link[i];
            dir = -dir;
        } else
            res.push(c);

        i += dir;
    }

    return res.join('');
};