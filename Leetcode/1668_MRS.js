/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0;
    let repeatedWord = word;
    while (sequence.includes(repeatedWord)) {
        count++;
        repeatedWord = word.repeat(count + 1); 
  }
  return count; 
};

console.log(maxRepeating("ababc","ab"));