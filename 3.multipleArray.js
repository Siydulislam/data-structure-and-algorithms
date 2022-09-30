function multipleArray(n) {
    for (let i = 0; i <= n; i++) { // complexity = n
        for (let j = 0; j <= n; j++) { // complexity = n
            console.log(i, j)
        }
    }
}

multipleArray(2);
// n + n = n2
// Big O(n2)