/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */
var twoSum = function(nums, target) {
    // traversal nums
    for(let i = 0;i<nums.length;i++){
        if(nums.includes(target - nums[i]) && i !== nums.indexOf(target-nums[i])){
            //if target - present traversal num is inside of the nums and not same number than we can return the present number and target - present number
            return [i,nums.indexOf(target-nums[i])]
        }
    }
};

console.log(twoSum([2,7,11,15],9));