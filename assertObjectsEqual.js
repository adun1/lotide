/*
const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
*/

const eqArrays = function(a, b) {
  //case where one is not an array
  if (!((Array.isArray(a)) && (Array.isArray(b))))
    return false;
  
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
};

const isBothArray = function(item1, item2) {
  return ((Array.isArray(item1)) && (Array.isArray(item2)));
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keyList = [Object.keys(object1).sort(), Object.keys(object2).sort()];

  //case where the lengths differ or the keys specified differ
  if ((keyList[0].length !== keyList[1].length))
    return false;
  
  if (!eqArrays(keyList[0], keyList[1]))
    return false;
  
  //we know the key lists are the same in this case
  for (const key of keyList[0]) {
    //if both are not both arrays stop here
    if ((Array.isArray(object1[key])) || (Array.isArray(object2[key]))) {
      if (!isBothArray(object1[key], object2[key])) {
        return false;
      } else {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
    } else if (object1[key] !== object2[key])
      return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected))
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

//##Testing
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bx = { a: "2", b: "2" };
const by = { a: "1", c: "2" };
const abc = { a: "1", b: "2", c: "3" };
//#Simple Tests
// case identical object properties
console.log("should Pass");
assertObjectsEqual(ab, ab);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ba, ab);
// case different object properties
console.log("should Fail");
assertObjectsEqual(ab, bx);
assertObjectsEqual(ab, by);
assertObjectsEqual(ab, abc);

// case different object properties
//#Full Tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: "pop" };
console.log("should Pass");
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual({d: ["2", 3]}, {d: ["2", 3]});
console.log("should Fail");
assertObjectsEqual(cd, cd2); // => false
assertObjectsEqual(cd, cd3); // => false
assertObjectsEqual(cd3, cd); // => false