function logarithmsN(n) {
    while (n > 1) {
        console.log(n);
        n /= 2;
    }
    console.log("Done");
}

logarithmsN(8);

function anotherLogN(n) {
    if (n <= 1) {
        console.log("Done");
        return;
    }
    console.log(n);
    anotherLogN(n / 2);
}

anotherLogN(8);

// n        log2(n)

// 2        1
// 4        2
// 8        3
// 16       4
// 32       5
// 1024     10