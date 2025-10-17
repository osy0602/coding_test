/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let n = nums.length;
    k = k % n;

    if(k===0) return;

    let front = nums.slice(n - k);
    let back = nums.slice(0, n - k);
    
    let tmp = front.concat(back);
    nums.splice(0,n,...tmp);

    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3))