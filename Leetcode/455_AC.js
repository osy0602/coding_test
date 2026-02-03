/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let gpt = 0;
    let spt = 0;
    let answer = 0;
    while(gpt < g.length && spt < s.length){
        if(s[spt] >= g[gpt]){
            answer++;
            gpt++;
        }
        spt++;
    }
    return answer;

};

console.log(findContentChildren([1,2],[1,2,3]));