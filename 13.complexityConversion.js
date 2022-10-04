function correspondingValue(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i] ** 2);
        if (currentIndex === -1) {
            return false;
        }

        arr2.splice(currentIndex, 1);
    }
    return true;
}

// Complexxity => n * n => n^2
// Time Complexity => O(n^2)

console.log(correspondingValue([2, 3, 6], [36, 9, 4]));

// Alternatives
function correspondingValueAlt(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let sequenceCounter1 = {};
    let sequenceCounter2 = {};

    for (let val of arr1) { // n
        sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
    }

    for (let val of arr2) { // n
        sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
    }

    for (let key in sequenceCounter1) { // n
        if (!(key ** 2) in sequenceCounter2) {
            return false;
        }

        if (sequenceCounter2[key ** 2] !== sequenceCounter1[key]) {
            return true;
        }
    }
    return true;
}

// Complexity => n + n + n => 3n => n
// Time Complexity => O(n)

console.log(correspondingValueAlt([2, 3, 6], [36, 9, 4]));