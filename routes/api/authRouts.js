const { Router } = require('express');

const authMiddleware = require('../../middlewares/auth');
const authController = require('../../controllers/auth');

const router = Router();

router.post('/signup', authMiddleware.checkSignupUserData, authController.register);
// router.post('/login', authController.login);

module.exports = router;