/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let double = s + s;
    let sliced = double.substring(1, double.length - 1);
    return sliced.includes(s);
};

console.log(repeatedSubstringPattern("abab"));