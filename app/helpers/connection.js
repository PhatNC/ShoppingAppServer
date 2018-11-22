var mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/ShoppingApp';
mongoose.connect(url);
module.exports = mongoose;