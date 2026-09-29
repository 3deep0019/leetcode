/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length, n = grid[0].length;

    if (~(m + n) & 1 || grid[0][0].charCodeAt() & 1 || ~grid.at(-1).at(-1).charCodeAt() & 1)
        return 0;

    const dfs = _.memoize(
        (i, j, x) => {
            x += 1 - ((grid[i][j].charCodeAt() & 1) << 1);

            if (x < 0 || x > m - i + n - j - 1)
                return 0;

            if (i === m - 1 && j === n - 1)
                return x === 0;

            return (i < m - 1 && dfs(i + 1, j, x)) || (j < n - 1 && dfs(i, j + 1, x));
        },
        (i, j, x) => `${i},${j},${x}`
    );

    return !!dfs(0, 0, 0);
};