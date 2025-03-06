const nums = [6, 5, 5];

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    } else if (num === candidate) {
      count++;
    } else if (num !== candidate) {
      count--;
    }
  }
  return candidate;
};

console.log(majorityElement(nums));
