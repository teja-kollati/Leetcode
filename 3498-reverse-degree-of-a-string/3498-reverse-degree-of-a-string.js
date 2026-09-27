/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let degree = 0
    for(let i = 0; i < s.length; i++){
        degree += ((123 - s[i].charCodeAt(0)) * (i + 1))
    }
    return degree
};