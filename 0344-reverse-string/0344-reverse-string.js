/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

reverse = (s, left, right) =>{
    if(left >= right){
        return s
    }
    [s[left], s[right]] = [s[right], s[left]]

    return reverse(s, left + 1, right - 1)
}

var reverseString = function(s) {
    return reverse(s, 0, s.length - 1)
};