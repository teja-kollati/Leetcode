/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const string = (s.length > t.length) ? s : t
    const stringTwo = (s.length > t.length) ? t : s

    const map = new Map()

    for(let ch of string){
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for(let ch of stringTwo){
        map.set(ch, map.get(ch) - 1)
        if(map.get(ch) === 0){
            map.delete(ch)
        }
    }
    return [...map.keys()].join("")
};