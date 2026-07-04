/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, dist] of roads) {
        graph[u].push([v, dist]);
        graph[v].push([u, dist]);
    }

    const visited = new Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;

    let minScore = Infinity;
    let head = 0;

    while (head < queue.length) {
        const city = queue[head++];

        for (const [next, dist] of graph[city]) {
            minScore = Math.min(minScore, dist);

            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }

    return minScore;
};