const express = require('express');
const router = express.Router();

import * as accountController from './controller';
const url = require('url');

const app = express();


router.post('/login', accountController.login);
// router.put('/logout', accountController.logout);
router.post('/', accountController.addAccount);


module.exports = router;
