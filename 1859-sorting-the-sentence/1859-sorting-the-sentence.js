/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    return s.split(" ").sort((a,b) => {
        return Number(a[a.length - 1]) - Number(b[b.length - 1]);
    }).map((val) => {
        return val.substring(0, val.length - 1);
    }).join(" ");
};