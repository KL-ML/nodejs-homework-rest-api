const { catchAsync, sendEmail } = require('../../utils');
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const User = require("../../models/userModel");

const { PORT = 3000 } = process.env;

exports.register = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const verificationToken = uuidv4();
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({ email, password, avatarURL, verificationToken });

  const mail = {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${verificationToken}">Confirm your email</a>`,
  };
  await sendEmail(mail);

  res.status(201).json({
    message: "Verification link has been send to your email",
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL
    },
  });
});

