// Recursion function call itself inside

// Countdown number with for loop and recursion
function countdown(n) {
    // for (let i = n; i > 0; i--) {
    //     console.log(i);
    // }

    console.log(n);

    n--;

    if (n > 0) {
        countdown(n);
    }
}

countdown(10);

// Sum of numbers with for loop
function sumOfNumber(n) {
    let sum = 0;
    for (let i = n; i >= 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumber(10));

// Sum of numbers with recursion
function recursiveSumOfNumber(n) {
    if (n < 0) return 0;

    return n + sumOfNumber(n - 1);
}

console.log(recursiveSumOfNumber(10));