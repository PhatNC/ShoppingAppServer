const bodyParser = require('body-parser');
const multer = require('multer');
const express = require('express');

const app = express();
const upload = multer();

import product from './modules/product';
import account from './modules/account';
import bill from './modules/bill';
import billDetail from './modules/billDetail';
import favoriteProduct from './modules/favoriteProduct';
import main from './modules/main';
import productCategory from './modules/productCategory';
import productComment from './modules/productComment';
import shopInfo from './modules/shopInfo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.use('/product', product);
// app.use('/account', account);
app.use('/account', account);
// app.use('/bill', bill);
// app.use('/billDetail', billDetail);
// app.use('/favoriteProduct', favoriteProduct);
// app.use('/main', main);
// app.use('/productCategory', productCategory);
// app.use('/productComment', productComment);
// app.use('/shopInfo', shopInfo);

app.listen(3000);