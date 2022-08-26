const express = require('express');
const userController = require('../../controllers/v1/user.controller');

// auth middelware
const { auth } = require('../../middlewares/v1/auth.middlewares');
const authRouter = express.Router();

// declear all auth route here
authRouter.get('/auth', auth, userController.index);


module.exports = authRouter;