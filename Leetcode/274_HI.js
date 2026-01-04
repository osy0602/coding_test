/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let paper = 0;
    let n  = citations.length;
    let counts = new Array(n+1).fill(0);

    for(let c of citations){
        if(c >= n){
            counts[n]++;
        }else{
            counts[c]++;
        }
    }

    for(let h = n; h>= 0; h--){
        paper += counts[h];
        if(paper >= h){
            return h;
        }
    }
    return 0;

};

console.log(hIndex([3,0,6,1,5]));