/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sMap.has(charS)) {
            if (sMap.get(charS) !== charT) {
                return false;
            }
        } else {
            sMap.set(charS, charT);
        }

        if (tMap.has(charT)) {
            if (tMap.get(charT) !== charS) {
                return false;
            }
        } else {
            tMap.set(charT, charS);
        }
    }

    return true;
};

console.log(isIsomorphic("egg","add"));