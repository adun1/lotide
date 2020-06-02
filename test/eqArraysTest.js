const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([], []));
console.log(eqArrays(0, []));
console.log(eqArrays([1],[]));
console.log(eqArrays([],[1]));
console.log(eqArrays([1,2], [2]));