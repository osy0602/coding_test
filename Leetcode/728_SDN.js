/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let answer = new Array();
    for(let i = left;i<=right;i++){
        if(numberCheck(i)){
            answer.push(i);
        }
    }
    return answer;
};
function numberCheck(num){
    let numStr = String(num);
    for(let ch of numStr){
        let digit = parseInt(ch, 10);
        if(digit === 0 || num % digit !== 0){
            return false;
        }
    }
    return true;
}

console.log(selfDividingNumbers(1,22));