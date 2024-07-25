const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function() {
  it('should return the sum of two numbers after rounding', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.4999999, 3.499999), 4);
  });
});
