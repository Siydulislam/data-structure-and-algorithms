function uniqueName(arr) {
    let uniqueName = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!uniqueName.includes(element)) {
            uniqueName.push(element);
        }
    }
    return uniqueName;
}

// Time Complexity n2
// Space Complexity => n

let nameArray = ["Sojib", "Shahin", "Shimul", "Sojib", "Shahin", "Shimul"];
console.log(uniqueName((nameArray)));