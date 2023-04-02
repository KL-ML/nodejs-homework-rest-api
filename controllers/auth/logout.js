// const { User } = require("../../models/user");
const User = require('../../models/userModel');
const { catchAsync } = require('../../utils');

exports.logout = catchAsync(async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });
    res.status(200).json({ message: "No Content" });
});
