function min5Log(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

min5Log(9); // Big O(n) because it is depend on n

function max5Log(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

max5Log(9); // Big O(1) because it is depend on min value i.e., 5