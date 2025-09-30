/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = [...new Set(nums)];
    for(let i = 0;i<unique.length;i++){
        nums[i] = unique[i];
    }
    for(let i = unique.length;i<nums.length;i++){
        nums[i] = undefined;
    }
    return unique.length;
};

console.log(removeDuplicates([1,1,2]));