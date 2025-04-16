// The below are logic problems found in https://the-winter.github.io/codingjs/

// When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

// Examples

// cigarParty(30, false) → false
// cigarParty(50, false) → true
// cigarParty(70, true) → true

function cigarParty(cigars, isWeekend) {
  if (isWeekend) {
    return cigars >= 40;
  } else {
    return cigars >= 40 && cigars <= 60;
  }
}

function twoSum(nums, target) {
  let map = {}; // Create an empty object

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Calculate complement

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i]; // Use bracket notation to retrieve index
    }

    map[nums[i]] = i; // Store current number as key and index as value
  }

  return [];
}

// You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

// Examples

// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

function dateFashion(you, date) {
  if (you <= 2 || date <= 2) {
    return 0;
  } else if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}

// The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

// Examples

// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true

function squirrelPlay(temp, isSummer) {
  let upperLimit = isSummer ? 100 : 90;
  return temp >= 60 && temp <= upperLimit;
}

// ------------------------------------------------------

// You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

// Examples

// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0

/**
 * Determines the type of ticket based on speed and birthday conditions.
 * - If `speed` is within the limit, returns 0 (no ticket).
 * - If `speed` is within the small ticket range, returns 1.
 * - If `speed` exceeds the small ticket limit, returns 2 (big ticket).
 * - On birthdays, the speed limits are increased by 5.
 */

function caughtSpeeding(speed, isBirthday) {
  let speedLimit = isBirthday ? 65 : 60;
  let smallTicketLimit = isBirthday ? 85 : 80;

  if (speed <= speedLimit) {
    return 0;
  } else if (speed <= smallTicketLimit) {
    return 1;
  } else {
    return 2;
  }
}

// ------------------------------------------------------

// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

// Examples

// sortaSum(3, 4) → 7
// sortaSum(9, 4) → 20
// sortaSum(10, 11) → 21

// * sortaSum - Returns the sum of two integers, except:
// * - If the sum falls within the range 10..19 (inclusive), return 20 instead.
// * - Otherwise, return the actual sum.
// * @param {number} a - First integer
// * @param {number} b - Second integer
// * @returns {number} - Adjusted sum based on the given conditions

function sortaSum(a, b) {
  const sum = a + b;
  if (sum >= 10 && sum <= 19) {
    return 20;
  }
  return sum;
}

// ------------------------------------------------------

// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

// Examples

// alarmClock(1, false) → 7:00
// alarmClock(5, false) → 7:00
// alarmClock(0, false) → 10:00

// * - Weekdays (Mon-Fri, encoded as 1-5):
// *   - If not on vacation → Alarm rings at "7:00".
// *   - If on vacation → Alarm rings at "10:00".
// * - Weekends (Sat-Sun, encoded as 0 or 6):
// *   - If not on vacation → Alarm rings at "10:00".
// *   - If on vacation → Alarm is "off".
// *
// * @param {number} day - The day of the week (0 = Sun, 1 = Mon, ..., 6 = Sat)
// * @param {boolean} vacation - Whether the user is on vacation
// * @returns {string} - The time the alarm should ring or "off" if no alarm

function alarmClock(day, vacation) {
  if (day >= 1 && day <= 5) {
    return vacation ? '10:00' : '7:00';
  } else {
    // Weekends (Sat, Sun)
    return vacation ? 'off' : '10:00';
  }
}

// ------------------------------------------------------

// The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

// Examples

// love6(6, 4) → true
// love6(4, 5) → false
// love6(1, 5) → true

// * love6 - Determines if the number 6 is "special" in the given conditions.
// *
// * The function returns `true` if:
// * - Either `a` or `b` is `6`
// * - Their sum equals `6`
// * - Their absolute difference equals `6`
// * Otherwise, it returns `false`.
// *
// * @param {number} a - First integer
// * @param {number} b - Second integer
// * @returns {boolean} - `true` if any of the conditions are met, otherwise `false`

function love6(a, b) {
  return a + b === 6 || Math.abs(a - b) === 6 || a === 6 || b === 6
    ? true
    : false;
}

// ------------------------------------------------------

// Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

// Examples

// in1To10(5, false) → true
// in1To10(11, false) → false
// in1To10(11, true) → true

// * Approach:
// * - Use an `if` statement to check two cases:
// *   1. If `outsideMode` is `true`, check if `n` is ≤ 1 or ≥ 10.
// *   2. If `outsideMode` is `false`, check if `n` is within 1..10.
// * - This solution runs in **O(1) time** and uses **O(1) space** since it only
// *   performs a few constant-time comparisons.

