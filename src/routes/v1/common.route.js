const express = require('express');
const userController = require('../../controllers/v1/user.controller');

// auth middelware
const openRouter = express.Router();

// declear all open route here
openRouter.get('/test', userController.index);


module.exports = openRouter;