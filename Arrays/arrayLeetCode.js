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

// ---------------------------------------------------------

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

var maxArea = function (height) {
  // Initialize two pointers at the start and end of the array
  let left = 0;
  let right = height.length - 1;

  // Track the maximum area found
  let maxArea = 0;

  // Move the pointers toward each other while evaluating container area
  while (left < right) {
    // Calculate the area between the two lines
    let currentArea = (right - left) * Math.min(height[left], height[right]);

    // Update maxArea if a larger area is found
    maxArea = Math.max(maxArea, currentArea);

    // Move the pointer pointing to the shorter line inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  // Return the maximum area found
  return maxArea;
};

// ---------------------------------------------------------

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

var threeSum = function (nums) {
  let result = [];

  // Sort the array to use two-pointer approach and skip duplicates
  nums.sort((a, b) => a - b);

  // Loop through the array, stopping at nums.length - 2 so we have room for left and right pointers
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i to avoid repeating triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Initialize left and right pointers
    let left = i + 1;
    let right = nums.length - 1;

    // Use two-pointer approach to find combinations that sum to 0
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      // If we find a triplet that sums to 0, save it
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicate values at left and right
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        // If sum is too small, move left pointer to try a larger number
        left++;
      } else {
        // If sum is too large, move right pointer to try a smaller number
        right--;
      }
    }
  }

  // Return all unique triplets that sum to 0
  return result;
};

// ---------------------------------------------------------

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};

var search = function (nums, target) {
  // Initialize two pointers to represent the current search window
  let left = 0;
  let right = nums.length - 1;

  // Continue the loop as long as the window is valid (left doesn't cross right)
  while (left <= right) {
    // Find the middle index of the current window
    let mid = Math.floor((left + right) / 2);

    // If the middle element is the target, return its index
    if (nums[mid] === target) {
      return mid;
    }
    // If the middle element is less than the target, search the right half
    else if (nums[mid] < target) {
      left = mid + 1;
    }
    // If the middle element is greater than the target, search the left half
    else {
      right = mid - 1;
    }
  }

  // If the target is not found, return -1
  return -1;
};

// ---------------------------------------------------------

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

var searchRange = function (nums, target) {
  // Helper function to find the first occurrence of the target
  function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1; // Start with -1 in case target is not found

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid; // Save the index
        right = mid - 1; // Keep searching to the left (for earlier match)
      } else if (nums[mid] < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }

    return index;
  }
  // Helper function to find the last occurrence of the target
  function findLast(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1; // Start with -1 in case target is not found

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid; // Save the index
        left = mid + 1; // Keep searching to the right (for later match)
      } else if (nums[mid] < target) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }

    return index;
  }

  // Return both the first and last index as a pair
  return [findFirst(nums, target), findLast(nums, target)];
};

// ---------------------------------------------------------

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

var findPeakElement = function (nums) {
  // Initialize pointers to the start and end of the array
  let left = 0;
  let right = nums.length - 1;

  // Binary search loop to find a peak element
  while (left < right) {
    // Find the midpoint between left and right
    let mid = Math.floor((left + right) / 2);

    // If mid element is greater than the next element,
    // a peak must be on the left side (including mid)
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      // Otherwise, the peak is on the right side
      left = mid + 1;
    }
  }

  // When left == right, we found a peak element
  return left;
};

// ---------------------------------------------------------

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Example 3:
// Input: nums = [3,3,3,3,3]
// Output: 3

var findDuplicate = function (nums) {
  // Start with the smallest and largest possible values
  let lowVal = 1; // Lower bound of the value range
  let highVal = nums.length - 1; // Upper bound (nums has n+1 elements, values from 1 to n)

  // Perform binary search over the range of values (not indices)
  while (lowVal < highVal) {
    const midVal = Math.floor((lowVal + highVal) / 2); // Midpoint of the current range

    // Count how many numbers are less than or equal to midVal
    let count = 0;
    for (const num of nums) {
      if (num <= midVal) count++;
    }

    // If count is greater than midVal, the duplicate is in the lower half
    if (count > midVal) {
      highVal = midVal;
    } else {
      // Otherwise, the duplicate is in the upper half
      lowVal = midVal + 1;
    }
  }

  // At the end of binary search, lowVal is the duplicate number
  return lowVal;
};

// ---------------------------------------------------------

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
  // Initialize minimum price to the first day's price
  let minPrice = prices[0];

  // Initialize max profit to 0 (no profit if prices keep dropping)
  let maxProfit = 0;

  // Loop through the price list starting from day 1
  for (let i = 1; i < prices.length; i++) {
    // Calculate the profit if we sold on day i
    let profit = prices[i] - minPrice;

    // Update max profit if this is the best we've seen so far
    maxProfit = Math.max(maxProfit, profit);

    // Update minPrice if today's price is lower than any we've seen
    minPrice = Math.min(minPrice, prices[i]);
  }

  // Return the maximum profit that could be made
  return maxProfit;
};
