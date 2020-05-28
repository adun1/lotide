const assertEqual = function(actual, expected) {
  if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  else
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = function(item, value) {
  const keys = Object.keys(item);
  for (const key of keys) {
    if (item[key] === value)
      return key;
  }
  return undefined;

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  action: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual((findKeyByValue(bestTVShowsByGenre, "The Expanse")), "sci_fi");