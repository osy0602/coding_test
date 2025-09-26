/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const myMap = new Map();
    const majoritySize = nums.length / 2;
    for(let i = 0;i<nums.length;i++){
        if(myMap.has(nums[i])){
            let tmp = myMap.get(nums[i]);
            myMap.set(nums[i], ++tmp);
        }
        else{
            myMap.set(nums[i], 1);
        }
        if (myMap.get(nums[i]) > majoritySize) {
            return nums[i];
        }
    }
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([1000000000,1000000000,-1000000000,-1000000000,-1000000000]))