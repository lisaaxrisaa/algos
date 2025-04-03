// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

var levelOrder = function (root) {
  // Edge case: If the tree is empty, return an empty array
  if (!root) return [];

  // Result array to store the level-by-level node values
  let result = [];

  // Initialize the queue with the root node to begin BFS
  let queue = [root];

  // Continue looping while there are nodes to process
  while (queue.length > 0) {
    // Level array to hold values for the current level
    let level = [];

    // Capture the number of nodes at the current level
    let size = queue.length;

    // Process all nodes at this level
    for (let i = 0; i < size; i++) {
      // Remove the first node in the queue
      let node = queue.shift();

      // Add the current node's value to the level array
      level.push(node.val);

      // Add the child nodes to the queue for the next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // Push the current level's values into the result array
    result.push(level);
  }

  // Return the final level order traversal
  return result;
};

// ---------------------------------------------------------
// Given the root of a binary tree, invert the tree, and return its root.

// Example 1
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// example 2
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Recursively invert a binary tree by swapping each node's left and right children
var invertTree = function (root) {
  // Base case: if the current node is null, return null
  if (!root) return null;

  // Swap the left and right child of the current node
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  // Return the root node after full inversion
  return root;
};

// ---------------------------------------------------------

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

var maxDepth = function (root) {
  // Base case: if the node is null (we reached the bottom of a branch), return 0
  if (!root) return 0;

  // Recursively find the max depth of the left subtree
  // Recursively find the max depth of the right subtree
  // Add 1 to account for the current node's depth
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// ---------------------------------------------------------

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function (root) {
  // Helper function that checks whether the current node's value is within a valid range
  function helper(node, min, max) {
    // Base case: an empty node is valid
    if (!node) return true;

    // If the current node violates the BST property, return false
    if (node.val <= min || node.val >= max) return false;

    // Recursively validate left and right subtrees with updated ranges:
    // - Left child must be less than current node value
    // - Right child must be greater than current node value
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  }

  // Start recursion with the full range of valid values
  return helper(root, -Infinity, Infinity);
};
