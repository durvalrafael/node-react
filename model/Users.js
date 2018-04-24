var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
var Users; 

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Users");
    Users = dbo.collection("users");
});

module.exports = Users;
