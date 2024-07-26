const Utils = require('./utils.js');
const sendPaymentToApi = require('./3-payment.js');
const chai = require('chai');
const sinon = require('sinon');


describe('sendPaymentToApi', function() {
  it('should send payment to API', function() {
    sinon.spy(Utils, 'calculateNumber');
    sendPaymentToApi(100, 20);
    chai.expect(Utils.calculateNumber.calledOnce).to.be.true;
    chai.expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    Utils.calculateNumber.restore();
  });
});
