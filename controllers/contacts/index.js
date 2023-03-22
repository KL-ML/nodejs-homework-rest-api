const { listContacts } = require('./listContacts');
const { addContact } = require('./addContact');
const { getById } = require('./getById');
const { updateContact } = require('./updateContact');
const { removeContact } = require('./removeContact');
const { updateStatusContact } = require('./updateStatusContact');

module.exports = {
    listContacts,
    addContact,
    getById,
    updateContact,
    removeContact,
    updateStatusContact
};
