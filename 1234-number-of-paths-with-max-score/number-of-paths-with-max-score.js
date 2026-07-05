/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const MOD = 1000000007;
    const n = board.length;

    const score = Array.from({ length: n }, () =>
        Array(n).fill(-1)
    );

    const ways = Array.from({ length: n }, () =>
        Array(n).fill(0)
    );

    score[0][0] = 0;
    ways[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'X') continue;
            if (score[i][j] === -1) continue;

            const directions = [
                [1, 0],  // down
                [0, 1],  // right
                [1, 1]   // diagonal
            ];

            for (const [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;

                if (
                    ni >= n ||
                    nj >= n ||
                    board[ni][nj] === 'X'
                ) {
                    continue;
                }

                let value = 0;

                if (
                    board[ni][nj] !== 'S' &&
                    board[ni][nj] !== 'E'
                ) {
                    value = Number(board[ni][nj]);
                }

                const newScore = score[i][j] + value;

                if (newScore > score[ni][nj]) {
                    score[ni][nj] = newScore;
                    ways[ni][nj] = ways[i][j];
                } else if (newScore === score[ni][nj]) {
                    ways[ni][nj] =
                        (ways[ni][nj] + ways[i][j]) % MOD;
                }
            }
        }
    }

    if (ways[n - 1][n - 1] === 0) {
        return [0, 0];
    }

    return [
        score[n - 1][n - 1],
        ways[n - 1][n - 1]
    ];
};