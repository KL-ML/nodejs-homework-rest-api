const Joi = require('joi');

// const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,128})/;

exports.userValidator = (data) => Joi.object()
  .options({ abortEarly: false })
  .keys({
    password: Joi.string()
      .regex(PASSWD_REGEX)
      .required(),
      email: Joi.string().email().required(),
  }).validate(data);
