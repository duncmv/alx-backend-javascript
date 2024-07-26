const Utils = require('./utils.js')

function sendPaymentToApi(totalAmount, totalShipping) {
  const roundedAmount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${roundedAmount}`);
}

module.exports = sendPaymentToApi;
