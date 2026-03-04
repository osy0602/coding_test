/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(remaining, path, start) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        
        if (remaining < 0) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(remaining - candidates[i], path, i);
            path.pop();
        }
    }

    candidates.sort((a, b) => a - b);
    backtrack(target, [], 0);
    return result;
};