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

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersect = function (nums1, nums2) {
  let map = {}; // Create a hashmap to store occurrences of nums1 elements
  // Loop through nums1 and count occurrences of each number
  for (let num of nums1) {
    if (map[num] !== undefined) {
      // If the number already exists in the map, increment its count
      map[num] = map[num] + 1;
    } else {
      // Otherwise, initialize its count to 1
      map[num] = 1;
    }
  }

  let result = []; // Create an array to store the intersection values
  // Loop through nums2 and check if each number exists in map
  for (let num of nums2) {
    if (map[num] > 0) {
      // If the number exists in map and count is greater than 0:
      result.push(num); //  Add the number to the result array (intersection found)
      map[num]--; //  Decrement the count to prevent over-counting duplicates
    }
  }
  return result; //  Return the final intersection array
};

// ---------------------------------------------------------

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (nums) {
  // First loop: Mark the indices corresponding to seen numbers as negative
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1; // Find correct index for the value
    nums[index] = Math.abs(nums[index]) * -1; // Mark it negative if not already
  }

  let result = [];
  // Second loop: Collect indices where values are still positive (missing numbers)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1); // Convert index back to the missing number
  }

  return result;
};

// ---------------------------------------------------------

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Create a map to store the next greater element for each number in nums2
let map = {};
// Use a stack to track numbers waiting for their next greater element
let stack = [];
// Loop through nums2 and build the map of next greater elements
for (let num of nums2) {
  // While the current number is greater than the top of the stack,
  // we've found the next greater element for the number on top
  while (stack.length > 0 && stack[stack.length - 1] < num) {
    let smallerNum = stack.pop();
    map[smallerNum] = num;
  }
  // Add current number to stack to wait for a greater number
  stack.push(num);
}
// Any numbers left in the stack have no next greater element
while (stack.length > 0) {
  map[stack.pop()] = -1;
}
// Build the final result by mapping each value in nums1 to its next greater
return nums1.map((num) => map[num]);

// ---------------------------------------------------------

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  let left = []; // Holds product of all elements to the left of index i
  let right = []; // Holds product of all elements to the right of index i
  let result = []; // Final result array: product of left[i] * right[i]

  // Initialize the first value of left to 1 (no elements to the left of index 0)
  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    // Each left[i] is the product of nums[i - 1] and the accumulated product so far
    left[i] = nums[i - 1] * left[i - 1];
  }

  // Initialize the last value of right to 1 (no elements to the right of the last index)
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    // Each right[i] is the product of nums[i + 1] and the accumulated product from the right
    right[i] = nums[i + 1] * right[i + 1];
  }

  // Combine left and right products to get the final result for each index
  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

// ---------------------------------------------------------

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

/**
 * Function to find the pivot index in an array.
 * The pivot index is the index where the sum of all numbers to the left
 * is equal to the sum of all numbers to the right.
 *
 * @param {number[]} nums - The input array of integers.
 * @returns {number} - The leftmost pivot index, or -1 if no pivot index is found.
 */
var findPivotIndex = function (nums) {
  // Step 1: Calculate the total sum of the array.
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  // Step 2: Initialize left sum to 0.
  let left = 0;

  // Step 3: Iterate through the array to find the pivot index.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the right sum by subtracting the left sum and the current element from the total sum.
    let right = sum - left - nums[i];

    // Check if the left sum equals the right sum.
    if (left === right) {
      return i; // Pivot index found.
    }

    // Update the left sum by adding the current element.
    left += nums[i];
  }

  // If no pivot index is found, return -1.
  return -1;
};
