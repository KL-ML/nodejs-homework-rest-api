const Joi = require('joi');
const userSubscrEnum = require('../../constants/userSubscrEnum');

exports.userSubscrValidator = (data) => Joi.object()
  .options({ abortEarly: false })
  .keys({
      subscription: Joi.string().valid(...Object.values(userSubscrEnum)).required(),
  }).validate(data);