/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const set = new Set(friends)
    const arr = []
    
    for(let o of order){
        if(set.has(o)){
            arr.push(o)
        }
    }
    return arr
};