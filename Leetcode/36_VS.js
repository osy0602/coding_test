/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j];

            if (char === '.')
                continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j/ 3);

            if (rows[i].has(char) || cols[j].has(char) || boxes[boxIndex].has(char)) {
                return false; 
            }

            rows[i].add(char);
            cols[j].add(char);
            boxes[boxIndex].add(char);
        }
    }

    return true;
}

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));