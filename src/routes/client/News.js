var express = require('express');
var router = express.Router();
var NewsRepository = require('../../components/news/NewsRepository')

/* GET home page. */
router.post('/', function(req, res, next) {
    
    res.send('client after validation');

    
});


module.exports = router;