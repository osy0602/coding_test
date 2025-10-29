/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let last = s.trim().split(" ");
    return last[last.length-1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to    the moon "));
