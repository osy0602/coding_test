/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    let answer = 0;
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                answer += 4;
                if(i > 0 && grid[i-1][j] === 1){
                    answer-= 2;
                }
                if(j > 0 && grid[i][j-1] === 1){
                    answer -= 2;
                }
            }
        }
    }
    return answer;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));