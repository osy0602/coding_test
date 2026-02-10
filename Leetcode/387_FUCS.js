/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let alp = new Array(26).fill(0);
    for(let letter of s){
        alp[letter.charCodeAt(0) - 97]++;
    }
    
    for(let i = 0; i<s.length; i++){
        if(alp[s[i].charCodeAt(0) - 97] === 1){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));