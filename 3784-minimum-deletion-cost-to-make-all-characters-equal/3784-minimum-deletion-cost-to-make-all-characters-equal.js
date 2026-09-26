/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    const map = new Map()
    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + cost[i])
    }
    console.log(map)
    let maximumCost = 0
    let minimumDeletionCost = 0

    for(let val of map.values()){
        if(val > maximumCost){
            minimumDeletionCost += maximumCost
            maximumCost = val
        }
        else{
            minimumDeletionCost += val
        }
    }
    return minimumDeletionCost
};