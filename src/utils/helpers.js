exports.asyncHandler = fn => (...args) => fn(...args).catch(args[2]);

exports.successResponse = (res, data, status = 200) => {
  res.status(status).json({ data });
};

exports.errorResponse = (res, error, status = 500) => {
  res.status(status).json({ error });
};
