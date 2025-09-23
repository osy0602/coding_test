var isPalindrome = function(x) {
    let xtostr = x.toString();
    if(xtostr === xtostr.split("").reverse().join(""))
        return true;
    else
        return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));