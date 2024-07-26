const Utils = require('./utils.js');
const sendPaymentToApi = require('./4-payment.js');
const chai = require('chai');
const sinon = require('sinon');


describe('sendPaymentToApi', function() {
  it('should send payment to API', function() {
    const spy = sinon.spy(console)
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentToApi(100, 20);
    chai.expect(stub.calledOnce).to.be.true;
    chai.expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    chai.expect(spy.log.calledWith('The total is: 10')).to.be.true;
    chai.expect(spy.log.calledOnce).to.be.true;
    stub.restore();
    spy.log.restore();
  });
});
