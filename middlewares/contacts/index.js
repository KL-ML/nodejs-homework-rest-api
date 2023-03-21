const { checkNewContactData } = require('./checkNewContactData');
const { checkChangedContactData } = require('./checkChangedContactData');
const { checkStatusData } = require('./checkStatusData');
const { checkContactId } = require('./checkContactId');

module.exports = {
    checkNewContactData,
    checkChangedContactData,
    checkStatusData,
    checkContactId,
};