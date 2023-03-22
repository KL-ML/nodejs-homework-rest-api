const { AppError, catchAsync, validators } = require('../../utils/contacts');

/**
 * Check new contact data.
 */
exports.checkNewContactData = catchAsync(async (req, res, next) => {
  // Check new contact data.
  const { error, value } = validators.createContactValidator(req.body);

  if (error) return next(new AppError(400, error.details[0].message));

  req.body = value;

  next();
});