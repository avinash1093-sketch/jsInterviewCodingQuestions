// function capitalizeFirstLetter(sentence) {
//     const words = sentence.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }

// console.log(capitalizeFirstLetter('hello geeks'));

function firstNonRepeatedChar(str) {
    const charCount = {};

    // count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(charCount[char]);
    }

    // find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatedChar('GeeksForGeeks'));