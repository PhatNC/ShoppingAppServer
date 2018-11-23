const express = require('express');
const router = express.Router();

import * as shopController from './controller';
const url = require('url');

const app = express();

//post send data to store

router.get('/', shopController.getShops);
router.post('/', shopController.addShop);
router.put('/', shopController.updateShop);
router.delete('/', shopController.deleteShop);

module.exports = router;
