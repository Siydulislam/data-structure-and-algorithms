function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// Space Complexity => O(1)
console.log(sum([1, 2, 3, 4]));

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
// Space Complexity => O(n)
console.log(double([2, 3, 4, 5]));