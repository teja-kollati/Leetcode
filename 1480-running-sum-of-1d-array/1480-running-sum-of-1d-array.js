/**
 * @param {number[]} nums
 * @return {number[]}
 */

const prefixSum = (nums, index, sum, res) =>{
    if(index === nums.length){
        return res
    }
    sum += nums[index]
    res.push(sum)
    return prefixSum(nums, index + 1, sum, res)
}

var runningSum = function(nums) {
    return prefixSum(nums, 0, 0, [])
};