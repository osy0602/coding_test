
var LSWRC = function(s) {
    let tmp = [];
    let longest = 0;

    for (let i =0;i < s.length; i++)
    {
        const current = tmp.indexOf(s[i]);
        if (current !== -1)
        {
            tmp.splice(0, current +1);
        }

        tmp.push(s[i]);

        longest = Math.max(
            longest,
            tmp.length
        );
    }
    return longest;
    
};

console.log(LSWRC("abcabcbb"));
console.log(LSWRC("bbbbb"));
console.log(LSWRC("pwwkew"));