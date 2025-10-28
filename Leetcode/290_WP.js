/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sArray = s.split(" ");
    if(sArray.length !== pattern.length){
        return false;
    }
    let patternMap = new Map();
    let unique = new Set();
    for(let i =0;i<pattern.length;i++){
        if(!patternMap.has(pattern[i])){
            if(unique.has(sArray[i])){
                return false;
            }
            patternMap.set(pattern[i], sArray[i]);
            unique.add(sArray[i]);
        }
        else if(sArray[i] !== patternMap.get(pattern[i]))
            return false;
        

    }
    return true;

};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));