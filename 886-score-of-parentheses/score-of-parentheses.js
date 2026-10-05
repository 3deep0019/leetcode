/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0];

    for (const ch of s) {
        if (ch === '(') {
            stack.push(0);
        } else {
            const inside = stack.pop();

            if (inside === 0) {
                stack.push(stack.pop() + 1);
            } else {
                stack.push(stack.pop() + 2 * inside);
            }
        }
    }

    return stack.pop();
};