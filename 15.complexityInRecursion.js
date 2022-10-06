// Sum of elements of an Array
function slowSumOfArray(arr) {
    if (arr.length === 0) return 0;

    let rest = arr.slice(1); // n

    return arr[0] + slowSumOfArray(rest); // n
}

// console.log(slowSumOfArray([1, 2, 4, 8, 16, 32]));

// Time Complexity => Big O(n*n) => Big O(n^2)
// Space Complexity => Big O(n)

function fastSumOfArray(arr) {
    return helperFunc(arr, 0);
}

function helperFunc(arr, index) {
    if (arr.length === index) return 0;

    return arr[index] + helperFunc(arr, index + 1); // n
}

// console.log(fastSumOfArray([1, 2, 4, 8, 16, 32]));

// Time Complexity => Big O(n)
// Space Complexity => Big O(n)

// Determine Time Complexity
let input = new Array(1234).fill(9);

let startForSlow = Date.now();
console.log(slowSumOfArray(input));
let finishForSlow = Date.now();
console.log(`Time elapsed for slow function - ${finishForSlow - startForSlow}`);

let startForFast = Date.now();
console.log(fastSumOfArray(input));
let finishForFast = Date.now();
console.log(`Time elapsed for fast function - ${finishForFast - startForFast}`);