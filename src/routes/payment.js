const router = require('express').Router();

const paystack = require('../services/paystack');
const {
  asyncHandler,
  errorResponse,
  successResponse
} = require('../utils/helpers');

/* Routes */

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { data, error } = await paystack.initializeTransaction(req.body);

    if (data) return successResponse(res, data);

    errorResponse(res, error, error.statusCode);
  })
);

router.post(
  '/verify',
  asyncHandler(async (req, res) => {
    const { data, error } = await paystack.verifyTransaction(
      req.body.reference
    );

    if (data) return successResponse(res, data);

    errorResponse(res, error, error.statusCode);
  })
);

module.exports = router;
