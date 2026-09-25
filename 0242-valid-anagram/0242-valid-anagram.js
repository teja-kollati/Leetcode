/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for(let ch of t){
        map.set(ch, map.get(ch) - 1)
        if(map.get(ch) === 0){
            map.delete(ch)
        }
    }
    return map.size === 0
};