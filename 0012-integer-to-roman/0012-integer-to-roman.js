/**
 * @param {number} num
 * @return {string}
 */

function nearMaximum(map, num){
    let maxKey = 0
    for(let key of map.keys()){
        if(maxKey < key && key <= num){
            maxKey = key
        }
    }
    return maxKey
}

var intToRoman = function(num) {

    const map = new Map([[1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"], [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"]])

    let result = ""
    while(num > 0){
        let key = nearMaximum(map, num)
        result += map.get(key)
        num -= key
    }
    return result
};