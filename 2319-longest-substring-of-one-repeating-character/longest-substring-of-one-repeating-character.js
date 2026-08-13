/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    s = [...s];

    const n = s.length;
    const tree = Array(4 * n);

    function merge(a, b) {
        if (!a) return b;
        if (!b) return a;

        const res = {
            len: a.len + b.len,
            pref: a.pref,
            suff: b.suff,
            best: Math.max(a.best, b.best),
            left: a.left,
            right: b.right
        };

        if (a.right === b.left) {
            res.best = Math.max(res.best, a.suff + b.pref);

            if (a.pref === a.len)
                res.pref = a.len + b.pref;

            if (b.suff === b.len)
                res.suff = b.len + a.suff;
        }

        return res;
    }

    function build(u, l, r) {
        if (l === r) {
            tree[u] = {
                len: 1,
                pref: 1,
                suff: 1,
                best: 1,
                left: s[l],
                right: s[l]
            };
            return;
        }

        const mid = (l + r) >> 1;

        build(u << 1, l, mid);
        build(u << 1 | 1, mid + 1, r);

        tree[u] = merge(tree[u << 1], tree[u << 1 | 1]);
    }

    function update(u, l, r, pos, c) {
        if (l === r) {
            s[pos] = c;

            tree[u] = {
                len: 1,
                pref: 1,
                suff: 1,
                best: 1,
                left: c,
                right: c
            };

            return;
        }

        const mid = (l + r) >> 1;

        if (pos <= mid)
            update(u << 1, l, mid, pos, c);
        else
            update(u << 1 | 1, mid + 1, r, pos, c);

        tree[u] = merge(tree[u << 1], tree[u << 1 | 1]);
    }

    build(1, 0, n - 1);

    const ans = [];

    for (let i = 0; i < queryIndices.length; ++i) {
        update(
            1,
            0,
            n - 1,
            queryIndices[i],
            queryCharacters[i]
        );

        ans.push(tree[1].best);
    }

    return ans;
};