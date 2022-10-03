// Hello everyone!

function charCount(str) {
    let charList = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        let match = char.match(/[a-zA-Z]/);
        char = match ? match[0] : null;
        console.log(char);

        if (char === null) continue;

        if (charList[char] > 0) {
            charList[char]++;
        } else {
            charList[char] = 1;
        }
    }
    return charList;
}

console.log(charCount("Hello Everyone!"));