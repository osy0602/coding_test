/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);

    let num1_pt = 0;
    let num2_pt = 0;

    let answer = [];

    while(num1_pt < nums1.length && num2_pt< nums2.length){
        if(nums1[num1_pt] === nums2[num2_pt]){
            answer.push(nums1[num1_pt]);
            num1_pt++;
            num2_pt++;
        } else if(nums1[num1_pt] < nums2[num2_pt]){
            num1_pt++;
        } else{
            num2_pt++;
        }
    }
    return answer;
    
};

console.log(intersect([1,2,2,1],[2,2]));