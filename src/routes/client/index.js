var express = require('express');
var router = express.Router();

var NewsRouter = require('./News')


//all client routes
router.use('/news',NewsRouter);


module.exports = router;
