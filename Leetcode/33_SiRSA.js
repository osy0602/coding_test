/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Binary Search Problem
*/
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        if(nums[mid] === target){
            return mid;
        }
        //left part is sorted
        if(nums[low] <= nums[mid]){
            if(nums[low] <= target && target <= nums[mid]){
                //remain right part
                high = mid - 1;
            }
            else{
                //remain left part
                low = mid + 1;
            }
        }
        // right part is sorted
        else{
            if(nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));