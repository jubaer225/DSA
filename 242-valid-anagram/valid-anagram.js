/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let hash1 = {}
    let hash2 = {}

    for (let i = 0; i < s.length; i ++) {
        hash1[s[i]] = (hash1[s[i]] || 0) + 1;
        hash2[t[i]] = (hash2[t[i]] || 0) + 1;
    }

    for (let char in hash1) {
        if (hash1[char] !== hash2[char]) {
            return false;
        }
    }

    return true;
};