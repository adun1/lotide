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

const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else return results;
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], true);
assertArraysEqual(takeUntil([], x => x === 0), [], true);
assertArraysEqual(takeUntil([], () => {}), [], true);
assertArraysEqual(takeUntil([1], x => x < 0), [1], true);
assertArraysEqual(takeUntil([0], x => x <= 0), [], true);
assertArraysEqual(takeUntil([1,2,3], x => x === 0), [1,2,3], true);
assertArraysEqual(takeUntil([1,2,3], () => {}), [1,2,3], true);
assertArraysEqual(takeUntil([1,2,3], () => true), [], true);
