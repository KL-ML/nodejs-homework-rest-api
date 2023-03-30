const jwt = require('jsonwebtoken');

const { catchAsync, AppError } = require('../../utils');
const User = require("../../models/userModel");

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) return next(new AppError(401, 'Not authorized'));

    const passwordIsValid = await user.checkPassword(password, user.password);

    if (!passwordIsValid) return next(new AppError(401, 'Not authorized'));

    const token = signToken(user.id);

    res.status(200).json({
        token: token,
        user: {
            email: user.email,
            subscription: user.subscription,
        },
    });
});



// const jwt = require("jsonwebtoken");
// const { HttpError } = require("../../helpers");
// const { User } = require("../../models/user");

// const { SECRET_KEY } = process.env;

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) {
//     throw HttpError(401, "Email or password is wrong"); //throw HttpError(401, "Email invalid");
//   }

//   const passwordCompare = await bcrypt.compare(password, user.password);
//   if (!passwordCompare) {
//     throw HttpError(401, "Email or password is wrong"); //throw HttpError(401, "Password invalid");
//   }
//   const payload = {
//     id: user._id,
//   };

//   const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

//   await User.findByIdAndUpdate(user._id, { token });
//   res.json({
//     status: "OK",
//     code: 200,
//     data: {
//       token,
//       user: {
//         email,
//         subscription: user.subscription,
//       },
//     },
//   });
// };

// module.exports = login;
