const { expect } = require('chai');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two numbers after rounding', function() {
      expect(calculateNumber('SUM', 1, 3).to.equal(4));
      expect(calculateNumber('SUM', 1, 3.7).to.equal(5));
      expect(calculateNumber('SUM', 1.2, 3.7).to.equal(5));
      expect(calculateNumber('SUM', 1.5, 3.7).to.equal(6));
      expect(calculateNumber('SUM', 1.4999999, 3.499999).to.equal(4));
    });
  });
  describe('SUBTRACT', function() {
    it('should return the difference of two numbers after rounding', function() {
      expect(calculateNumber('SUBTRACT', 1, 3).to.equal(-2));
      expect(calculateNumber('SUBTRACT', 1, 3.7).to.equal(-3));
      expect(calculateNumber('SUBTRACT', 1.2, 3.7).to.equal(-3));
      expect(calculateNumber('SUBTRACT', 1.5, 3.7).to.equal(-2));
      expect(calculateNumber('SUBTRACT', 1.4999999, 3.499999).to.equal(-2));
    });
  });
  describe('DIVIDE', function() {
    it('should return the quotient of two numbers after rounding', function() {
      expect(calculateNumber('DIVIDE', 4, 2).to.equal(2));
      expect(calculateNumber('DIVIDE', 3.7, 2).to.equal(2));
      expect(calculateNumber('DIVIDE', 3.7, 1.2).to.equal(4));
      expect(calculateNumber('DIVIDE', 3.7, 1.5).to.equal(2));
      expect(calculateNumber('DIVIDE', 3.499999, 1.4999999).to.equal(3));
      expect(calculateNumber('DIVIDE', 3.7, 0).to.equal('Error'));
    });
  });
});
