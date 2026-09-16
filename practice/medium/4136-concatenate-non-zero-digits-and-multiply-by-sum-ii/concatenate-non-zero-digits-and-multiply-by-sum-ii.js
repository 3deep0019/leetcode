/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */

const MOD = 1000000007;
const MAX = 100001;

const pow = new Int32Array(MAX);
pow[0] = 1;

for (let i = 1; i < MAX; i++)
    pow[i] = (pow[i - 1] * 10) % MOD;
    
var sumAndMultiply = function(s, queries) {
    // TODO: implement
    
};