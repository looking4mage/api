var jwt = require('jsonwebtoken');
var config = require('../../../config/global')
var Message = require('../../communication/MessageModel')
module.exports = function (req, res, next) {
    let token = req.headers['gamer-suit-token']
    
    if (token) {
      jwt.verify(token, config.app.secret, (err, decoded) => {
        if (err) {
          return res.json(new Message('Token is not valid'));
        } else {
          req.decoded = decoded;
          console.log(decoded);
          next();
        }
      });
    } else {
      return res.json(new Message('Auth token is not supplied'));
    }
    }