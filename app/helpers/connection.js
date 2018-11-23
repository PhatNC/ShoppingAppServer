const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost/ShoppingApp';
mongoose.connect(url);
module.exports = mongoose;