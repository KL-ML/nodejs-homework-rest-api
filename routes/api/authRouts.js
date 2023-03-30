const express = require('express');

const authMiddleware = require('../../middlewares/auth');
const authController = require('../../controllers/auth');

const router = express.Router();

router
    .route('/register')
    .post(
        authMiddleware.checkUserData,
        authMiddleware.checkUserExist,
        authController.register
);

router
    .route('/login')
    .post(
        authMiddleware.checkUserData,
        authController.login
    );
// router.post('/login', authController.login);

module.exports = router;