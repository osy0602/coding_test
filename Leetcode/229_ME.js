/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let num1 = null
    let num2 = null;
    let cnt1 = 0
    let cnt2 = 0;

    for (const num of nums) {
        if (num === num1) {
            cnt1++;
        } else if (num === num2) {
            cnt2++;
        } else if (cnt1 === 0) {
            num1 = num;
            cnt1 = 1;
        } else if (cnt2 === 0) {
            num2 = num;
            cnt2 = 1;
        } else {
            cnt1--;
            cnt2--;
        }
    }

    let answer = [];
    let std = Math.floor(nums.length / 3);
    cnt1 = 0;
    cnt2 = 0;

    for (const num of nums) {
        if (num === num1) cnt1++;
        else if (num === num2) cnt2++;
    }

    if (cnt1 > std) answer.push(num1);
    if (cnt2 > std) answer.push(num2);

    return answer;
};

console.log(majorityElement([3,2,3]));