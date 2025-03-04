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
