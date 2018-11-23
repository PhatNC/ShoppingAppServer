const express = require('express');
const router = express.Router();

import * as productController from './controller';
const url = require('url');

const app = express();

//post send data to store

router.get('/', productController.getProducts);
router.post('/', productController.addProduct);
router.put('/', productController.updateProduct);
router.delete('/', productController.deleteProduct);

module.exports = router;
