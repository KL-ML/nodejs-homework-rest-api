const express = require('express');

const authMiddleware = require('../../middlewares/auth');
const authController = require('../../controllers/auth');

const router = express.Router();

router
    .route('/signup')
    .post(
        authMiddleware.checkSignupUserData,
        authController.register
    );
// router.post('/login', authController.login);

module.exports = router;