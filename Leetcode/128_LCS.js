/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let setnums = new Set(nums);
    let longest = 0;
    //search for the start of a sequence
    for(let num of setnums) {
        if(!setnums.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            //add 1 to the start number until the next number is not in the set
            while(setnums.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longest = Math.max(longest, currentStreak);
        }
    }
    return longest;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));