/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */

function isInside(circle, point){
    let cx = circle[0]
    let cy = circle[1]
    let r = circle[2]

    let dist = Math.sqrt(Math.pow(cx - point[0], 2) + Math.pow(cy - point[1], 2))
    return (dist <= r)
}

var countPoints = function(points, queries) {
    let result = new Array(queries.length).fill(0)
    for(let i = 0; i < queries.length; i++){
        for(let point of points){
            if(isInside(queries[i], point)){
                result[i]++
            }
        }
    }
    return result
};