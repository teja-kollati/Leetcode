/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const map = new Map()
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    for(let word of words){
        let key = ""
        for(let i = 0; i < word.length; i++){
            key += morseCodes[word[i].charCodeAt(0) - 97]
        }
        console.log(key)
        map.set(key, (map.get(key) || 0) + 1)
    }
    console.log(map)
    return map.size
};