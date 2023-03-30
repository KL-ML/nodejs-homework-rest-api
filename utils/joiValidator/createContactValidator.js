const Joi = require('joi');
const myCustomJoi = Joi.extend(require('joi-phone-number'));

exports.createContactValidator = (data) => Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().alphanum().min(2).max(22).required(),
    email: Joi.string().email().required(),
    phone: myCustomJoi.string().phoneNumber({ defaultCountry: 'UA', format: 'e164' }).required(),
    favorite: Joi.boolean().optional()
  }).validate(data);
