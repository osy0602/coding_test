/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let answer = 0;
    while (n !== 0) {
        n = n & (n - 1);
        answer++;
    }
    return answer;
};

console.log(hammingWeight(11));