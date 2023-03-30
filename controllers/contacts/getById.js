const { catchAsync } = require('../../utils') 
const { Contact } = require('../../models/contactModel');

/**
 * Get contact by id.
 */
exports.getById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  res.status(200).json(
    contact
  );
});
