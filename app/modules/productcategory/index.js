const express = require('express');
const router = express.Router();

import * as categoryController from './controller';
const url = require('url');

const app = express();

//post send data to store

router.get('/', categoryController.getCategories);
router.post('/', categoryController.addCategory);
router.put('/', categoryController.updateCategory);
router.delete('/', categoryController.deleteCategory);

module.exports = router;
