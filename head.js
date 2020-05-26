// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const head = function(object1) {
  return object1[0];
};

assertArrayEqual(head([5,6,7]), 5);
assertArrayEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertArrayEqual(head([], undefined));
assertArrayEqual(head([1]), 1);