/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    let current = 0;
    let maxsum = nums[0];

    for(let i =0;i<nums.length;i++){
        current += nums[i];
        maxsum = Math.max(current, maxsum);
        if(current < 0){
            current = 0;
        }
    }
    return maxsum;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));