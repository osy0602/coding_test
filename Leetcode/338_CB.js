/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let dp = new Array(n+1).fill(0);

    for(let i =0;i<=n;i++){
        dp[i] = dp[i>>1] + (i&1);
    }
    return dp;
};

console.log(countBits(2));
console.log(countBits(5));