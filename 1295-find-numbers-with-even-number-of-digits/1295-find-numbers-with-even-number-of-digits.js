/**
 * @param {number[]} nums
 * @return {number}
 */

const findEvenNums = (nums, index, count) =>{
    if(index === nums.length) return count
    if(String(nums[index]).length % 2 === 0){
        count++
    }
    return findEvenNums(nums, index + 1, count)
}

var findNumbers = function(nums) {
    return findEvenNums(nums, 0, 0)
};