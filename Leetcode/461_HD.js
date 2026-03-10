/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xory = x ^ y;
    let answer = 0;

    while(xory > 0){
        xory = xory & (xory - 1);
        answer++;
    }
    return answer;
};

console.log(hammingDistance(1,4));