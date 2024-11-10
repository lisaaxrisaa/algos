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
