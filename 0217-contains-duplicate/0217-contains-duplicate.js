/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
        if(map.get(num) === 2){
            return true
        }
    }
    return false
};