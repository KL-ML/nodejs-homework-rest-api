const { catchAsync } = require('../../utils/contacts') 
const { Contact } = require('../../models/contacts');

/**
 * Update contact by id.
 */
exports.updateContact = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, favorite } = req.body;

  const updatedContact = await Contact.findByIdAndUpdate(id, {
    name, email, phone, favorite
  }, { new: true }).select('-__v');

  res.status(200).json(
    updatedContact
  );
});
