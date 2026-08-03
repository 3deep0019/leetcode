/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;

    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {

        dp[i] = -Infinity;
        let sum = 0;

        for (let j = i; j < Math.min(n, i + 3); j++) {

            sum += stoneValue[j];

            dp[i] = Math.max(dp[i], sum - dp[j + 1]);
        }
    }

    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";
};