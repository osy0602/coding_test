/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zero = [];
    for(let i =0;i<matrix.length;i++){
        for(let j =0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                zero.push([i,j]);
            }
        }
    }
    for(let i =0;i<zero.length;i++){
        const [row, col] = zero[i];

        for(let j = 0;j < matrix.length;j++){
            matrix[j][col] = 0;
        }
        
        for(let j = 0;j<matrix[0].length;j++){
            matrix[row][j] = 0;
        }
    }
    return matrix;
};

console.log(setZeroes([[1,0,1],[0,0,0],[1,0,1]]));
console.log(setZeroes([[0,1]]));