function in1To10(n, outsideMode) {
  if (
    (outsideMode && (n <= 1 || n >= 10)) ||
    (!outsideMode && n >= 1 && n <= 10)
  ) {
    return true;
  }
  return false;
}

// ------------------------------------------------------

// We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator.

// Examples
// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false

// * Approach:
// * - Use the modulus operator `%` to check divisibility by 11.
// * - Return `true` if `n % 11` is `0` or `1`, otherwise return `false`.
// * - The function runs in **O(1) time** and **O(1) space**, as it performs only
// *   a few mathematical operations and does not use extra memory.

function specialEleven(n) {
  return n % 11 === 0 || n % 11 === 1;
}

// ------------------------------------------------------

// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

// Examples
// more20(20) → false
// more20(21) → true
// more20(22) → true

// * Approach:
// * - Use the modulus operator `%` to check divisibility by 20.
// * - Return `true` if `n % 20` is `1` or `2`, otherwise return `false`.
// * - The function runs in **O(1) time** and **O(1) space**, as it performs only
// *   a few mathematical operations and does not use extra memory.

function more20(n) {
  return n % 20 === 1 || n % 20 === 2;
}

// ------------------------------------------------------

// Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

// Examples
// old35(3) → true
// old35(10) → true
// old35(15) → false

// * Approach:
// * - First, check if `n` is a multiple of both 3 and 5 (`n % 3 === 0 && n % 5 === 0`).
// *   - If true, return `false` immediately.
// * - Otherwise, check if `n` is a multiple of either 3 OR 5.
// *   - If true, return `true`.
// * - If neither condition is met, return `false`.

function old35(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return false;
  } else if (n % 3 === 0 || n % 5 === 0) {
    return true;
  }
  return false;
}

// OR

function old35(n) {
  return (n % 3 === 0 || n % 5 === 0) && !(n % 3 === 0 && n % 5 === 0);
}

// ------------------------------------------------------

// Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

// Examples
// less20(18) → true
// less20(19) → true
// less20(20) → false

// * - The modulus operator `%` is used to check the remainder when `n` is divided by 20.
// * - If `n` is exactly 1 or 2 less than a multiple of 20, it will leave a remainder of 19 or 18.
// * - Examples:
// *    - 18 % 20 = 18  (True)
// *    - 19 % 20 = 19  (True)
// *    - 20 % 20 = 0   (False)
// *    - 38 % 20 = 18  (True)
// *    - 39 % 20 = 19  (True)
// *    - 40 % 20 = 0   (False)
// *    - 89 % 20 = 9   (False)

function less20(n) {
  if (n % 20 === 0) {
    return false;
  } else if (n % 20 === 18 || n % 20 === 19) {
    return true;
  }
  return false;
}

// ------------------------------------------------------

// Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.

// Examples
// nearTen(12) → true
// nearTen(17) → false
// nearTen(19) → true

// Find the remainder when num is divided by 10.
// This tells us how far num is from the nearest lower multiple of 10.
// If remainder is:
// - 0 → num is exactly a multiple of 10
// - 1 → num is 1 above a multiple of 10
// - 2 → num is 2 above a multiple of 10
// - 8 → num is 2 below the next multiple of 10
// - 9 → num is 1 below the next multiple of 10
// These cases mean num is "within 2" of a multiple of 10.

function nearTen(num) {
  if (
    num % 10 === 0 ||
    num % 10 === 1 ||
    num % 10 === 2 ||
    num % 10 === 8 ||
    num % 10 === 9
  ) {
    return true;
  }
  return false;
}

// ------------------------------------------------------
// Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

// Examples
// teenSum(3, 4) → 7
// teenSum(10, 13) → 19
// teenSum(13, 2) → 19

function teenSum(a, b) {
  // Check if either number is in the "teen" range (13 to 19 inclusive)
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
    return 19; // If either number is a teen, return 19 as per the problem statement
  }
  // Otherwise, return the sum of a and b
  return a + b;
}

// ------------------------------------------------------

// Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

// Examples
// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false

function answerCell(isMorning, isMom, isAsleep) {
  // Answer the call if:
  // - It's NOT morning, NOT mom, and NOT asleep (normal case)
  // - OR it's morning, but Mom is calling, and you're NOT asleep
  // - OR it's NOT morning, and Mom is calling, and you're NOT asleep
  if (
    (!isMorning && !isMom && !isAsleep) ||
    (isMorning && isMom && !isAsleep) ||
    (!isMorning && isMom && !isAsleep)
  ) {
    return true;
  }
  // If none of the above conditions are met, do not answer the phone
  return false;
}

// OR

