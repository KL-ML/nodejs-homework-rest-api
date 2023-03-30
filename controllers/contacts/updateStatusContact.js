const { catchAsync } = require('../../utils') 
const { Contact } = require('../../models/contactModel');

/**
 * Update contact's status by id
 */
exports.updateStatusContact = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  const updatedContactStatus = await Contact.findByIdAndUpdate(id, {
    favorite
  }, { new: true }).select('-__v');

  res.status(200).json(
    updatedContactStatus
  );
});