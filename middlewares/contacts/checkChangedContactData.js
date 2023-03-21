const { AppError, validators } = require('../../utils');

/**
 * Check changed contact data.
 */
exports.checkChangedContactData = (req, res, next) => {
  // Check changed contact data.
  const { error, value } = validators.patchContactValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  req.body = value;

  next();
};
