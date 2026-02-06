/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let answer = 0;
    let tmp = 0;
    for(num of nums){
        if(num === 1){
            tmp++;
        }
        else if(num !== 1){
            if(tmp > answer){
                answer = tmp;
                
            }
            tmp = 0;
        }
    }
    if(tmp > answer){
        answer = tmp;
    }
    return answer;
    
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));