/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let answer = "";

    while (columnNumber > 0) {
        columnNumber--; 
        const left = columnNumber % 26; 
        const alp = String.fromCharCode('A'.charCodeAt(0) + left); 
        answer = alp + answer; 
        columnNumber = Math.floor(columnNumber / 26); 
    }

    return answer;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));