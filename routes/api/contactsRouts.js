const express = require('express')

const contactController = require('../../controllers/contacts')
const contactMiddlewares = require('../../middlewares/contacts')
const authMiddleware = require('../../middlewares/auth');

const router = express.Router()

router.route('/')
  .get(
    authMiddleware.checkToken,
    contactController.listContacts
  )
  .post(
    authMiddleware.checkToken,
    contactMiddlewares.checkNewContactData,
    contactController.addContact
  );
  

router.use(
  '/:id',
  authMiddleware.checkToken,
  contactMiddlewares.checkContactId
);

router
  .route('/:id')
  .get(authMiddleware.checkToken, contactController.getById)
  .patch(
    authMiddleware.checkToken,
    contactMiddlewares.checkChangedContactData,
    contactController.updateContact
  )
  .delete(authMiddleware.checkToken, contactController.removeContact);

router
  .route('/:id/favorite')
  .patch(
    authMiddleware.checkToken,
    contactMiddlewares.checkStatusData,
    contactController.updateStatusContact
);
  
module.exports = router;
