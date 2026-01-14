/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let answer = 0;
    for (let i = 0; i < 32; i++) {
    answer <<= 1;
    answer |= (n & 1);
    n >>>= 1;
  }
  return answer >>> 0;
};

console.log(reverseBits(43261596));