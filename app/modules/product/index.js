var express = require('express');
var router = express.Router();
// var person = require('../controllers/personController.js');

import * as productController from './controller';
var url = require('url');

var app = express();

//post send data to store

router.get('/', productController.getProducts);
router.post('/', productController.addProduct);
router.put('/', productController.updateProduct);
router.delete('/', productController.deleteProduct);

module.exports = router;
