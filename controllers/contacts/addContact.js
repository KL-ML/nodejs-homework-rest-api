const { catchAsync } = require('../../utils/contacts') 
const { Contact } = require('../../models/contacts');

/**
 * Create contact.
 */
exports.addContact = catchAsync(async (req, res) => {
    
  const newContact = await Contact.create(req.body);

  res.status(201).json(
    newContact
  );
});
