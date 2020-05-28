// FUNCTION IMPLEMENTATION
/*
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
*/

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

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false); // => false
assertArraysEqual([], [], true);
assertArraysEqual(0, [], false);
assertArraysEqual([1],[], false);
assertArraysEqual([],[1], false);
assertArraysEqual([1,2], [2], false);