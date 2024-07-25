const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function() {
  it('should return the sum of two numbers after rounding', function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.strictEqual(calculateNumber('SUM', 1.4999999, 3.499999), 4);
  });
  it('should return the difference of two numbers after rounding', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4999999, 3.499999), -2);
  });
  it('should return the quotient of two numbers after rounding', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 2), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 4);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 3.499999, 1.4999999), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 3.7, 0), 'Error');
  });
});
