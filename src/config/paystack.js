const bent = require('bent');

const Authorization = `Bearer ${process.env.PAYSTACK_TEST_SECRET}`;
const PAYSTACK_BASE_URL = 'https://api.paystack.co';

const payStackGet = bent(PAYSTACK_BASE_URL, 'json', { Authorization });
const payStackPost = bent(PAYSTACK_BASE_URL, 'POST', 'json', {
  Authorization
});

module.exports = { payStackGet, payStackPost };
