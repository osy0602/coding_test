/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length){
        return false;
    }
    let s_pointer = 0;
    let t_pointer = 0;

    while(s_pointer < s.length && t_pointer < t.length){
        if(s[s_pointer] === t[t_pointer]){
            ++s_pointer;
            ++t_pointer;
        }
        else{
            ++t_pointer;
        }
    }
    console.log(s_pointer, t_pointer);
    if(s_pointer === s.length && t_pointer <= t.length){
        return true;
    }
    else return false;
};
console.log(isSubsequence("abc","ahbgdc"));