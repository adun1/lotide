// FUNCTION IMPLEMENTATION
const middle = function(list) {
  let soln = [];
  //base case
  if (list.length <= 2)
    return [];
  
  if (!isOdd(list.length)) {
    soln.push(list[Math.floor(list.length / 2) - 1]);
  }
  soln.push(list[Math.floor(list.length / 2)]);
  return soln;
};

const isOdd = function(number) {
  if (number % 2 !== 0)
    return true;
  return false;
};

module.exports = middle;