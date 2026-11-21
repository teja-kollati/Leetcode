/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let mi = m - 1;
    let ni = n - 1;
    let right = m + n - 1;


    while(ni >= 0){
        if(mi >= 0 && nums1[mi] > nums2[ni]){
            nums1[right] = nums1[mi];
            mi--;
        }
        else{
            nums1[right] = nums2[ni];
            ni--;
        }
        right--;
    }

};