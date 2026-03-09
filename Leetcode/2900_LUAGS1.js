/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let answer = [];
    if (words.length === 0) return answer;
    
    answer.push(words[0]);
    let lastGroup = groups[0];
    
    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== lastGroup) {
            answer.push(words[i]);
            lastGroup = groups[i];
        }
    }
    
    return answer;
};

console.log(getLongestSubsequence(["e","a","b"],[0,0,1]));