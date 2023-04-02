const Joi = require('joi');
const myCustomJoi = Joi.extend(require('joi-phone-number'));

exports.patchContactValidator = (data) => Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().alphanum().min(2).max(22).optional(),
    email: Joi.string().email().optional(),
    phone: myCustomJoi.string().phoneNumber({ defaultCountry: 'UA', format: 'e164' }).optional(),
    favorite: Joi.boolean().optional()
  }).validate(data);
