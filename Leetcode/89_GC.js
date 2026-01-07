/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let answer = [0];

    for(let i =0;i<n;i++){
        let current = answer.length;
        let add = 1 << i;
        for(let j = current-1;j>=0;j--){
            let mirror = answer[j] + add;
            answer.push(mirror);
        }
    }
    return answer;
};

console.log(grayCode(2))