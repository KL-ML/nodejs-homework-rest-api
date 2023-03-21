const { AppError, validators } = require('../../utils');

/**
 * Check favorite status contact data.
 */
exports.checkStatusData = (req, res, next) => {
  // Check changed contact data.
  const { error, value } = validators.patchStatusValidator(req.body);

  if (error) return next(new AppError(400, 'Missing field favorite'));

  req.body = value;

  next();
};
