/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const result = [...prices];
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (
            stack.length &&
            prices[stack[stack.length - 1]] >= prices[i]
        ) {
            const idx = stack.pop();
            result[idx] -= prices[i];
        }

        stack.push(i);
    }

    return result;
};