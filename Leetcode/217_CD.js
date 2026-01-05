/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let setNums = new Set(nums);
    return nums.length !== setNums.size;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));