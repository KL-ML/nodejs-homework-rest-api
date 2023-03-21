const { catchAsync } = require('../../utils') 
const { Contact } = require('../../models/contacts');

/**
 * Delete contact by id.
 */
exports.removeContact = catchAsync(async (req, res) => {
  const { id } = req.params;

  await Contact.findByIdAndDelete(id);
  
  res.status(200).json({
    "message": "contact deleted"
  });
});
