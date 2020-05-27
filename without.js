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

//function takes a provded source list and returns it with any word in the unwanted items removed
//  assumption that both arguments are provided as lists
const without = function(source, unwantedItems) {
  const withoutList = [];
  for (const srcWord of source) {
    if (!checkIfUnwanted(unwantedItems, srcWord))
      withoutList.push(srcWord);
  }
  return withoutList;
};

const checkIfUnwanted = function(unwantedItems, canidateWord) {
  for (const word of unwantedItems)
    if (word === canidateWord)
      return true;
  return false;
};

console.log(assertArraysEqual(without([1, 2, 3], [1]), [2,3], true)); // => [2, 3]
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true)); // => ["1", "2"]
console.log(assertArraysEqual(without([], [1, 2, "3"]), [], true)); // => []
console.log(assertArraysEqual(without([1, 2, "3"], []), [1, 2, "3"], true)); // => []
console.log(assertArraysEqual(without([], []), [], true)); // => []
console.log(assertArraysEqual(without(['1'], [1]), ['1'], true)); // => []
console.log(assertArraysEqual(without([1], ['1']), [1], true)); // => []

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);