class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int smallcount = 0;
        int largecount = 0;

        for(int i = 0; i < nums.length; i++){
            if(nums[i] < pivot){
                smallcount++;
            }
            else if(nums[i] > pivot){
                largecount++;
            }
        }

        int small[] = new int[smallcount];
        int large[] = new int[largecount];

        int k = 0, j = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] < pivot){
                small[j++] = nums[i];
            }
            else if(nums[i] > pivot){
                large[k++] = nums[i]; 
            }
        }

        k = 0;
        for(int i = 0; i < smallcount; i++){
            nums[k++] = small[i];
        }

        for(int i = 0; i < nums.length - (smallcount + largecount); i++){
            nums[k++] = pivot;
        }

        for(int i = 0; i < largecount; i++){
            nums[k++] = large[i];
        }

        return nums;
    }
}