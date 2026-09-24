/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()

    for(let str of strs){
        let key = str.split("").sort().join("")
        if(!map.has(key)){
            map.set(key, [])
        }
        map.get(key).push(str)
    }
    const result = [...map.values()].sort((a, b) => {
        return a.length - b.length
    })
    return result
};