/**
 * Checks if a given string is a palindrome.
 * @param {string} x - The input string.
 * @return {boolean} - Returns true if x is a palindrome, otherwise false.
 */
var isPalindrome = function(x) {
    // Iterate from the beginning to the middle of the string
    for (let i = 0; i < Math.floor(x.length / 2); i++) {
        // Compare characters from start and end
        if (x[i] !== x[x.length - i - 1]) {
            return false; // Return false if a mismatch is found
        }
    }
    return true; // Return true if all comparisons pass
};
