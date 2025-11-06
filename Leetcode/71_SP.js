/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let path_arr = path.split("/").filter(c => c !== '');
    let answer = [];

    for(let dir of path_arr){
        if(dir ==='.'){
            continue;
        }
        else if(dir === ".."){
            if(answer.length > 0){
                answer.pop();
            }
        }
        else{
            answer.push(dir);
        }
    }

    return '/'+answer.join('/');
};

console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/home//foo/"));