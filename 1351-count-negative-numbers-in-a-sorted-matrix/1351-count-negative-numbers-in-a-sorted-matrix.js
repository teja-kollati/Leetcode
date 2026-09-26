/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let cnt = 0
    for(let arr of grid){
        let left = 0
        let right = arr.length - 1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(arr[mid] >= 0){
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }
        cnt += arr.length - left
    }
    return cnt
};