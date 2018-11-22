var bodyParser = require('body-parser');
var multer = require('multer');
var express = require('express');

var app = express();
var upload = multer();

// var connect = require('./connection.js');
// var person = require('./routers/person.js');
// var author = require('./routers/author.js');

// app.set('view engine', 'pug');
// app.set('views', './views');

import product from './modules/product';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());


// app.use('/person', person);
// app.use('/author', author);

app.use('/product', product)


// app.set('view engine', 'pug');
// app.get('/', function(req, res){ 
//     res.render('index',{user: "Great User",title:"homepage"});
// });



app.listen(3000);


// import rootRoute from './routes/index';

// // import path from 'path';
// import cors from 'cors';
// import express from 'express';
// import bodyParser from 'body-parser';
// import compression from 'compression';
// const app = express();
// const router = express.Router();

// import product from './modules/product';

// // app.use(express.static(path.join(__dirname, 'app')))
// app.use(cors());
// app.use(compression());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // rootRoute(router);

// // console.log('Root Route', JSON.stringify(rootRoute));

// app.use('/product', product);

// app.use('/api', router);
// app.listen(process.env.PORT || 80, () => {
//   console.log('API listening on port 80!')
// })

// module.exports = app;
