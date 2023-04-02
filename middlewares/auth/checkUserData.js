const { catchAsync, validator, AppError } = require('../../utils');

/**
 * Check create new user data middleware
 */
exports.checkUserData = catchAsync(async (req, res, next) => {
  
  const { error, value } = validator.userValidator(req.body);

  if (error) return next(new AppError(400, error.details.map((item) => item.message)));
  
  req.body = value;

  next();
});