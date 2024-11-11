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
