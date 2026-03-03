/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charSet = new Set();
    let length = 0;

    for(let char of s){
        if(charSet.has(char)){
            charSet.delete(char);
            length += 2;
        } else{
            charSet.add(char);
        }
    }

    if(charSet.size > 0){
        length += 1;
    }
    return length;
};

console.log(longestPalindrome("abccccdd"));