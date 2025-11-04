/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s_arr = s.split("").sort();
    let t_arr = t.split("").sort();

    if(JSON.stringify(s_arr) === JSON.stringify(t_arr)){
        return true;
    }
    else return false;
};

console.log("anagram", "nagaram");
console.log("rat","car");