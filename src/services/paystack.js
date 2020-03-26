const { payStackGet, payStackPost } = require('../config/paystack');
const log = require('../utils/logger');

exports.initializeTransaction = async payload => {
  const response = { data: null, error: null };
  payload.amount = payload.amount * 100;
  try {
    log.dev('Creating transaction');
    response.data = await payStackPost('/transaction/initialize', payload);
  } catch (error) {
    response.error = await handlePaystackApiError(error);
  }

  return response;
};

exports.verifyTransaction = async reference => {
  const response = { data: null, error: null };

  try {
    response.data = await payStackGet(`/transaction/verify/${reference}`);
  } catch (error) {
    response.error = await handlePaystackApiError(error);
  }

  return response;
};

const handlePaystackApiError = async error => {
  if (error.message.includes('Incorrect statusCode:')) {
    return {
      message: 'An error occured. Please verify your credentials/inputs',
      responseBody: JSON.parse((await error.responseBody).toString()),
      statusCode: error.statusCode
    };
  }

  return {
    message: 'An error occured. Please try again',
    statusCode: 400
  };
};
