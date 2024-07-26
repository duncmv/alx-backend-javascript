const request = require('request');
const chai = require('chai');


describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
