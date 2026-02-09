/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let answer = 0;
    let pow = 1; 
    for(let i = (columnTitle.length -1);i>-1;i--)
    {
        answer += (columnTitle[i].charCodeAt(0) - 64) * pow;
        pow = pow * 26;
    }
    return answer;
};

console.log(titleToNumber("ZY"));