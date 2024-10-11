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
