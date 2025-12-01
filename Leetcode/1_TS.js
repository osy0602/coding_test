/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++){
        if(nums.includes(target - nums[i]) && i !== nums.indexOf(target-nums[i])){
            return [i,nums.indexOf(target-nums[i])]
        }
    }
};

console.log(twoSum([2,7,11,15],9));