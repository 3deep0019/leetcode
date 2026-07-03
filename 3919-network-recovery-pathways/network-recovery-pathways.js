/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    const n = online.length;

    let minCost = Infinity;
    let maxCost = 0;

    const adj = Array.from({ length: n }, () => []);

    for (const [u, v, cost] of edges) {
        adj[u].push([v, cost]);
        minCost = Math.min(minCost, cost);
        maxCost = Math.max(maxCost, cost);
    }

    function can(score) {
        const indegree = new Array(n).fill(0);

        for (const [u, v, cost] of edges) {
            if (cost < score) continue;

            if (u !== 0 && u !== n - 1 && !online[u]) continue;
            if (v !== 0 && v !== n - 1 && !online[v]) continue;

            indegree[v]++;
        }

        const queue = [];
        let head = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        const topo = [];

        while (head < queue.length) {
            const node = queue[head++];
            topo.push(node);

            for (const [next, cost] of adj[node]) {
                if (cost < score) continue;

                if (node !== 0 && node !== n - 1 && !online[node]) continue;
                if (next !== 0 && next !== n - 1 && !online[next]) continue;

                if (--indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        const dist = new Array(n).fill(Infinity);
        dist[0] = 0;

        for (const node of topo) {
            if (dist[node] === Infinity) continue;

            for (const [next, cost] of adj[node]) {
                if (cost < score) continue;

                if (node !== 0 && node !== n - 1 && !online[node]) continue;
                if (next !== 0 && next !== n - 1 && !online[next]) continue;

                const newCost = dist[node] + cost;

                if (newCost < dist[next]) {
                    dist[next] = newCost;
                }
            }
        }

        return dist[n - 1] <= k;
    }

    let left = minCost;
    let right = maxCost;
    let ans = -1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};