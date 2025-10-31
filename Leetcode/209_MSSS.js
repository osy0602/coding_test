/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
        while(sum >= target){
            minLength = Math.min(minLength, i - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));