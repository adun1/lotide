// FUNCTION IMPLEMENTATION

//assuming an array is passed into the function
//  no checks are in place to protect against that
const tail = function(object1) {
  return object1.slice(1);
};

module.exports = tail;