// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Converts a Roman numeral string into an integer.
// Uses a lookup object to get the value of each Roman symbol.
// Loops through the string and compares the current and next values.
// If the current value is less than the next, it's a subtractive case (e.g., IV = 4),
// so subtract and skip the next character.
// Otherwise, add the current value to the total.
// Returns the final integer value after processing the entire string.

const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current = values[s[i]];
    let next = values[s[i + 1]];

    if (current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }

  return total;
};

// ------------------------------------------------------

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Finds the longest common prefix string among an array of strings.
// - Loops through each character of the first string (strs[0]).
// - For each character position, compares it with the same position in all other strings.
// - If all strings match at that character position, it is added to the prefix.
// - If any mismatch is found, returns the prefix built so far.
// - Returns an empty string if no common prefix exists.

var longestCommonPrefix = function (strs) {
  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

// ------------------------------------------------------

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the run-length encoding of countAndSay(n - 1).
// Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

// Given a positive integer n, return the nth element of the count-and-say sequence.

// Example 1:
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"

// Example 2:
// Input: n = 1
// Output: "1"
// Explanation:
// This is the base case.

// Start with the base case of the sequence: "1"
let result = '1';

// Repeat the transformation process (n - 1) times
for (let i = 1; i < n; i++) {
  let next = ''; // Temporary string to build the next term
  let count = 1; // Start counting from the first digit

  // Loop through the current result string, starting at index 1
  for (let j = 1; j <= result.length; j++) {
    // If the current character matches the previous one, increment the count
    if (result[j] === result[j - 1]) {
      count++;
    } else {
      // If characters differ or end of string is reached,
      // append the count and the digit we were counting
      next += count + result[j - 1];
      count = 1; // Reset count for the new digit
    }
  }

  // Update result to be the newly built string
  result = next;
}

// Return the final term in the sequence
return result;
