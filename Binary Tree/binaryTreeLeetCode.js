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
