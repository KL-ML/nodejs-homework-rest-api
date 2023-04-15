const { catchAsync, validator, AppError } = require('../../utils');

exports.checkVerifyEmail = catchAsync(async (req, res, next) => {
  
  const { error, value } = validator.emailValidator(req.body);

  if (error) return next(new AppError(400, error.details.map((item) => item.message)));
  
  req.body = value;

  next();
});