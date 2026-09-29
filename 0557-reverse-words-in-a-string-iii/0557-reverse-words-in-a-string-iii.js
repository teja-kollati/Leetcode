/**
 * @param {string} s
 * @return {string}
 */

// function reverse(word){
//     let left = 0
//     let right = word.length - 1

//     [word[left], word[right]] = [word[right], word[left]]
// }

var reverseWords = function(s) {
    const words = s.split(" ")
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("")
    }
    return words.join(" ")
};