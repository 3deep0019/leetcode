/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    const n = nums.length;
    const treeProd = new Int32Array(4 * n);
    const treeFreq = Array.from({ length: 4 * n }, () => new Int32Array(k));

    function merge(pL, fL, pR, fR, pRes, fRes) {
        pRes[0] = (pL[0] * pR[0]) % k;
        for (let i = 0; i < k; i++) fRes[i] = fL[i];
        for (let r = 0; r < k; r++) {
            if (fR[r] !== 0) {
                const nr = (pL[0] * r) % k;
                fRes[nr] += fR[r];
            }
        }
    }

    function build(v, tl, tr) {
        if (tl === tr) {
            treeProd[v] = nums[tl] % k;
            treeFreq[v][treeProd[v]] = 1;
            return;
        }
        const tm = (tl + tr) >> 1;
        build(v << 1, tl, tm);
        build(v << 1 | 1, tm + 1, tr);
        const pL = treeProd[v << 1], fL = treeFreq[v << 1];
        const pR = treeProd[v << 1 | 1], fR = treeFreq[v << 1 | 1];
        treeProd[v] = (pL * pR) % k;
        const fRes = treeFreq[v];
        fRes.fill(0);
        for (let i = 0; i < k; i++) fRes[i] = fL[i];
        for (let r = 0; r < k; r++) {
            if (fR[r]) {
                const nr = (pL * r) % k;
                fRes[nr] += fR[r];
            }
        }
    }

    function update(v, tl, tr, pos, val) {
        if (tl === tr) {
            treeProd[v] = val % k;
            treeFreq[v].fill(0);
            treeFreq[v][treeProd[v]] = 1;
            return;
        }
        const tm = (tl + tr) >> 1;
        if (pos <= tm) update(v << 1, tl, tm, pos, val);
        else update(v << 1 | 1, tm + 1, tr, pos, val);

        const pL = treeProd[v << 1], fL = treeFreq[v << 1];
        const pR = treeProd[v << 1 | 1], fR = treeFreq[v << 1 | 1];
        treeProd[v] = (pL * pR) % k;
        const fRes = treeFreq[v];
        fRes.fill(0);
        for (let i = 0; i < k; i++) fRes[i] = fL[i];
        for (let r = 0; r < k; r++) {
            if (fR[r]) {
                const nr = (pL * r) % k;
                fRes[nr] += fR[r];
            }
        }
    }

    function query(v, tl, tr, l, r, outFreq, outProd) {
        if (l > r) {
            outProd[0] = 1;
            outFreq.fill(0);
            return;
        }
        if (l === tl && r === tr) {
            outProd[0] = treeProd[v];
            for (let i = 0; i < k; i++) outFreq[i] = treeFreq[v][i];
            return;
        }
        const tm = (tl + tr) >> 1;
        const leftFreq = new Int32Array(k);
        const rightFreq = new Int32Array(k);
        const leftProd = new Int32Array(1);
        const rightProd = new Int32Array(1);

        query(v << 1, tl, tm, l, Math.min(r, tm), leftFreq, leftProd);
        query(v << 1 | 1, tm + 1, tr, Math.max(l, tm + 1), r, rightFreq, rightProd);

        outProd[0] = (leftProd[0] * rightProd[0]) % k;
        outFreq.fill(0);
        for (let i = 0; i < k; i++) outFreq[i] = leftFreq[i];
        for (let r = 0; r < k; r++) {
            if (rightFreq[r]) {
                const nr = (leftProd[0] * r) % k;
                outFreq[nr] += rightFreq[r];
            }
        }
    }

    build(1, 0, n - 1);

    const ans = new Array(queries.length);
    const tempFreq = new Int32Array(k);
    const tempProd = new Int32Array(1);

    for (let i = 0; i < queries.length; i++) {
        const idx = queries[i][0];
        const val = queries[i][1];
        const start = queries[i][2];
        const x = queries[i][3];

        update(1, 0, n - 1, idx, val);
        query(1, 0, n - 1, start, n - 1, tempFreq, tempProd);
        ans[i] = tempFreq[x];
    }
    return ans;
};