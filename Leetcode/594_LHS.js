/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let countMap = new Map();
    let max = 0;

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let [num, count] of countMap) {
        if (countMap.has(num + 1)) {
            max = Math.max(max, count + countMap.get(num + 1));
        }
    }

    return max;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));