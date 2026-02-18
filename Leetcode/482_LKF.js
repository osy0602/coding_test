/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let trimS = s.replace(/-/g, "").toUpperCase();

    if(trimS.length === 0){
        return "";
    }
    let answer = "";
    let pointer = 0;

    for(let i = trimS.length - 1; i>= 0; i--){
        answer = trimS[i] + answer;
        pointer++;

        if(pointer === k && i !== 0){
            answer = "-" + answer;
            pointer = 0;
        }
    }
    return answer;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));