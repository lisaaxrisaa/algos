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

// ------------------------------------------------------

// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Finds the longest palindromic substring in the given string
var longestPalindrome = function (s) {
  // Store the longest palindrome found
  let result = '';

  // Helper function to expand outward from the center
  function expandAroundCenter(left, right) {
    // Expand as long as the characters at left and right match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return the matching substring (we went one step too far)
    return s.slice(left + 1, right);
  }

  // Check every character as a center of potential palindrome
  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindrome centered at index i
    let odd = expandAroundCenter(i, i);
    // Check for even-length palindrome centered between i and i + 1
    let even = expandAroundCenter(i, i + 1);

    // Update the result if a longer palindrome is found
    if (odd.length > result.length) result = odd;
    if (even.length > result.length) result = even;
  }

  // Return the longest palindromic substring found
  return result;
};

// ------------------------------------------------------

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  // Initialize a Set to store unique characters in the current window
  let set = new Set();

  // Left pointer to track the start of the window
  let left = 0;

  // Track the maximum length of valid substrings found
  let maxLength = 0;

  // 'i' acts as the right pointer, expanding the window character by character
  for (let i = 0; i < s.length; i++) {
    // If the character is a duplicate, shrink the window from the left
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }

    // Add the current character and update the maxLength
    set.add(s[i]);
    maxLength = Math.max(maxLength, set.size);
  }

  // Return the length of the longest valid substring
  return maxLength;
};

// ------------------------------------------------------

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function (s, k) {
  let map = {}; // character frequency map
  let left = 0; // left side of sliding window
  let maxFreq = 0; // most frequent character count in the current window
  let maxLength = 0; // result

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    map[char] = (map[char] || 0) + 1;

    // Update the max frequency in the window
    maxFreq = Math.max(maxFreq, map[char]);

    // If window is invalid (too many changes needed), shrink it
    if (right - left + 1 - maxFreq > k) {
      map[s[left]]--;
      left++;
    }

    // Update maxLength
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
