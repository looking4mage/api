var express = require('express');
var router = express.Router();
var GameModel = require('./GameRepository');

/* GET home page. */
router.get('/list', function(req, res, next) {
  GameModel.findAll().then((rows)=>{
    res.json(rows);
  });
});


module.exports = router;