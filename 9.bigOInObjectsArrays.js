// Why complexity is increased in case of shift and unshift a element in the very first position of an array? And Why not for the last position in an array?

const myObj = {
    name: "Sojib",
    profession: "Programmer",
    age: 33,
}

console.log(Object.keys(myObj)); // Big O(n)
console.log(Object.values(myObj)); // Big O(n)
console.log(Object.entries(myObj)); // Big O(n)

console.log(myObj.hasOwnProperty("profession")); // Big O(1)
console.log(myObj.hasOwnProperty("hobbies")); // Big O(1)

let myArr = ["Hello", "Bangladesh", "How", "are", "you"];
console.log(myArr[3]);

//               0           1         2      3      4
// Insertion => unshift => Big O(n)
// Removal => shift => Big O(n)
// Insertion => push => Big O(1)
// Removal => pop => Big O(1)
// Searching => Big O(n)
// Access => Big O(1)