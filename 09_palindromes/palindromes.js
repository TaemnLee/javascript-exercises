const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Step 1: Transform the string to lowercase, filter only alphanumeric characters, and rejoin as a new string
    const filteredStr = str.toLowerCase()
                         .split('')
                         .filter((character) => alphanumerical.includes(character))
                         .join('');

    // Step 2: Check if the filtered string is a palindrome
    let isPal = true;
    let i = 0;
    while (isPal && i < Math.floor(filteredStr.length / 2)) {
        if (filteredStr[i] !== filteredStr[filteredStr.length - 1 - i]) {
            isPal = false;
        }
        i++;
    }

    // Step 3: Return the result
    return isPal;
};

// Do not edit below this line
module.exports = palindromes;
