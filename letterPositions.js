const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const eqArrays = function(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(a, b, val) {
  return assertEqual(eqArrays(a, b), val);
};

const letterPositions = function(sentence) {
  sentence = (sentence.split(' ').join('')).toLowerCase();
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(results, sentence[i]))
      results[sentence[i]] = [];
    results[sentence[i]].push(i);
  }
  return results;
};

//console.log(letterPositions())
// console.log(letterPositions("lighthouse in the house")['l']);
//test passed
console.log("1: lighthouse in the house");
assertArraysEqual(letterPositions("lighthouse in the house")['l'], [0], true);
assertArraysEqual(letterPositions("lighthouse in the house")['i'], [1,10], true);
assertArraysEqual(letterPositions("lighthouse in the house")['g'], [2], true);
assertArraysEqual(letterPositions("lighthouse in the house")['h'], [3, 5, 13, 15], true);
assertArraysEqual(letterPositions("lighthouse in the house")['e'], [9, 14, 19], true);

console.log("----------------------------------");
//required test
console.log("2: hello");
assertArraysEqual(letterPositions("hello")['h'], [0], true);
assertArraysEqual(letterPositions("hello")['e'], [1], true);
assertArraysEqual(letterPositions("hello")['l'], [2,3], true);
assertArraysEqual(letterPositions("hello")['o'], [4], true);

// console.log(letterPositions("hello")['a']);
