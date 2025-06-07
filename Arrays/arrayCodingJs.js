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

// ---------------------------------------------------------

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

// ---------------------------------------------------------

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

// ---------------------------------------------------------

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

// ---------------------------------------------------------

// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

function array123(nums){
  for (let i = 0; i < nums.length - 2; i++) {
  if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
    return true; 
  }
}
return false; 

}

// ---------------------------------------------------------

// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

// Examples
// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums){
  if(nums.length >= 1 && nums[0] === nums[nums.length - 1] {
     return true
     } 
  return false
}

// ---------------------------------------------------------

// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

// Examples
// makePi() → 3,1,4

function makePi(){
  return [3,1,4]
}

// ---------------------------------------------------------

// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

// Examples
// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

function commonEnd(a, b){
  if(a[0] === b[0] ||
    a[a.length - 1] === b[b.length - 1]) {
  return true
  }
  return false
}


// ---------------------------------------------------------

// Given an array of ints length 3, return the sum of all the elements.

// Examples
// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7

function sum3(nums){
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
  sum += nums[i]
  } 
    return sum
  }

// ---------------------------------------------------------

// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// Examples
// rotateLeft3([1, 2, 3]) → 2,3,1
// rotateLeft3([5, 11, 9]) → 11,9,5
// rotateLeft3([7, 0, 0]) → 0,0,7

function rotateLeft3(nums){
  return [nums[1],nums[2],nums[0]]
}

// ---------------------------------------------------------

// Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

// Examples
// reverse3([1, 2, 3]) → 3,2,1
// reverse3([5, 11, 9]) → 9,11,5
// reverse3([7, 0, 0]) → 0,0,7

function reverse3(nums){
  return nums.reverse()
}

// ---------------------------------------------------------

// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

// Examples
// maxEnd3([1, 2, 3]) → 3,3,3
// maxEnd3([11, 5, 9]) → 11,11,11
// maxEnd3([2, 11, 3]) → 3,3,3

function maxEnd3(nums){
  let max = Math.max(nums[0],nums[2])
  return Array(3).fill(max)
}

// ---------------------------------------------------------

// Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

// Examples
// sum2([1, 2, 3]) → 3
// sum2([1, 1]) → 2
// sum2([1, 1, 1, 1]) → 2

function sum2(nums){
  if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
   return nums[0]+nums[1]
  }

  // ---------------------------------------------------------

//   Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

// Examples
// middleWay([1, 2, 3], [4, 5, 6]) → 2,5
// middleWay([7, 7, 7], [3, 8, 0]) → 7,8
// middleWay([5, 2, 9], [1, 4, 5]) → 2,4

function middleWay(a, b){
  return [a[1], b[1]]
}

  // ---------------------------------------------------------

//   Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

// Examples
// makeEnds([1, 2, 3]) → 1,3
// makeEnds([1, 2, 3, 4]) → 1,4
// makeEnds([7, 4, 6, 2]) → 7,2

function makeEnds(nums){
  return [nums[0],nums[nums.length -1]]
}

  // ---------------------------------------------------------

  // Given an int array length 2, return true if it contains a 2 or a 3.

  // Examples
  // has23([2, 5]) → true
  // has23([4, 3]) → true
  // has23([4, 5]) → false 

  function has23(nums){
    if(nums.includes(2) || nums.includes(3)) return true
    return false
  }

    // ---------------------------------------------------------

//     Given an int array length 2, return true if it does not contain a 2 or 3.

// Examples
// no23([4, 5]) → true
// no23([4, 2]) → false
// no23([3, 5]) → false

function no23(nums){
  if(nums.includes(2) || nums.includes(3)) return false
  return true
}

    // ---------------------------------------------------------

//     Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.

// Examples
// makeLast([4, 5, 6]) → 0,0,0,0,0,6
// makeLast([1, 2]) → 0,0,0,2
// makeLast([3]) → 0,3

function makeLast(nums){
  let result = new Array(nums.length * 2).fill(0);
result[result.length - 1] = nums[nums.length - 1];
return result;
}

    // ---------------------------------------------------------

// Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

// Examples
// double23([2, 2]) → true
// double23([3, 3]) → true
// double23([2, 3]) → false

function double23(nums){
  let count2 = 0;
  let count3 = 0;

  for (let num of nums) {
    if (num === 2) count2++;
    if (num === 3) count3++;
  }

  return count2 === 2 || count3 === 2;
}

 // ---------------------------------------------------------

//  Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

// Examples
// fix23([1, 2, 3]) → 1,2,0
// fix23([2, 3, 5]) → 2,0,5
// fix23([1, 2, 1]) → 1,2,1

function fix23(nums) {
  if (nums[0] === 2 && nums[1] === 3) {
    nums[1] = 0;
  }
  if (nums[1] === 2 && nums[2] === 3) {
    nums[2] = 0;
  }
  return nums;
}

 // ---------------------------------------------------------

//  Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

// Examples
// start1([1, 2, 3], [1, 3]) → 2
// start1([7, 2, 3], [1]) → 1
// start1([1, 2], []) → 1

function start1(a, b){
  let count = 0
  if(a[0] === 1) count ++
  if(b[0] === 1) count ++
  return count
}

 // ---------------------------------------------------------

//  Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

// Examples
// biggerTwo([1, 2], [3, 4]) → 3,4
// biggerTwo([3, 4], [1, 2]) → 3,4
// biggerTwo([1, 1], [1, 2]) → 1,2

function biggerTwo(a, b){
let sumA = a[0] + a[1];
let sumB = b[0] + b[1];
if (sumA >= sumB) return a;
return b;

}

 // ---------------------------------------------------------

//  Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

// Examples
// makeMiddle([1, 2, 3, 4]) → 2,3
// makeMiddle([7, 1, 2, 3, 4, 9]) → 2,3
// makeMiddle([1, 2]) → 1,2