function answerCell(isMorning, isMom, isAsleep) {
  // If asleep, never answer the phone
  if (isAsleep) return false;

  // Answer the phone if:
  // - It's NOT morning (doesn't matter who is calling)
  // - OR it's morning, but Mom is calling
  return !isMorning || isMom;
}

// ------------------------------------------------------

// We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

// Examples
// teaParty(6, 8) → 1
// teaParty(3, 8) → 0
// teaParty(20, 6) → 2

function teaParty(tea, candy) {
  // If either tea or candy is less than 5, the party is bad (0)
  if (tea < 5 || candy < 5) {
    return 0;
  }
  // If either tea or candy is at least double the other, the party is great (2)
  else if (tea >= candy * 2 || candy >= tea * 2) {
    return 2;
  }
  // Otherwise, the party is good (1)
  return 1;
}

// ------------------------------------------------------

// Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

// Examples
// fizzString('fig') → Fizz
// fizzString('dib') → Buzz
// fizzString('fib') → FizzBuzz

function fizzString(str) {
  // Check if the string starts with 'f' and ends with 'b'
  if (str[0] === 'f' && str.endsWith('b')) {
    return 'FizzBuzz'; // Both conditions met
  }
  // Check if the string starts with 'f'
  else if (str[0] === 'f') {
    return 'Fizz';
  }
  // Check if the string ends with 'b'
  else if (str.endsWith('b')) {
    return 'Buzz';
  }
  // If none of the conditions are met, return the original string
  return str;
}

// ------------------------------------------------------

// Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

// Examples
// twoAsOne(1, 2, 3) → true
// twoAsOne(3, 1, 2) → true
// twoAsOne(3, 2, 2) → false

function twoAsOne(a, b, c) {
  // Check if the sum of any two numbers equals the third number
  return a + b === c || b + c === a || a + c === b;
}

// ------------------------------------------------------

// Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

// Examples
// inOrder(1, 2, 4, false) → true
// inOrder(1, 2, 1, false) → false
// inOrder(1, 1, 2, true) → true

//  Check if three numbers are in increasing order.
//  Normally, return true if b > a and c > b.
//  If bOk is true, skip checking b > a, only check c > b.
//  Uses simple conditional logic for clarity and efficiency.

function inOrder(a, b, c, bOk) {
  if (bOk) {
    return c > b;
  } else {
    return b > a && c > b;
  }
}

// ------------------------------------------------------

// Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

// Examples
// inOrderEqual(2, 5, 11, false) → true
// inOrderEqual(5, 7, 6, false) → false
// inOrderEqual(5, 5, 7, true) → true

// Check if three numbers are in increasing order.
//  If equalOk is false, return true only if a < b < c (strictly increasing).
// If equalOk is true, allow equality: a <= b <= c (non-decreasing).
//  Uses basic conditional logic for clear readability.

function inOrderEqual(a, b, c, equalOk) {
  if (equalOk) {
    return a <= b && b <= c;
  } else {
    return a < b && b < c;
  }
}

// ------------------------------------------------------

// Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

// Examples
// maxMod5(2, 3) → 3
// maxMod5(6, 2) → 6
// maxMod5(3, 2) → 3

// Returns the larger of two values, unless both values have the same remainder when divided by 5.
// If the remainders match, returns the smaller value instead.
// If both values are equal, returns 0.

function maxMod5(a, b) {
  if (a === b) {
    return 0;
  } else if (a % 5 === b % 5) {
    return a > b ? b : a;
  } else if (a > b) {
    return a;
  }
  return b;
}

// ------------------------------------------------------

// You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

// Examples
// redTicket(2, 2, 2) → 10
// redTicket(2, 2, 1) → 0
// redTicket(0, 0, 0) → 5

function redTicket(a, b, c) {
  if (a === 2 && b === 2 && c === 2) {
    return 10;
  } else if (a === b && b === c) {
    return 5;
  } else if (a !== c && a !== b) {
    return 1;
  }
  return 0;
}

// ------------------------------------------------------

// You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

// Examples
// greenTicket(1, 2, 3) → 0
// greenTicket(2, 2, 2) → 20
// greenTicket(1, 1, 2) → 10

function greenTicket(a, b, c) {
  if (a === b && b === c) {
    return 20;
  }
  if (a !== b && b !== c && c !== a) {
    return 0;
  }
  return 10;
}

// ------------------------------------------------------

// You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.

// Examples
// blueTicket(9, 1, 0) → 10
// blueTicket(9, 2, 0) → 0
// blueTicket(6, 1, 4) → 10

