// Problem Statement: Given a string, transform it based on the following rules:
// ● If the length of the string is divisible by 3, reverse the entire string.
// ● If the length of the string is divisible by 5, replace each character with its ASCII code.
// ● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
// both operations in the order specified above.

const stringManipulation = str => {
    
    const length = str.length;
    // check if the length is divisible by both 3 and 5
    if (length % 15 === 0) {
        return `"${[...str].reverse().join('')}"`;
    }
    //check if the lenght is divisible by 3
    if (length % 3 === 0) {
        return `"${[...str].reverse().join('')}"`;
    }
    //check if the lenght is divisible by 5
    if (length % 5 === 0) {
        return `"${[...str].map(char => char.charCodeAt(0)).join(' ')}"`;
    }

    return `"${str}"`;
};

// Test cases
console.log(stringManipulation("Hamburger")); 
console.log(stringManipulation("Pizza")); 
console.log(stringManipulation("Chocolate Chip Cookie")); 
