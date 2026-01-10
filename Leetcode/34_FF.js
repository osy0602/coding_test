/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let findBound = (nums, target, isFirst) => {
        let left = 0;
        let right = nums.length -1;
        let pos = -1;

        while(left <= right){
            let mid = Math.floor(left + (right - left) / 2);
            if(nums[mid] === target){
                pos = mid;
                if(isFirst){
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            } else if(nums[mid] < target){
                left = mid + 1;
            } else{
                right = mid - 1;
            }
        }
        return pos;
    }
    let first = findBound(nums, target, true);
    if(first === -1){
        return [-1, -1];
    }
    let last = findBound(nums, target, false);
    return [first, last]
};

console.log(searchRange([5,7,7,8,8,10]));