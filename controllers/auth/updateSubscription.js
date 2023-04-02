const User = require("../../models/userModel");
const { catchAsync } = require("../../utils");

exports.updateSubscription = catchAsync(async (req, res) => {
    const { _id } = req.user;
    const { subscription } = req.body;
    const user = await User.findByIdAndUpdate(
        _id,
        { subscription },
        { new: true }
    );

    res.status(200).json({
        user: {
            email: user.email,
            subscription: user.subscription
        }
    });
});
