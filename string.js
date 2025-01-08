// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
function helloName(name) {
  return `Hello ${name}!`;
}

// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
function makeAbba(a, b) {
  return `${a}${b}${b}${a}`;
}

// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}

// Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

function makeOutWord(out, word) {
  return out.substring(0, 2) + word + out.substring(2, 4);
}

// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

function extraEnd(str) {
  return str.slice(-2).repeat(3);
}

// Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

function firstTwo(str) {
  return str.slice(0, 2);
}

// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

function firstHalf(str) {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2);
  } else {
    return str;
  }
}

// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

function withoutEnd(str) {
  return str.slice(1, -1);
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

function comboString(a, b) {
  if (a.length < b.length) {
    return `${a}${b}${a}`;
  } else if (b.length < a.length) {
    return `${b}${a}${b}`;
  }
}

// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

function nonStart(a, b) {
  return a.slice(1) + b.slice(1);
}

// Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

function left2(str) {
  if (str.length < 2) {
    return str;
  } else {
    return str.slice(2) + str.slice(0, 2);
  }
}

// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

function right2(str) {
  if (str.length <= 2) {
    return str;
  } else {
    return str.slice(-2) + str.slice(0, -2);
  }
}

// Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

function theEnd(str, front) {
  if (front === false) {
    return str.slice(-1);
  } else {
    return str.slice(0, 1);
  }
}

// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

function withoutEnd2(str) {
  if (str.length <= 2) {
    return '';
  } else {
    return str.slice(1, -1);
  }
}

// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.
let str = 'abcdefghij';

function middleTwo(str) {
  if (str.length < 2) {
    return str;
  } else if (str.length % 2 === 0) {
    let middle = str.length / 2;
    return str.charAt(middle - 1) + str.charAt(middle);
  }
}

// Given a string, return true if it ends in "ly".

function endsLy(str) {
  if (str.slice(-2) === 'ly') {
    return true;
  }
  return false;
}

// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

function middleThree(str) {
  if (str.length <= 3) {
    return str;
  } else if (str.length % 2 !== 0) {
    let middle = Math.floor(str.length / 2);
    return str.charAt(middle - 1) + str.charAt(middle) + str.charAt(middle + 1);
  } else if (str.length % 2 === 0) {
    let middle2 = str.length / 2;
    return str.charAt(middle2 - 1) + str.charAt(middle2);
  }
}

// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

function hasBad(str) {
  if (str.slice(0, 3) === 'bad' || str.slice(1, 4) === 'bad') {
    return true;
  }
  return false;
}

// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

function atFirst(str) {
  if (str.length === 0) {
    return '@@';
  } else if (str.length < 2) {
    return str + '@';
  } else {
    return str.slice(0, 2);
  }
}

// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

function lastChars(a, b) {
  if (a.length === 0 && b.length === 0) {
    return '@@';
  } else if (a.length === 0) {
    return '@' + b.slice(-1);
  } else if (b.length === 0) {
    return a.slice(0, 1) + '@';
  } else {
    return a.slice(0, 1) + b.slice(-1);
  }
}

// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

function conCat(a, b) {
  if (a.slice(-1) === b.slice(0, 1)) {
    return a.slice(0, -1) + b;
  } else {
    return a + b;
  }
}

// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

function lastTwo(str) {
  if (str.length < 2) {
    return str;
  } else {
    return str.slice(0, -2) + str.slice(-1) + str.slice(-2, -1);
  }
}

// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

function seeColor(str) {
  let result =
    str.slice(0, 3) === 'red'
      ? 'red'
      : str.slice(0, 4) === 'blue'
      ? 'blue'
      : '';
  return result;
}

// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

function frontAgain(str) {
  return str.length < 2
    ? false
    : str.slice(0, 2) === str.slice(-2)
    ? true
    : false;
  return result;
}

// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

function extraFront(str) {
  return str.length <= 1 ? str.repeat(3) : str.slice(0, 2).repeat(3);
}

// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

function without2(str) {
  return str.length <= 1
    ? str
    : str.slice(0, 2) === str.slice(-2)
    ? str.slice(2)
    : str;
}

// Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

function startWord(str, word) {
  if (word.length <= 1) {
    return str.slice(0, 1);
  } else if (str.slice(1, word.length) === word.slice(1)) {
    return str.substring(0, word.length);
  } else {
    return '';
  }
}

// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

function withoutX(str) {
  return str.slice(0, 1) !== 'x' && str.slice(-1) !== 'x'
    ? str
    : str.slice(0, 1) === 'x' && str.slice(-1) === 'x'
    ? str.slice(1, -1)
    : str.slice(0, 1) === 'x'
    ? str.slice(1)
    : str.slice(-1) === 'x'
    ? str.slice(0, -1)
    : str;
}

// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

function withoutX2(str) {
  if (str.slice(0, 2) === 'xx') {
    return str.slice(2);
  } else if (str.slice(0, 1) === 'x') {
    return str.slice(1);
  } else if (str.slice(1, 2) === 'x') {
    return str.slice(0, 1) + str.slice(2);
  } else {
    return str;
  }
}

// Given a string, return a string where for every char in the original, there are two chars.

function doubleChar(str) {
  const str1 = str.split('').map((element) => element.repeat(2));
  return str1.join('');
}

// Return the number of times that the string "hi" appears anywhere in the given string.

function countHi(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] + str[i + 1] === 'hi') {
      count++;
    }
  }
  return count;
}

