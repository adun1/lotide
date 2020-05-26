// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  if (!checkIfArrayEqual(actual, expected))
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const checkIfArrayEqual = function(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};

//assuming an array is passed into the function
//  no checks are in place to protect against that
const tail = function(object1) {
  return object1.slice(1);
};

assertArrayEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

assertArrayEqual(tail([]), []);
assertArrayEqual(tail([1]),[]);
assertArrayEqual(tail([1,2]), [2]);

const words = [1,2,3];
tail(words);
assertArrayEqual(words.length, 3);