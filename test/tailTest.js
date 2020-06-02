const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]),[]);
  });

  it('returns [1] for [1,2]', () => {
    assert.deepEqual(tail([1,2]), [2]);
  });

  //rec
  it('returns [3,4] for tail(tail([1,2,3,4]))', () => {
    assert.deepEqual(tail(tail([1,2,3,4])), [3,4]);
  });
});