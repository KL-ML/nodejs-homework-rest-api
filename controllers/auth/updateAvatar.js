const fs = require('fs').promises;
const path = require("path");
const Jimp = require("jimp");
const User = require("../../models/userModel");
const { catchAsync } = require('../../utils');
const avatarDir = path.join(__dirname, "../../", "public", "avatars");

exports.updateAvatar = catchAsync(async (req, res) => {
  const { _id: id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const fileName = `${id}_${originalname}`;
  
  try {
    const resultUpload = path.join(avatarDir, fileName);
    const avatarURL = path.join('public', 'avatars', fileName);
    
    await fs.rename(tempUpload, resultUpload);
    const image = await Jimp.read(`${avatarURL}`);
    await image.resize(250, 250);
    await image.writeAsync(resultUpload);

    await User.findByIdAndUpdate(id, { avatarURL });
    res.status(200).json({
      status: 'updated',
      code: 200,
      data: {
        user: {
          avatarURL,
        },
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw new Error(401, "Not authorized");
  }
});
