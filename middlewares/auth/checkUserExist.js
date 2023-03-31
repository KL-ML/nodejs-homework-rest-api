const User = require('../../models/userModel');
const { catchAsync, AppError } = require('../../utils');

/**
 * Check create new user data middleware
 */
exports.checkUserExist = catchAsync(async (req, res, next) => {
  
  const { email } = req.body;

  const userExists = await User.exists({ email: email });

  if (userExists) return next(new AppError(409, 'Email in use'));

  next();
});