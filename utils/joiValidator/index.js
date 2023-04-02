const { createContactValidator } = require('./createContactValidator');
const { patchContactValidator } = require('./patchContactValidator');
const { patchStatusValidator } = require('./patchStatusValidator');
const { userValidator } = require('./userValidator');
const { userSubscrValidator } = require('./userSubscrValidator');

module.exports = {
    createContactValidator,
    patchContactValidator,
    patchStatusValidator,
    userValidator,
    userSubscrValidator
}