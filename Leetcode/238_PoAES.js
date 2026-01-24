/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1);

    let first = 1;
    for(let i =0;i<nums.length;i++)
    {
        answer[i] = first;
        first *= nums[i];
    }

    let second = 1;
    for(let i =nums.length - 1;i >= 0;i--)
    {
        answer[i] *= second;
        second *= nums[i];
    }
    return answer;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));