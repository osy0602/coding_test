/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let n = s.length;
    let res = [];
    let path = [];
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }
    function backtrack(start) {
        if (start === n) {
            res.push([...path]);
            return;
        }

        for (let end = start; end < n; end++) {
            if (dp[start][end]) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1);
                path.pop();
            }
        }
    }

    backtrack(0);
    return res;
};

console.log(partition("aab"));