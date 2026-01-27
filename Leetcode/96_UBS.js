/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i<= n; i++){
        for(let j = 0;j <= i -1; j++){
            let right = i - 1 - j;
            dp[i] += dp[j] * dp[right];
        }
    }
    return dp[n];
};

console.log(numTrees(3));