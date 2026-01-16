/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const currentCombination = [];

    function backtrack(startNum) {
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = startNum; i <= n; i++) {
            currentCombination.push(i);
            backtrack(i + 1);
            currentCombination.pop();
        }
    }

    backtrack(1);
    return result;
};

console.log(combine(4,2));