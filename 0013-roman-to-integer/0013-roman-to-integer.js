/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
    
    let number = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I'){
            if(s[i + 1] === 'V' || s[i + 1] === 'X'){
                number += (map.get(s[i + 1]) - map.get(s[i]))
                i++
            }else{
                number += map.get(s[i])
            }
        }
        else if(s[i] === 'X'){
            if(s[i + 1] === 'L' || s[i + 1] === 'C'){
                number += (map.get(s[i + 1]) - map.get(s[i]))
                i++
            }
            else{
                number += map.get(s[i])
            }
        }
        else if(s[i] === 'C'){
            if(s[i + 1] === 'D' || s[i + 1] === 'M'){
                number += (map.get(s[i + 1]) - map.get(s[i]))
                i++
            }
            else{
                number += map.get(s[i])
            }
        }
        else{
            number += map.get(s[i])
        }
    }

    return number
};