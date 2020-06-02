const assertArraysEqual = require('../assertArraysEqual');

//true cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([], []);

//false cases
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(0, []);
assertArraysEqual([1],[]);
assertArraysEqual([],[1]);
assertArraysEqual([1,2], [2]);

module.exports = assertArraysEqual;