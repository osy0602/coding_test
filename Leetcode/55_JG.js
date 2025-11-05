/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let end = nums.length - 1;
    for(let i = nums.length -1; i>=0;i--){
        if(i+nums[i]>=end){
            end = i;
        }
    }

    return end === 0;
};

console.log(canJump([2,3,1,1,4]));