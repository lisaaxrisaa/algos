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
