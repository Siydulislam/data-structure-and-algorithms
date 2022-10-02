// Maintain 4 concept

// Understand the problem
// Break it down
// Solve and simplify
// Look back and refactor

// Find the lowest and highest number from the array
// Ignore the string (if any)
// Substract the lowest number from the highest number

let temperature = [-2, 4, 45, 23, "error", -4, "temp", -6, -8, 34, 43, 88, 63];

function getHighestAndLowest(arr) {
    // create a highest variable
    let highest = arr[0];
    // create a lowest varible
    let lowest = arr[0];
    // Iterate the whole array
    for (let i = 0; i < arr.length; i++) {
        // Let's check if there has any error
        if (typeof arr[i] !== "number") continue;
        console.log(typeof arr[i])
        // if highest variable has smaller number than our current number then value will be our current element
        if (highest < arr[i]) {
            highest = arr[i];
        }
        // if lowest variable has bigger number than our current number then value will be our current element
        if (lowest > arr[i]) {
            lowest = arr[i];
        }
    }
    console.log(lowest, highest)
    // return our highest variable and lowest variable
    return highest - lowest;
}

console.log(getHighestAndLowest(temperature));
