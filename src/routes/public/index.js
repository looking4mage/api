var express = require('express');
var router = express.Router();

var UserRouter = require('./User')


//all client routes
router.use('/user',UserRouter);


module.exports = router;
