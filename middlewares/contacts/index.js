const { checkNewContactData } = require('./checkNewContactData');
const { checkChangedContactData } = require('./checkChangedContactData');
const { checkStatusData } = require('./checkStatusData');
const { checkContactId } = require('./checkContactId');
// const { removeContact } = require('./removeContact');
// const { updateStatusContact } = require('./updateStatusContact');

module.exports = {
    checkNewContactData,
    checkChangedContactData,
    checkStatusData,
    checkContactId,
    // removeContact,
    // updateStatusContact
};