function makeMiddle(nums){
  let mid = nums.length / 2;
return [nums[mid - 1], nums[mid]];
}

 // ---------------------------------------------------------

// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

// Examples
// plusTwo([1, 2], [3, 4]) → 1,2,3,4
// plusTwo([4, 4], [2, 2]) → 4,4,2,2
// plusTwo([9, 2], [3, 4]) → 9,2,3,4

function plusTwo(a, b){
  return [a[0],a[1],b[0],b[1]]
}

 // ---------------------------------------------------------

//  Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// Examples
// swapEnds([1, 2, 3, 4]) → 4,2,3,1
// swapEnds([1, 2, 3]) → 3,2,1
// swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

function swapEnds(nums){
  if (nums.length >= 2) {
  let temp = nums[0];
  nums[0] = nums[nums.length - 1];
  nums[nums.length - 1] = temp;
}
return nums;
}

 // ---------------------------------------------------------

//  Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

// Examples
// midThree([1, 2, 3, 4, 5]) → 2,3,4
// midThree([8, 6, 7, 5, 3, 0, 9]) → 7,5,3
// midThree([1, 2, 3]) → 1,2,3

function midThree(nums){
  let mid = Math.floor(nums.length/2)
  return [nums[mid-1], nums[mid], nums[mid+1]]
}

 // ---------------------------------------------------------

//  Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

//  Examples
//  maxTriple([1, 2, 3]) → 3
//  maxTriple([1, 5, 3]) → 5
//  maxTriple([5, 2, 3]) → 5

function maxTriple(nums) {
  let mid = Math.floor(nums.length / 2);
  return Math.max(nums[0], nums[mid], nums[nums.length - 1]);
}

 // ---------------------------------------------------------

//  Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

// Examples
// frontPiece([1, 2, 3]) → 1,2
// frontPiece([1, 2]) → 1,2
// frontPiece([1]) → 1

function frontPiece(nums){
  return nums.slice(0,2)
}

 // ---------------------------------------------------------

//  We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

// Examples
// unlucky1([1, 3, 4, 5]) → true
// unlucky1([2, 1, 3, 4, 5]) → true
// unlucky1([1, 1, 1]) → false

function unlucky1(nums){
  const len = nums.length;

 if (len >= 2 && nums[0] === 1 && nums[1] === 3) return true;
 if (len >= 3 && nums[1] === 1 && nums[2] === 3) return true;
 if (len >= 2 && nums[len - 2] === 1 && nums[len - 1] === 3) return true;

 return false;
}

 // ---------------------------------------------------------

//  Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

// Examples
// make2([4, 5], [1, 2, 3]) → 4,5
// make2([4], [1, 2, 3]) → 4,1
// make2([], [1, 2]) → 1,2

function make2(a, b){
  const combined = a.concat(b);

 return combined.slice(0, 2);
}

 // ---------------------------------------------------------

//  Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

// Examples
// front11([1, 2, 3], [7, 9, 8]) → 1,7
// front11([1], [2]) → 1,2
// front11([1, 7], []) → 1

function front11(a, b) {
  const result = [];
  if (a.length > 0) {
    result.push(a[0]);
  }
  if (b.length > 0) {
    result.push(b[0]);
  }
  return result;
}

 // ---------------------------------------------------------

//  Return the index of the minimum value in an array. The input array will have at least one element in it.

// Examples
// findLowestIndex([99, 98, 97, 96, 95]) → 4
// findLowestIndex([2, 2, 0]) → 2
// findLowestIndex([1, 3, 5]) → 0

function findLowestIndex(nums){
  let minIndex = 0;

 for (let i = 1; i < nums.length; i++) {
   if (nums[i] < nums[minIndex]) {
     minIndex = i;
   }
 }

 return minIndex;
}

 // ---------------------------------------------------------

//  Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// Examples
// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0

function countEvens(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

 // ---------------------------------------------------------

//  Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

// Examples
// bigDiff([10, 3, 5, 6]) → 7
// bigDiff([7, 2, 10, 9]) → 8
// bigDiff([2, 10, 7, 2]) → 8

function bigDiff(nums){
  const max = Math.max(...nums); 
 const min = Math.min(...nums); 
 return max - min;  
}

 // ---------------------------------------------------------

//  Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

// Examples
// centeredAverage([1, 2, 3, 4, 100]) → 3
// centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
// centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAverage(nums){
let sorted = [...nums].sort((a, b) => a - b);
sorted.pop();    
sorted.shift();   
let sum = sorted.reduce((acc, num) => acc + num, 0);
return sum / sorted.length;
}

 // ---------------------------------------------------------

//  Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

// Examples
// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      i++; 
      continue;
    }
    sum += nums[i];
  }
  return sum;
}

 // ---------------------------------------------------------

//  Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

// Examples
// sum67([1, 2, 2]) → 5
// sum67([1, 2, 2, 6, 99, 99, 7]) → 5
// sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums){
  let sum = 0;
let inBlock = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 6) {
    inBlock = true;
  } else if (inBlock && nums[i] === 7) {
    inBlock = false;
  } else if (!inBlock) {
    sum += nums[i];
  }
}

return sum;
}

// ---------------------------------------------------------

// Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

// Examples
// has22([1, 2, 2]) → true
// has22([1, 2, 1, 2]) → false
// has22([2, 1, 2]) → false

function has22(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

// ---------------------------------------------------------
// Given an array of ints, return true if the array contains no 1's and no 3's.

// Examples
// lucky13([0, 2, 4]) → true
// lucky13([1, 2, 3]) → false
// lucky13([1, 2, 4]) → false

function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 || nums[i] === 3) {
      return false;
    }
  }
  return true;
}