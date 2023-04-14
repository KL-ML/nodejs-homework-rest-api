const jwt = require('jsonwebtoken');

const { catchAsync, AppError } = require('../../utils');
const User = require("../../models/userModel");

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) return next(new AppError(401, 'Email or password is wrong'));

    const passwordIsValid = await user.checkPassword(password, user.password);

    if (!passwordIsValid) return next(new AppError(401, 'Email or password is wrong'));

    const token = signToken(user.id);

    res.status(200).json({
        token: token,
        user: {
            email: user.email,
            subscription: user.subscription,
            avatarURL: user.avatarURL
        },
    });
});
