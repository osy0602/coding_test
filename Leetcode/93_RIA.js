/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    function backtrack(path, start) {
        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join("."));
            }
            return;
        }

        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            const segment = s.substring(start, start + len);
            const val = parseInt(segment);

            // availity check
            if (segment.startsWith("0") && segment.length > 1) continue;
            if (val > 255) 
                continue;

            path.push(segment);
            backtrack(path, start + len);
            path.pop(); // backtracking
        }
    }

    backtrack([], 0);
    return result;
};

console.log(restoreIpAddresses("25525511135"));