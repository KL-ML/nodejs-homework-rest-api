const { catchAsync, AppError, sendEmail } = require('../../utils');
const User = require("../../models/userModel");

const { PORT = 3000 } = process.env;

exports.resendVerifyEmail = catchAsync(async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(new AppError(400, "Missing required field email"));
    if (user.verify) return next(new AppError(400, "Verification has already been passed"));

    const mail = {
        to: email,
        subject: "Email verification",
        html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${user.verificationToken}">Confirm your email</a>`,
    };
    await sendEmail(mail);

    res.json({
        status: "OK",
        code: 200,
        ResponseBody: {
            message: "Verification email resend",
        },
    });
});