const jwt = require('jsonwebtoken');

const User = require('../../models/userModel');
const { catchAsync, AppError } = require('../../utils');

exports.checkToken = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1];

  if (!token) return next(new AppError(401, 'Not authorized'));

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err.message);

    return next(new AppError(401, 'Not authorized'));
  }

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) return next(new AppError(401, 'Not authorized'));

  req.user = currentUser;

  next();
});
