/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    const free = new PriorityQueue((a, b) => a - b, [...Array(k).keys()]);  // each free server, keyed by its next turn
    const busy = new PriorityQueue((a, b) => a[0] - b[0]);  // [time it frees up, server]

    const handled = new Array(k).fill(0);
    for (const [i, t] of arrival.entries()) {
        while (!busy.isEmpty() && busy.front()[0] <= t) {  // done by the arrival
            const [, x] = busy.dequeue();
            free.enqueue(i + (x - i % k + k) % k);  // its first turn from i on
        }
        if (free.isEmpty()) continue;  // none free: the request is dropped
        const x = free.dequeue() % k;
        busy.enqueue([t + load[i], x]);
        handled[x]++;
    }

    const most = handled.reduce((a, b) => Math.max(a, b));
    return [...handled.keys()].filter(x => handled[x] === most);
};