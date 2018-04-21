var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var router = express.Router();
var url = "mongodb://localhost:27017/";
var router = express.Router();


router.get('/', function(req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    dbo.collection("users").find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send({ users: result });
      db.close();
    });
  });
});
router.get('/:id', function(req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var query = { _id: ObjectID(req.params.id)};
    dbo.collection("users").find(query).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});
router.post('/', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    dbo.collection("users").insertOne(req.body, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});
router.put('/:id', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var query = { _id: ObjectID(req.params.id) };
    var updateQuery = { $set: req.body }; 
    dbo.collection("users").updateOne(query, updateQuery, function (err, result) {
      if (err) res.send({error: err});
      res.send(result);
      db.close();
    });
  });
});
router.delete('/:id', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    var query = { _id: ObjectID(req.params.id) };
    dbo.collection("users").remove(query, function (err, result) {
      if (err) res.send({ error: err });
      res.send(result);
      db.close();
    });
  });
});

module.exports = router;
