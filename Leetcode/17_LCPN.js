/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let answer = [];
    const numalp = {
        '2' : ['a','b','c'],
        '3' : ['d','e','f'],
        '4' : ['g', 'h', 'i'],
        '5' : ['j', 'k', 'l'],
        '6' : ['m', 'n', 'o'],
        '7' : ['p', 'q', 'r', 's'],
        '8' : ['t', 'u', 'v'],
        '9' : ['w', 'x', 'y', 'z'],
    }
    if (digits.length === 0){
        return answer;
    }
    let nums = digits.split('');
    
    function recur(index, sentence){
        if(index === nums.length){
            answer.push(sentence);
            return;
        } 
        let digit = nums[index];
        const letter = numalp[digit];
        for(let i = 0;i<letter.length;i++){
            recur(index+1, sentence+letter[i]);
        }
    }

    recur(0,'');
    return answer;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));