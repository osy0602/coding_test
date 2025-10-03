/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];
    let current = [];

    function DP(start, end){
        if(start === n && end === n){
            answer.push(current.join(''));
            return;
        }
        if(start < n){
            current.push('(');
            DP(start+1, end);
            current.pop();
        }
        if(end<start){
            current.push(')');
            DP(start,end+1);
            current.pop();
        }
    }

    DP(0,0);
    return answer;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1))