/**
 * @param {number[]} temperatures
 * @return {number[]}
 */




var dailyTemperatures = function(temperatures) {
    // create empty array and result array
    let result = Array.from(temperatures).fill(0)
    let stack = []

    // iterate through array, adding and removing items from stack
    for (let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[i] > stack[stack.length - 1][0]){
            let value = stack.pop()
            result[value[1]] = i - value[1]
        }
        stack.push([temperatures[i], i])
    }

    return result;
};