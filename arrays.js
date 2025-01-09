// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

function sleepIn(weekday, vacation) {
  if (!weekday || vacation) {
    return true;
  }
  return false;
}

// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

function monkeyTrouble(aSmile, bSmile) {
  if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
    return true;
  }
  return false;
}

// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

function sumDouble(a, b) {
  if (a === b) {
    return (a + b) * 2;
  }
  return a + b;
}

// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

function diff21(n) {
  if (n < 21) {
    return 21 - n;
  } else if (n > 21) {
    return (n - 21) * 2;
  }
  return 0;
}

// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

function parrotTrouble(talking, hour) {
  if ((talking && hour < 7) || (talking && hour > 20)) {
    return true;
  }
  return false;
}

// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

function makes10(a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  }
  return false;
}

// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

function nearHundred(n) {
  if ((n >= 90 && n <= 110) || (n >= 190 && n <= 210)) {
    return true;
  }
  return false;
}

// Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

function posNeg(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  }
  return false;
}

// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.
// Examples
// notString('candy') → not candy
// notString('x') → not x
// notString('not bad') → not bad

function notString(str) {
  if (str.slice(0, 3) !== 'not') {
    return 'not ' + str;
  }
  return str;
}

// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
// Examples
// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn

function missingChar(str, n) {
  return str.slice(0, n) + str.slice(n + 1);
}

// Given a string, return a new string where the first and last chars have been exchanged.
// Examples
// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba

function frontBack(str) {
  if (str.length <= 1) {
    return str;
  }
  return str.slice(-1) + str.slice(1, str.length - 1) + str.slice(0, 1);
}

// Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
// Examples
// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc

function front3(str) {
  return str.slice(0, 3).repeat(3);
}

// Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.
// Examples
// backAround('cat') → tcatt
// backAround('Hello') → oHelloo
// backAround('a') → aaa

function backAround(str) {
  return str.slice(-1) + str + str.slice(-1);
}

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
// Examples
// or35(3) → true
// or35(10) → true
// or35(8) → false

function or35(n) {
  if (n % 3 === 0 || n % 5 === 0) {
    return true;
  }
  return false;
}

// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.
// Examples
// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab

function front22(str) {
  if (str.length <= 1) {
    return str.repeat(3);
  }
  return str.slice(0, 2) + str + str.slice(0, 2);
}

// Given a string, return true if the string starts with 'hi'and false otherwise.
// Examples
// startHi('hi there') → true
// startHi('hi') → true
// startHi('hello hi') → false

function startHi(str) {
  if (str.slice(0, 2) === 'hi') {
    return true;
  }
  return false;
}

// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
// Examples
// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false

function icyHot(temp1, temp2){
  if((temp1 < 0 && temp2 > 100) || 
     (temp2 < 0 && temp1 > 100) {
     return true;
     }
  return false;
}

// Given 2 int values, return true if either of them is in the range 10..20 inclusive.
// Examples
// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false

function in1020(a, b){
  if((a >= 10 && a <= 20)||
     (b >= 10 && b <= 20)) {
  return true;
  }
  return false;
}

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.
// Examples
// hasTeen(13, 20, 10) → true
// hasTeen(20, 19, 10) → true
// hasTeen(20, 10, 13) → true

function hasTeen(a, b, c){
  if((a >= 13 && a <= 19)||
    (b >= 13 && b <= 19)||
    (c >= 13 && c <= 19)) {
  return true;
  }
  return false;
}

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.
// Examples
// loneTeen(13, 99) → true
// loneTeen(21, 19) → true
// loneTeen(13, 13) → false

function loneTeen(a, b){
  const teenA = (a >= 13 && a <= 19)
  const teenB = (b >= 13 && b <= 19)
  if( !teenA && teenB || teenA && !teenB) {
  return true;
  }
    return false;
  }

//   Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.
// Examples
// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str){
  if(str.slice(1,4) === 'del') {
  return str.slice(0,1) + str.slice(4)
  }
  return str;
}

// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.
// Examples
// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

function mixStart(str){
  if(str.match(/.ix/g)) {
  return true;
  }
  return false;
}

// Given three int values, a b c, return the largest.
// Examples
// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3

function intMax(a, b, c){
  return Math.max(a, b, c)
  }

//   Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.
// Examples
// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

function close10(a, b){
  const numA = Math.abs(a - 10);
  const numB = Math.abs(b - 10);
  if(numA < numB) {
  return a;
  }else if (numB < numA){
  return b;
  }
  return 0
}

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.
// Examples
// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a, b){
  if((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
  return true;
  }else if((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
  return true;
  }
  return false
}

// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.
// Examples
// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

function max1020(a, b){
  const numA = (a >= 10 && a <= 20)
  const numB = (b >= 10 && b <= 20)
  if(numA && numB) {
  return Math.max(a,b);
  }else if(numA) {
  return a;
  }else if(numB) {
  return b;
  }
    return 0;
  }
  

//   Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

// Examples

// lastDigit(7, 17) → true
// lastDigit(6, 17) → false
// lastDigit(3, 113) → true

function lastDigit(a, b){
  return a % 10 === b % 10;
}

// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

// Examples

// endUp('Hello') → HeLLO
// endUp('hi there') → hi thERE
// endUp('hi') → HI

function endUp(str) {
  if (str.length < 3) {
    return str.toUpperCase(); 
  }
  const start = str.slice(0, str.length - 3); 
  const end = str.slice(-3).toUpperCase();   
  return start + end; 
}

// Given 2 strings, a and b, return the number of the positions where they contain
// the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx"
// "xx", "aa", and "az" substrings appear in the same place in both strings.

function stringMatch(a, b) {
  let count = 0;
  for (let i = 0; i < a.length - 1 && i < b.length - 1; i++) {
    if (a.slice(i, i + 2) === b.slice(i, i + 2)) {
      count++;
    }
  }
  return count;
}

// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

function stringX(str) {
  let noX = '';
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] !== 'x') {
      noX += str[i];
    }
  }
  return str.slice(0, 1) + noX + str.slice(-1);
}

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

function altPairs(str) {
  let altString = '';
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      altString += str[i] + str[i + 1];
    } else {
      altString += str[i];
    }
  }
  return altString;
}

// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

function stringYak(str) {
  let noYak = '';
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 3) === 'yak') {
      i += 2;
    } else {
      noYak += str[i];
    }
  }
  return noYak;
}

// Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

function array667(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length) {
      if (
        (nums[i] === 6 && nums[i + 1] === 6) ||
        (nums[i] === 6 && nums[i + 1] === 7)
      ) {
        count++;
      }
    }
  }
  return count;
}

// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

function noTriples(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i + 2 < nums.length) {
      if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
        return false;
      }
    }
  }
  return true;
}

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        return true;
      }
    }
    return false;
  }
}

// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

// Examples

// arrayFront9([1,2,9,3,4]) → true
// arrayFront9([1,2,3,4,9]) → false
// arrayFront9([1,2,3,4,5]) → false

function arrayFront9(nums) {
  const limit = Math.min(nums.length, 4); 
  for (let i = 0; i < limit; i++) {
    if (nums[i] === 9) {
      return true; 
    }
  }
  return false; 
}
