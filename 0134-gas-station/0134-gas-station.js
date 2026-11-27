/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = gas.reduce((acc, value) => acc + value, 0);
    let totalCost = cost.reduce((acc, value) => acc + value, 0);

    if(totalGas < totalCost){
        return -1;
    }

    let currentGas = 0;
    let start = 0;

    for(let i = 0; i < gas.length; i++){
        currentGas += gas[i] - cost[i];

        if(currentGas < 0){
            currentGas = 0;
            start = i + 1;
        }
    }

    return start;
};