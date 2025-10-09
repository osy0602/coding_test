/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    let answer = [0,1,2];
    for(let i = 3;i<n+1;i++){
        answer.push(answer[i-1] + answer[i-2])
    }
    return answer[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
