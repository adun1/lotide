const assertArrayEqual = require('../assertArraysEqual');
const tail = require('../tail');

//Tests
assertArrayEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArrayEqual(tail([]), []);
assertArrayEqual(tail([1]),[]);
assertArrayEqual(tail([1,2]), [2]);
assertArrayEqual(tail(tail([1,2,3,4])), [3,4]);