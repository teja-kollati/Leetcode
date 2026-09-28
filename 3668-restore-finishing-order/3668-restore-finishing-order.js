/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const map = new Map()
    for(let o of order){
        map.set(o, 0)
    }
    for(let friend of friends){
        map.set(friend, 1)
    }
    const arr = []
    for(let [key, val] of map){
        if(val === 1){
            arr.push(key)
        }
    }
    return arr
};