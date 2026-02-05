/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let oneset = new Set(nums1);
    let twoset = new Set(nums2);

    let answer = [];
    for(let num of oneset){
        if(twoset.has(num)){
            answer.push(num);
        }
    }
    return answer;

    
};

console.log(intersection([1,2,2,1],[2,2]));