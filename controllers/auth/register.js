const { catchAsync } = require('../../utils');
const gravatar = require("gravatar");

const User = require("../../models/userModel");

exports.register = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({email, password, avatarURL});

  // newUser.password = undefined;

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL
    },
  });
});

