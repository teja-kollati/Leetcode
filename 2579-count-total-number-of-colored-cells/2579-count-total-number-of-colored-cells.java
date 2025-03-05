class Solution {
    public long coloredCells(int n) {
        long count = 1;
        for(int i = 2; i <= n; i++){
            count += (4*(i - 1));
        }
        return count;
    }
}