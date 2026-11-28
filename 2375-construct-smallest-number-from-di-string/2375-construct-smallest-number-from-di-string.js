/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const stack = [];
    let result = "";
    let currentNum = 0;
    
    for(let i = 0; i < pattern.length; i++){
        currentNum++;
        if(pattern[i] === "I"){
            result += currentNum;
            while(stack.length > 0){
                result += stack.pop();
            }
        }
        else{
            stack.push(currentNum);
        }
    }
    result += ++currentNum;

    while(stack.length != 0){
        result += stack.pop();
    }
    return result;
};