// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

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

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

class Solution {
  // /**
  //  * @param {string} s
  //  * @param {string} t
  //  * @return {boolean}
  //  */
  isAnagram(s, t) {
    let sArray = s.split('').sort().join('');
    let tArray = t.split('').sort().join('');
    if (sArray === tArray) {
      return true;
    }
    return false;
  }
}

// ---------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// * twoSum - Finds the indices of two numbers in an array that add up to a given target.
//  *
//  * Uses a **hash map** (object) for **O(1) lookups**, making the solution efficient.
//  * Instead of a brute-force **O(n²)** approach, this solution runs in **O(n) time**.
//  *
//  * - Iterate through the array once, storing each number's index in a map.
//  * - For each number, calculate the difference needed to reach the target.
//  * - If the difference already exists in the map, return the indices.
// /**

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in map) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }
  return [];
};

// ---------------------------------------------------------

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
      let sortedStr = str.split('').sort().join('');
      if (!map.has(sortedStr)) {
        map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
  }
}
