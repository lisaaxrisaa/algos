// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    if (num === candidate) {
      /*OR count += num === candidate ? 1 : -1*/
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

// ---------------------------------------------------------

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */

// * Approach:
// * - Use a hash map (object) to track numbers that have already been seen.
// * - If we encounter a duplicate while iterating, return true immediately.
// * - If no duplicates are found, return false after checking all elements.

var containsDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return true;
    }
    map[nums[i]] = i;
  }
  return false;
};

// ---------------------------------------------------------

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// * Approach:
//  * - We use a `Set` to efficiently track the last `k` elements in a sliding window.
//  * - If `nums[i]` is already in the `Set`, we return `true` (a duplicate was found within `k` distance).
//  * - If the `Set` grows larger than `k`, we remove the oldest element (`nums[i - k]`) to maintain the window size.
//  * - The algorithm runs in **O(n) time** and uses **O(k) space**.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */

var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);

    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};

// ---------------------------------------------------------

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// * Approach:
//  * - We initialize `result = nums.length` to account for the missing number.
//  * - Iterate through `nums`:
//  *   - Add the current index `i` to `result`.
//  *   - Subtract `nums[i]` from `result`.
//  * - Since every present number cancels itself out, `result` naturally holds the missing number.
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var missingNumber = function (nums) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    result += i - nums[i];
  }
  return result;
};

// ---------------------------------------------------------

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// * Approach:
// * - Use a `Set` to store all elements from `nums1` for **quick lookup** (`O(1)` check).
// * - Iterate through `nums2` and check if each number exists in the `Set` (from `nums1`).
// * - Use another `Set` to store **only unique** intersection elements.
// * - Convert the result `Set` into an array using `Array.from()`.

var intersection = function (nums1, nums2) {
  const set = new Set(nums1); // Store unique elements from nums1
  const set2 = new Set(); // Store unique intersection elements

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      set2.add(nums2[i]); // Only add unique common elements
    }
  }

  return Array.from(set2); // Convert Set to Array before returning
};

// ---------------------------------------------------------
