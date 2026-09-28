/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let c = 0
    let maxCnt = 0
    for(let ch of s){
        if(ch === "("){
            c++
        }
        if(ch === ")"){
            maxCnt = Math.max(c, maxCnt)
            c--
        }
    }
    return maxCnt
};