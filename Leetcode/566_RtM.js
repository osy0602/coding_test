/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }

    let first = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            first.push(mat[i][j]);
        }
    }
    let reshaped = [];
    for (let i = 0; i < r; i++) {
        reshaped.push([]);
        for (let j = 0; j < c; j++) {
            let index = i * c + j;
            reshaped[i][j] = first[index];
        }
    }

    return reshaped;
};