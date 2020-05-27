/*
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
*/

const countLetters = function(input) {
  let results = {};
  input = (input.split(' ').join('')).toLowerCase();

  for (const letter of input) {
    if (!results[letter])
      results[letter] = 0;
    results[letter]++;
  }
  return results;
};

//test cases
console.log(countLetters("abc2 123"));
console.log(countLetters("LHL"));
console.log(countLetters("LHLlhl"));
console.log(countLetters("abcdefghijklmnopqrstuvwxyz"));
console.log(countLetters("abcdefghijklmnopqrssdftuvwxyz"));