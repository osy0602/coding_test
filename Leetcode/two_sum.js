
var twoSum = function(nums, target) {
    var numbers = {}
    for(let i = 0; i<nums.length; i++){
        var diff = target - nums[i];
        if(diff in numbers){
            return [numbers[diff], i] 
        }
        else{
            numbers[nums[i]] = i
        }
    }
};

console.log(twoSum([3,2,4],6));
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,3],6));