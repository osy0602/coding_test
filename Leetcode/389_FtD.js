/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ssum =0;
    let tsum = 0;
    for(let i = 0;i<s.length;i++){
        ssum += s.charCodeAt(i);
    }
    for(let i =0;i<t.length;i++){
        tsum += t.charCodeAt(i);
    }
    console.log(ssum, tsum);
    return String.fromCharCode(tsum-ssum);
};

console.log(findTheDifference("abcd", "abcde"));