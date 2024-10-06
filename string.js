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
