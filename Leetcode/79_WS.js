/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i = 0;i<board.length;i++){
        for(let j = 0;j<board[0].length;j++){
            if(board[i][j] === word[0] && dfs(i,j,0)) return true;
        }
    }

    return false;

    function dfs(r, c, i){
        if(word.length === i) return true;
        if(r >= board.length || r < 0 || c < 0 || c >= board[0].length || board[r][c] !== word[i]) return false;

        board[r][c] = '#';

        if(dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1)) return true;

        board[r][c] = word[i];
    }
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));