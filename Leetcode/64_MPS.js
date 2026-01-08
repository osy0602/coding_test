/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    const dp = Array.from({length: row }, () => Array(col).fill(0));
    
    for(let i =0;i<row;i++){
        for(let j =0;j<col;j++){
            if(i===0 && j ===0){
                dp[i][j] = grid[i][j];
            }
            else if (i===0){
                dp[i][j] = grid[i][j] + dp[i][j-1]; 
            }
            else if (j===0){
                dp[i][j] = grid[i][j] + dp[i-1][j];
            }
            else{
                dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[row-1][col-1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3],[4,5,6]]));