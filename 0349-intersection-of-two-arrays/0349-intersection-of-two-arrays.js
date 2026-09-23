/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const mapOne = new Map()
    const mapTwo = new Map()

    for(let num of nums1){
        mapOne.set(num, (mapOne.get(num) || 0) + 1)
    }
    for(let num of nums2){
        mapTwo.set(num, (mapTwo.get(num) || 0) + 1)
    }

    let set = new Set()
    for(let key of mapOne.keys()){
        if(mapTwo.has(key)){
            set.add(key)
        }
    }
    
    for(let key of mapTwo.keys()){
        if(mapOne.has(key)){
            set.add(key)
        }
    }
    return [...set]
};