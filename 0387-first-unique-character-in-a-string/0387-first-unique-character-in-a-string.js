/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i], [])
        }
        map.get(s[i]).push(i)
    }
    console.log(map)
    for(let key of map.keys()){
        if(map.get(key).length === 1){
            return map.get(key)[0]
        }
    }
    return -1
};