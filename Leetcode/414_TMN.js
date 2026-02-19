/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numSet = [...new Set(nums)];

    numSet.sort((a,b) => b - a);

    if(numSet.length >= 3){
        return numSet[2];
    } else{
        return numSet[0];
    }
};

console.log(thirdMax([3,2,1]));