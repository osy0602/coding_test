/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate = 0;
    let missing = 0;
    let n = nums.length;
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            duplicate = num;
        } else {
            seen.add(num);
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
};

console.log(findErrorNums([1,2,2,4]));