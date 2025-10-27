/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let stack = [];
    let answer = [];
    for(let i =0;i<nums.length;i++){
        
        if(stack.length < 1){
            stack.push(nums[i]);
        }
        else{
            if(nums[i] - nums[i-1] === 1){
                stack.push(nums[i]);
            }
            else{
                if(stack.length > 1){
                    answer.push(stack[0] + "->" + stack[stack.length -1]);
                    stack.splice(0);
                }
                else {
                    answer.push(stack[0].toString());
                    stack.splice(0);
                }
                stack.push(nums[i]);
            }
        }

    }
    if(stack.length !== 0){
        if(stack.length > 1){
            answer.push(stack[0] + "->" + stack[stack.length -1]);
        }
        else{
            answer.push(stack[0].toString());
        }
    }
    return answer;
};

console.log(summaryRanges([0,1,2,4,5,7]));