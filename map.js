const eqArrays = function(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected, val) {
  let result = eqArrays(actual, expected);
  if (result !== val)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const map = function(array, callback) {
  let soln = [];
  for (const item of array) {
    soln.push(callback(item));
  }
  return soln;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual((map(words, x => x[0])), ['g', 'c', 't', 'm', 't'], true);