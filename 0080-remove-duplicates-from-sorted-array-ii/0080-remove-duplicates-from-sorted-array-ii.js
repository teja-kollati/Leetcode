/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[k]){
            nums[k + 2] = nums[i];
            k++;
        }
    }

    return k + 2;
};