/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numSet = new Set(nums);
    let maxN = nums.length;
    let arrN = new Set(Array.from({ length: maxN }, (_, i) => i + 1));
    return Array.from(arrN.difference(numSet));

};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));