const url = require('url');
const paymentRoutes = require('./payment');
const { errorResponse, successResponse } = require('../utils/helpers');

const { CLIENT_REDIRECT_URL } = process.env;

const BASE_PATH = '/api/v1';

const routes = app => {
  app.use(`${BASE_PATH}/payment`, paymentRoutes);

  app.get(`${BASE_PATH}/paystack/callback`, (req, res) => {
    res.redirect(`${CLIENT_REDIRECT_URL}?${url.parse(req.url).query}`);
  });

  app.get(`${BASE_PATH}`, (req, res) => {
    successResponse(res, { message: 'Payment API' });
  });

  app.use('*', (req, res) => {
    errorResponse(res, { message: 'Resource not found' }, 404);
  });
};

module.exports = routes;
