const Joi = require('joi');

exports.patchStatusValidator = (data) => Joi.object()
  .options({ abortEarly: false })
  .keys({
    favorite: Joi.boolean().required()
  }).validate(data);
