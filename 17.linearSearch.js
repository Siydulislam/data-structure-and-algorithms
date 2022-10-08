// Write a function that takes an array and a value. Find the value from the array and return the index of that value
// [3, 5, 6, 9, 3, 23, 53, 12, 4]

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([2, 3, 5, 6], 6));