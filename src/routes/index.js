const { successResponse, errorResponse } = require('../utils/helpers');

const BASE_PATH = '/api/v1';

const routes = app => {
  app.get(`${BASE_PATH}`, (req, res) => {
    successResponse(res, { message: 'Payment API' });
  });

  app.use('*', (req, res) => {
    errorResponse(res, { message: 'Resource not found' }, 404);
  });
};

module.exports = routes;