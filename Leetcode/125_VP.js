/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    let trimstring = s.replace(reg, "");
    trimstring = trimstring.toLowerCase();
    let left = 0;
    let right = trimstring.length - 1;
    while(left <= right){
        if(trimstring[left]!== trimstring[right]){
            return false;
        }
        ++left;
        --right;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));