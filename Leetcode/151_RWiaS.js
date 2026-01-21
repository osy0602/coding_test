/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(""); 
    let answer = [];
    let tmp = [];

    for(let i = (words.length - 1); i > -1; i--){
        if(words[i] === " "){
            if(tmp.length > 0) {
                answer.push(tmp.join(''));
                tmp = [];
            }
        }
        else {
            tmp.unshift(words[i]);
        }
    }
    if(tmp.length > 0) answer.push(tmp.join(''));

    return answer.join(' ');
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));