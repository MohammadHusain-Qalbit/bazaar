const express = require('express');
const userController = require('../../controllers/v1/user.controller');
const router = express.Router();

router.get('/test', userController.index);


module.exports = router;