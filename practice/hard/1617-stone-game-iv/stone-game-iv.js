/**
 * @param {number} n
 * @return {boolean}
 */
const MAX = 1e5;
const dp = Array(MAX + 1).fill(false);

for (let i = 0; i <= MAX; i++) {
    if (dp[i]) continue;
    for (let j = 1; j * j <= MAX - i; j++)
        dp[i + j * j] = 1;
}

const winnerSquareGame = n => dp[n];