function blueTicket(a, b, c) {
  if (a + b === 10 || b + c === 10 || c + a === 10) {
    return 10;
  } else if (a + b - (b + c) === 10 || a + b - (a + c) === 10) {
    return 5;
  }
  return 0;
}

// ------------------------------------------------------

// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

// Examples
// shareDigit(12, 23) → true
// shareDigit(12, 43) → false
// shareDigit(12, 44) → false

// Brute force
function shareDigit(a, b) {
  let digitA = String(a);
  let digitB = String(b);
  if (
    digitA.slice(0, 1) === digitB.slice(-1) ||
    digitA.slice(-1) === digitB.slice(0, 1) ||
    digitA.slice(-1) === digitB.slice(-1)
  ) {
    return true;
  }
  return false;
}

// OR

function shareDigit(a, b) {
  let aLeft = Math.floor(a / 10);
  let aRight = a % 10;
  let bLeft = Math.floor(b / 10);
  let bRight = b % 10;
  if (
    aLeft === bLeft ||
    aLeft === bRight ||
    aRight === bLeft ||
    aRight === bRight
  ) {
    return true;
  }
  return false;
}

// ------------------------------------------------------
// Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)

// Examples
// sumLimit(2, 3) → 5
// sumLimit(8, 3) → 8
// sumLimit(8, 1) → 9

function sumLimit(a, b) {
  let c = a + b;
  let aDigit = String(a);
  let digits = String(c);
  if (digits.length > aDigit.length) {
    return a;
  }
  return a + b;
}

// ------------------------------------------------------

// We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

// Examples
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal) {
  // Step 1: Find out how many big bricks (5 inches each) we can actually use
  // It's the smaller of the number we have or how many fit in the goal
  let maxBigBricks = Math.min(big, Math.floor(goal / 5));

  // Step 2: Subtract the inches covered by big bricks from the goal
  // This gives us the number of inches left to cover with small bricks
  let remaining = goal - maxBigBricks * 5;

  // Step 3: Check if we have enough small bricks (1 inch each) to cover the rest
  return small >= remaining;
}

// ------------------------------------------------------

// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

// Examples
// loneSum(1, 2, 3) → 6
// loneSum(3, 2, 3) → 2
// loneSum(3, 3, 3) → 0

function loneSum(a, b, c) {
  // If all three numbers are the same, none count
  if (a === b && b === c) {
    return 0;
  }
  // If a and b are the same, only c counts
  else if (a === b) {
    return c;
  }
  // If b and c are the same, only a counts
  else if (b === c) {
    return a;
  }
  // If a and c are the same, only b counts
  else if (c === a) {
    return b;
  }
  // If all numbers are unique, return their sum
  return a + b + c;
}

// ------------------------------------------------------

// Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

// Examples
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

if (a === 13) {
  return 0; // a is 13 → everything gets ignored
} else if (b === 13) {
  return a; // b is 13 → only a counts
} else if (c === 13) {
  return a + b; // c is 13 → a and b count, not c
}
return a + b + c; // no 13s → everything counts

// ------------------------------------------------------

// Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

// Examples
// noTeenSum(1, 2, 3) → 6
// noTeenSum(2, 13, 1) → 3
// noTeenSum(2, 1, 14) → 3

function noTeenSum(a, b, c) {
  // Helper function to adjust a value if it's a "bad" teen
  function fixTeen(n) {
    // If n is between 13 and 19 (inclusive),
    // AND it's not 15 or 16, treat it as 0
    if (n >= 13 && n <= 19 && n !== 15 && n !== 16) {
      return 0;
    } else {
      // Otherwise, return the number as-is
      return n;
    }
  }

  // Apply fixTeen to each input and return their adjusted sum
  return fixTeen(a) + fixTeen(b) + fixTeen(c);
}

// ------------------------------------------------------

// For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

// Examples
// roundSum(16, 17, 18) → 60
// roundSum(12, 13, 14) → 30
// roundSum(6, 4, 4) → 10

function roundSum(a, b, c) {
  // Helper function to round a number to the nearest multiple of 10
  function round10(num) {
    const remainder = num % 10; // Get the rightmost digit

    // If the rightmost digit is 5 or more, round up
    if (remainder >= 5) {
      return num + (10 - remainder); // e.g., 16 → 20, 19 → 20
    } else {
      // Otherwise, round down
      return num - remainder; // e.g., 12 → 10, 13 → 10
    }
  }

  // Call the helper on each number and return their rounded sum
  return round10(a) + round10(b) + round10(c);
}

// ------------------------------------------------------

// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

// Examples
// closeFar(1, 2, 10) → true
// closeFar(1, 2, 3) → false
// closeFar(4, 1, 3) → true
