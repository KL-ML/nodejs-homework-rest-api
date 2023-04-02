const { Types } = require('mongoose');

const { Contact } = require('../../models/contactModel');
const { AppError, catchAsync } = require('../../utils');

/**
 * Check contact id.
 */
exports.checkContactId = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const idIsValid = Types.ObjectId.isValid(id);

  // check if contact ID is invalid => send 'bad request' error
  if (!idIsValid) return next(new AppError(404, 'Contact with this id does not exist..'));
  
  const contactExists = await Contact.exists({ _id: id });
  // if contact exists => validation passed
  if (contactExists) return next();

  // if no contact with that id, sent 'not found' request
  return next(new AppError(404, 'Contact with this id does not exist..'));
});
