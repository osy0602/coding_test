var logestpalindrome = function(s) {
    let start=0;
    let maxlen = 1;

    function twopointer(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const tmp = right - left + 1;
            if(tmp > maxlen){
                maxlen = tmp;
                start = left;
            }
            left -= 1;
            right += 1;
        }
    }

    for(let i = 0; i<s.length; i++){
        twopointer(i,i);
        twopointer(i,i+1);
    }

    return s.slice(start, start+maxlen);
}

console.log(logestpalindrome('babad'));