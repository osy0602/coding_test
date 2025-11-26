/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandsNum = 0;

    for(let i =0;i<grid.length;i++){
        for(let j =0;j<grid[i].length;j++){
            if(grid[i][j] === "1"){
                islandsNum += dfs(grid, i,j);
            }
        }
    }
    function dfs(grid, row, col){
        if(row < 0 || row > grid.length-1 || col <0 || col > grid[row].length -1 || grid[row][col] === "0"){
            return;
        }
        grid[row][col] ="0"

        dfs(grid, row+1, col);
        dfs(grid, row-1, col);
        dfs(grid, row, col+1);
        dfs(grid, row, col-1);

        return 1;
    }
    return islandsNum;
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));