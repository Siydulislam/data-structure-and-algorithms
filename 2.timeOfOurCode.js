function sumOfAll(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumOfAllWithFormula(n) {
    return n * (n + 1) / 2;
}

console.log(sumOfAll(10));
console.log(sumOfAllWithFormula(10));

let time1 = performance.now();
console.log(sumOfAllWithFormula(100000000000));
let time2 = performance.now();

console.log(`your time ${(time2 - time1) / 1000}`);