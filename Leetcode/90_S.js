/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let answer  = [];
    nums.sort((a,b) => a - b);

    function dfs(i, nums, slate){
        if(i === nums.length){
            answer.push(slate.slice());
            return;
        }
        dfs(i+1, nums, slate);
        slate.push(nums[i]);
        dfs(i+1, nums, slate);
        slate.pop();
    }
    dfs(0, nums, []);
    let hash = {};
    for(let a of answer){
        if(hash[a]) continue;
        hash[a] = a;
    }
    return Object.values(hash);
}

console.log(subsetsWithDup([1,2,2]));