/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magaHash = new Map();

    for(let char of magazine){
        magaHash.set(char, (magaHash.get(char) || 0) + 1);
    }
    
    for(let char of ransomNote){
        if(!magaHash.has(char) || magaHash.get(char) <= 0){
            return false;
        }
        magaHash.set(char, magaHash.get(char) - 1);
    }
    
    return true;
};

console.log(canConstruct("aa", "ab"))
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))