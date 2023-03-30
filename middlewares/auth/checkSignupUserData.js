const User = require('../../models/userModel');
const { catchAsync, validator, AppError } = require('../../utils');

/**
 * Check create new user data middleware
 */
exports.checkSignupUserData = catchAsync(async (req, res, next) => {
  const { error, value } = validator.userValidator(req.body);

  if (error) return next(new AppError(400, error.details.map((item) => item.message)));

  // const userExists = await User.findOne({ email: value.email }).select('_id');
  const userExists = await User.exists({ email: value.email });

  if (userExists) return next(new AppError(409, 'Email in use'));

  req.body = value;

  next();
});