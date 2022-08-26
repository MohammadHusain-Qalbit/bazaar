const express = require('express');
const authRouter = require('./auth.route');
const openRouter = require('./common.route');
const router = express.Router();

// merge auth and open route
router.use(openRouter)
router.use(authRouter)

module.exports = router