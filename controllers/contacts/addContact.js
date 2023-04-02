const { catchAsync } = require('../../utils') 
const Contact = require('../../models/contactModel');

/**
 * Create contact.
 */
exports.addContact = catchAsync(async (req, res) => {
    
  const newContact = await Contact.create(req.body);

  res.status(201).json(
    newContact
  );
});
