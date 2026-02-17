/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');

    let reversed = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversed.join(' ');
};


console.log(reverseWords("Let's take LeetCode contest"));