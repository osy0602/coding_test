/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let answer = [''];

    let stack = [];
    let current = 0;

    for(let c of s){
        if(!isNaN(Number(c))){
            current = current * 10 + Number(c);
        }
        else if(c === "["){
            stack.push(current);
            answer.push('');
            current = 0;
        }
        else if(c === ']'){
            let tmp = stack.pop();
            let substr = answer.pop();
            answer[answer.length - 1] += substr.repeat(tmp);
        }
        else{
            answer[answer.length-1] += c;
        }
    }

    return answer[0];
};

console.log(decodeString("3[a]2[bc]"));