// import { login, logout } from './controller';

// const authen = (router) => {
//   router.route('/login').post(login);
//   router.route('/logout').put(logout);
// }

// export default authen;

const express = require('express');
const router = express.Router();

import * as authenController from './controller';
const url = require('url');

const app = express();

//post send data to store

router.get('/login', authenController.login);
router.put('/logout', authenController.logout);

module.exports = router;
