/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalCost = 0;
    let totalGas = 0;
    let currentGas = 0;
    let start = 0;

    for(let i = 0; i < gas.length; i++){
        currentGas += gas[i] - cost[i];
        totalGas += gas[i];
        totalCost += cost[i];

        if(currentGas < 0){
            currentGas = 0;
            start = i + 1;
        }
    }

    return (totalCost > totalGas) ? -1 : start;
};