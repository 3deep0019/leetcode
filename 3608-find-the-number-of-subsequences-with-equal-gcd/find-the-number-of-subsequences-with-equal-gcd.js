/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    let n = nums.length;
    let MAX= 200; 
    let dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: MAX + 1 }, () =>
        Array(MAX + 1).fill(-1)
    )
);
    
    function rec(i,gcd1,gcd2){
        if(i===nums.length){
            if(gcd1 !==0){
                if(gcd1==gcd2){
                    return 1
                }
                else return 0
            }
                else return 0
            
        }
        
        if(dp[i][gcd1][gcd2] !== -1) return dp[i][gcd1][gcd2];

        let ans = (rec(i+1,gcd(gcd1,nums[i]),gcd2) + rec(i+1,gcd1,gcd(gcd2,nums[i])) + rec(i+1,gcd1,gcd2))% MOD
        dp[i][gcd1][gcd2] = ans;
        return ans;
    }
    let gcdDp = Array.from({length: MAX+1}, () => Array(MAX+1).fill(-1));
   function gcd(a,b){
    let x=a;
    let y=b
    if(gcdDp[x][y] !== -1) return gcdDp[x][y];
    
        if(a ==0) return b;
        else{
            while (b !== 0) {
                 [a, b] = [b, a % b];
            }
           gcdDp[x][y] = a;
           return gcdDp[x][y]
        }
    }
    return rec(0,0,0)
};