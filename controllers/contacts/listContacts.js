const { catchAsync } = require('../../utils') 
const { Contact } = require('../../models/contacts');

/**
 * Get contacts list.
 */
exports.listContacts = catchAsync(async (req, res) => {
  
  const contacts = await Contact.find().select('-__v');
  
  res.status(200).json(
    contacts,
  );
});
