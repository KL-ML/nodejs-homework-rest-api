const { catchAsync } = require('../../utils/contacts') 
const { Contact } = require('../../models/contacts');

/**
 * Get contact by id.
 */
exports.getById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id).select('-__v');

  res.status(200).json(
    contact
  );
});
