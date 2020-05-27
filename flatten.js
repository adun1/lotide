// FUNCTION IMPLEMENTATION
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

const flatten = function(list) {
  const currList = flattenHelper(list);
  return currList;
};

const flattenHelper = function(list) {
  let flatList = [];
  for (const item of list) {
    if (Array.isArray(item)) {
      flatList = flatList.concat(flattenHelper(item));
    } else
      flatList.push(item);
  }
  return flatList;
};

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6], true);
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6], [7, [8, 9, [10, [10.5]], 11]]])), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.5, 11], true);