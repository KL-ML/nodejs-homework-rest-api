const { checkUserData } = require("./checkUserData");
const { checkUserExist } = require('./checkUserExist');
const { checkToken } = require('./checkToken');
const { checkUserSubscr } = require('./checkUserSubscr');
const { checkVerifyEmail } = require('./checkVerifyEmail');
const upload = require('./avatarApload');

module.exports = {
    checkUserData,
    checkUserExist,
    checkToken,
    checkUserSubscr,
    checkVerifyEmail,
    upload
}