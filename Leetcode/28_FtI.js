/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needlelen = needle.length;
    if(haystack === needle){
        return 0;
    }
    if(haystack.includes(needle)){
        for(let i=0;i<haystack.length;i++){
            if(haystack.slice(i, i+needlelen) === needle){
                return i;
            }
        }
    } else return -1;
};

console.log(strStr("sadbutsad", "sad"));