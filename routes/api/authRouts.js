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

router
    .route('/logout')
    .post(
        authMiddleware.checkToken,
        authController.logout
    );

router
    .route('/current')
    .post(
        authMiddleware.checkToken,
        authController.getCurrent
);
    
router
    .route('/')
    .patch(
        authMiddleware.checkToken,
        authMiddleware.checkUserSubscr,
        authController.updateSubscription
);
    
router
    .route("/avatars")
    .patch(
    authMiddleware.checkToken,
    authMiddleware.upload.single("avatar"),
    authController.updateAvatar
);

module.exports = router;