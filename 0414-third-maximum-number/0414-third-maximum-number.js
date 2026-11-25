/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for(let value of nums){
        if(value > firstMax){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = value;
        }
        else if(value > secondMax && value != firstMax){
            thirdMax = secondMax;
            secondMax = value;
        }
        else if(value > thirdMax && value != secondMax && value != firstMax){
            thirdMax = value;
        }
    }
    return (thirdMax === -Infinity) ? firstMax : thirdMax;
};