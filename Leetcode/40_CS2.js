/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let answer = [];

    function backtrack(start, curent, tmp) {
        if (tmp === target) {
            answer.push([...curent]);
            return;
        }

        if (tmp > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            curent.push(candidates[i]);
            backtrack(i + 1, curent, tmp + candidates[i]);
            curent.pop();
        }
    }

    backtrack(0, [], 0);
    return answer;
};

console.log(combinationSum2([10,1,2,7,6,1,5],8));