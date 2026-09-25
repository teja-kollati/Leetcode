/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = []
    for(let num of nums){
        num = num.toString().split("")
        res.push(...num.map(Number))
    }
    return res
};