// Return true if the string "cat" and "dog" appear the same number of times in the given string.

function catDog(str) {
  let catCount = (str.match(/cat/g) || []).length;
  let dogCount = (str.match(/dog/g) || []).length;

  return catCount === dogCount;
}

// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

function countCode(str) {
  let count = 0;
  for (let i = 0; i < str.length - 3; i++) {
    if (str.slice(i, i + 2) === 'co' && str[i + 3] === 'e') {
      count++;
    }
  }
  return count;
}

// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

function endOther(a, b) {
  let stringA = a.toLowerCase();
  let stringB = b.toLowerCase();
  if (stringA.endsWith(stringB) || stringB.endsWith(stringA)) {
    return true;
  }
  return false;
}

// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

function bobThere(str) {
  return str.match(/b.b/g) ? true : false;
}

// Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

function mixString(a, b) {
  let results = '';
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) results += a[i];
    if (b[i]) results += b[i];
  }
  return results;
}

// Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

function repeatEnd(str, n) {
  return str.slice(-n).repeat(n);
}

// Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

function repeatFront(str, n) {
  let result = '';
  for (let i = n; i > 0; i--) {
    result += str.slice(0, i);
  }
  return result;
}

// Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

function repeatSeparator(word, sep, count) {
  if (count === 0) {
    return '';
  }
  if (count === 1) {
    return word;
  }

  let result = '';
  for (let i = 0; i < count - 1; i++) {
    result += word + sep;
  }
  result += word;

  return result;
}

// Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

function prefixAgain(str, n) {
  const prefix = str.slice(0, n);
  for (let i = n; i <= str.length - n; i++) {
    if (prefix === str.slice(i, i + n)) {
      return true;
    }
  }
  return false;
}

// Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

function oneTwo(str) {
  let result = '';
  for (let i = 0; i <= str.length - 3; i += 3) {
    result += str.slice(i + 1, i + 3) + str[i];
  }
  return result;
}

// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

function zipZap(str) {
  return str.replace(/z.p/g, (match) => {
    return match[0] + match[2];
  });
}

// Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

function starOut(str) {
  return str.replace(/.?\*+.?/g, '');
}

// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

function plusOut(str, word) {
  let parts = str.split(word);
  for (let i = 0; i < parts.length; i++) {
    parts[i] = '+'.repeat(parts[i].length);
  }
  return parts.join(word);
}

// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

function withoutString(base, remove) {
  const regex = new RegExp(remove, 'gi');
  return base.replace(regex, '');
}

// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

function equalIsNot(str) {
  const isCount = (str.match(/is/g) || []).length;
  const notCount = (str.match(/not/g) || []).length;
  return isCount === notCount;
}

// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

function gHappy(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'g') {
      if (str[i - 1] !== 'g' && str[i + 1] !== 'g') {
        return false;
      }
    }
  }
  return true;
}

// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

function countTriple(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1] && str[i] === str[i + 1]) {
      count++;
    }
  }
  return count;
}

//Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}

// Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".

function sameEnds(str) {
  let maxLength = Math.floor(str.length / 2);
  for (let i = 1; i <= maxLength; i++) {
    let startString = str.slice(0, i);
    let endString = str.slice(-i);
    if (startString === endString) {
      return true;
    }
  }

  return false;
}

// char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

// Examples

// everyNth('Miracle', 2) → Mrce
// everyNth('abcdefg', 2) → aceg
// everyNth('abcdefg', 3) → adg

function everyNth(str, n) {
  let result = '';

  for (let i = 0; i < str.length; i += n) {
    result += str[i];
  }

  return result;
}

// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// Examples

// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi

function stringTimes(str, n) {
  return str.repeat(n);
}

// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

// Examples

// frontTimes('Chocolate', 2) → ChoCho
// frontTimes('Chocolate', 3) → ChoChoCho
// frontTimes('Abc', 3) → AbcAbcAbc

function frontTimes(str, n) {
  return str.slice(0, 3).repeat(n);
}

// Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

// Examples

// countXX('abcxx') → 1
// countXX('xxx') → 2
// countXX('xxxx') → 3

function countXX(str) {
  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'x' && str[i + 1] === 'x') {
      count++;
    }
  }

  return count;
}

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true

function doubleX(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'x') {
      return str[i + 1] === 'x';
    }
  }
  return false;
}

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// Examples

// stringBits('Hello') → Hlo
// stringBits('Hi') → H
// stringBits('Heeololeo') → Hello

function stringBits(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    result += str.charAt(i);
  }
  return result;
}

// Given a non-empty string like "Code" return a string like "CCoCodCode"

function stringSplosion(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str.slice(0, i + 1);
  }
  return result;
}

// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

// Examples

// last2('hixxhi') → 1
// last2('xaxxaxaxx') → 1
// last2('axxaaxx') → 1

function last2(str) {
  if (str.length < 2) return 0;
  const last2 = str.slice(-2);
  let count = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 2) === last2) {
      count++;
    }
  }

  return count;
}

// Given an array of ints, return the number of 9's in the array.

// Examples

// arrayCount9([1,2,9]) → 1
// arrayCount9([1,9,9]) → 2
// arrayCount9([1,9,9,3,9]) → 3

function arrayCount9(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 9) {
      count++;
    }
  }
  return count;
}
