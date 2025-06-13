/**
 * @fileoverview Utility functions for number operations
 * @author AI Assistant
 */

/**
 * Checks if a number is even
 * @param {number} num - The number to check
 * @returns {boolean} - Returns true if the number is even, false if odd
 * @example
 * isEven(2);  // returns true
 * isEven(3);  // returns false
 * isEven(0);  // returns true
 * isEven(-4); // returns true
 */
// функция для проверки на четность
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Examples of usage:
console.log(isEven(2));  // true
console.log(isEven(3));  // false
console.log(isEven(0));  // true
console.log(isEven(-4)); // true
