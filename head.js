// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const head = function(object1) {
  return object1[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], undefined));
assertEqual(head([1]), 1);