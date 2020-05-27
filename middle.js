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

const middle = function(list) {
  let soln = [];
  //base case
  if (list.length <= 2)
    return [];
  
  if (!isOdd(list.length)) {
    soln.push(list[Math.floor(list.length / 2) - 1]);
  }
  soln.push(list[Math.floor(list.length / 2)]);
  return soln;
};

const isOdd = function(number) {
  if (number % 2 !== 0)
    return true;
  return false;
};

//base case length <= 2
assertArraysEqual(middle([1]), [], true);
assertArraysEqual(middle([1,2]), [], true);

//odd array length
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);

//even array length
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);