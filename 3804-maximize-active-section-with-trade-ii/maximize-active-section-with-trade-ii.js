/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function(s, queries) {
    let n = s.length;
    let total_ones = 0;
    
    for (let i = 0; i < n; i++) {
        if (s[i] === '1') total_ones++;
    }
    
    let type = [];
    let start = [];
    let end_idx = [];
    
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) {
            j++;
        }
        type.push(parseInt(s[i]));
        start.push(i);
        end_idx.push(j - 1);
        i = j;
    }
    
    let N = type.length;
    
    let pos_to_seg = new Int32Array(n);
    for (let i = 0; i < N; i++) {
        for (let j = start[i]; j <= end_idx[i]; j++) {
            pos_to_seg[j] = i;
        }
    }
    
    let ans = new Int32Array(N);
    for (let i = 1; i < N - 1; i++) {
        if (type[i] === 1) {
            ans[i] = (end_idx[i - 1] - start[i - 1] + 1) + (end_idx[i + 1] - start[i + 1] + 1);
        }
    }
    
    let log_table = new Int32Array(N + 1);
    for (let i = 2; i <= N; i++) {
        log_table[i] = log_table[Math.floor(i / 2)] + 1;
    }
    
    let K = log_table[N] + 1;
    let st = Array.from({ length: K }, () => new Int32Array(N));
    
    for (let i = 0; i < N; i++) {
        st[0][i] = ans[i];
    }
    
    for (let j = 1; j < K; j++) {
        for (let i = 0; i + (1 << j) <= N; i++) {
            st[j][i] = Math.max(st[j - 1][i], st[j - 1][i + (1 << (j - 1))]);
        }
    }
    
    const queryRMQ = (L_q, R_q) => {
        if (L_q > R_q) return 0;
        let j = log_table[R_q - L_q + 1];
        return Math.max(st[j][L_q], st[j][R_q - (1 << j) + 1]);
    };
    
    const evalSeg = (idx, L, R, segL, segR) => {
        if (idx <= segL || idx >= segR) return 0;
        if (type[idx] === 0) return 0;
        
        let left_len = 0;
        if (idx - 1 === segL) left_len = Math.max(0, end_idx[idx - 1] - L + 1);
        else left_len = end_idx[idx - 1] - start[idx - 1] + 1;
        
        let right_len = 0;
        if (idx + 1 === segR) right_len = Math.max(0, R - start[idx + 1] + 1);
        else right_len = end_idx[idx + 1] - start[idx + 1] + 1;
        
        return left_len + right_len;
    };
    
    let res = [];
    
    for (let q of queries) {
        let L = q[0];
        let R = q[1];
        
        let segL = pos_to_seg[L];
        let segR = pos_to_seg[R];
        
        if (segR - segL < 2) {
            res.push(total_ones);
            continue;
        }
        
        let max_gain = 0;
        max_gain = Math.max(max_gain, evalSeg(segL + 1, L, R, segL, segR));
        max_gain = Math.max(max_gain, evalSeg(segR - 1, L, R, segL, segR));
        
        if (segL + 2 <= segR - 2) {
            max_gain = Math.max(max_gain, queryRMQ(segL + 2, segR - 2));
        }
        
        res.push(total_ones + max_gain);
    }
    
    return res;
};