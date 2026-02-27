/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let Akeyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    
    let charDict = {};
    Akeyboard.forEach((row, index) => {
        for (const char of row) {
            charDict[char] = index;
        }
    });
    return words.filter(word => {
        if (!word.length) return false;
        
        let charSet = new Set();
        for (const char of word.toLowerCase()) {
            charSet.add(charDict[char]);
        }
        
        return charSet.size === 1;
    });
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));