const { catchAsync, AppError } = require('../../utils');
const User = require("../../models/userModel");

exports.verifyEmail = catchAsync(async (req, res, next) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

    if (!user) return next(new AppError(404, "User not found"));

    await User.findByIdAndUpdate(user._id, {
        verify: true,
        verificationToken: null,
    });

    res.json({
        status: "success",
        code: 200,
        ResponseBody: {
            message: "Verification successful",
        },
    });
});