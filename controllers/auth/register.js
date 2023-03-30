const { catchAsync } = require('../../utils');

const { User } = require("../../models/userModel");

exports.register = catchAsync(async (req, res) => {
  const newUserData = req.body;

  const newUser = await User.create(newUserData);

  // newUser.password = undefined;

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

