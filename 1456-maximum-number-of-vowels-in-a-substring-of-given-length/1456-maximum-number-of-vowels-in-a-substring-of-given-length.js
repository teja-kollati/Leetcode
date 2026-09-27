/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function isVowel(ch){
    return (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
}

var maxVowels = function(s, k) {
    let cnt = 0
    let maxCnt = 0
    for(let i = 0; i < k; i++){
        if(isVowel(s[i])){
            cnt++
        }
    }
    maxCnt = cnt

    for(let i = k; i < s.length; i++){
        if(isVowel(s[i])){
            cnt++
        }
        if(isVowel(s[i - k])){
            cnt--
        }
        maxCnt = Math.max(cnt, maxCnt)
    }
    return maxCnt
};