/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let i = 0;
    while(s[i] === "a" && i < s.length){
        i++;
    }

    while(s[i] !== "a" && i <= s.length){
        i++;
    }

    if(i >= s.length){
        return true;
    }

    return false;
};