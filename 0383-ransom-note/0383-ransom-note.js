/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    for(let ch of ransomNote){
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for(let ch of magazine){
        if(map.has(ch)){
            map.set(ch, map.get(ch) - 1)
            if(map.get(ch) === 0){
                map.delete(ch)
            }
        }
    }
    return map.size === 0
};