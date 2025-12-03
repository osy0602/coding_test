/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const currentSubset = [];

    function backtrack(startIndex) {
        result.push([...currentSubset]);
        for (let i = startIndex; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1);
            currentSubset.pop();
        }
    }

    backtrack(0);
    return result;
};

console.log(subsets([1,2,3]));