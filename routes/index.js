var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var router = express.Router();
var url = "mongodb://localhost:27017/";

router.get('/', function(req, res, next) {
  
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    dbo.collection("users").find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.render('index', { users: result });
      db.close();
    });
  });
});

module.exports = router;
