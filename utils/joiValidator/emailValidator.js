const Joi = require('joi');

exports.emailValidator = (data) => Joi.object()
  .options({ abortEarly: false })
  .keys({
    email: Joi.string().email().required()
  }).validate(data);