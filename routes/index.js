var express = require('express');
var Users = require('../model/Users');

var router = express.Router();


router.get('/', function(req, res, next) {
  Users.find().toArray(function (err, result) {
    if (err) throw err;
    res.render('index', { users: result });
  });
});


module.exports = router;