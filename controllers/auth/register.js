const { catchAsync } = require('../../utils');

const User = require("../../models/userModel");

exports.register = catchAsync(async (req, res) => {
  console.log('constoller register body:', req.body);

  const newUser = await User.create(req.body);

  // newUser.password = undefined;

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

