/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortingarr = strs.map((str) => str.split("").sort().join(""));

    let map = {};
    for(let i = 0;i< sortingarr.length;i++){
        if(!map[sortingarr[i]]){
            map[sortingarr[i]] = [strs[i]];
        }else{
            map[sortingarr[i]].push(strs[i]);
        }
    }
    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))