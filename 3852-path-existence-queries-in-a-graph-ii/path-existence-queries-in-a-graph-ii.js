/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const LOG = 18;
    const vec = [];

    for (let i = 0; i < n; i++) {
        vec.push([nums[i], i]);
    }
    vec.sort((a, b) => {
        if (a[0] !== b[0]) 
            return a[0] - b[0];
        return a[1] - b[1];
    });
    const getSortIdx = new Array(n);
    for (let i = 0; i < n; i++) {
        getSortIdx[vec[i][1]] = i;
    }
    const st = Array.from({ length: n }, () => new Array(LOG).fill(0));
    let l = 0;
    for (let r = 0; r < n; r++) {
        while (vec[r][0] - vec[l][0] > maxDiff) {
            st[l][0] = r - 1;
            l++;
        }
    }
    while (l < n) {
        st[l][0] = n - 1;
        l++;
    }
    for (let j = 1; j < LOG; j++) {
        for (let i = 0; i < n; i++) {
            st[i][j] = st[st[i][j - 1]][j - 1];
        }
    }
    const ans = new Array(queries.length).fill(-1);

    for (let i = 0; i < queries.length; i++) {
        let a = getSortIdx[queries[i][0]];
        let b = getSortIdx[queries[i][1]];
        if (a > b) {
            [a, b] = [b, a];
        }
        if (a === b) {
            ans[i] = 0;
            continue;
        }
        let cur = a;
        let step = 0;
        for (let j = LOG - 1; j >= 0; j--) {
            if (st[cur][j] < b) {
                step += 1 << j;
                cur = st[cur][j];
            }
        }
        if (st[cur][0] >= b) {
            ans[i] = step + 1;
        }
    }
    return ans;
};