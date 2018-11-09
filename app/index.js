import rootRoute from './router';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
const app = express();
const router = express.Router();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

rootRoute(router);

app.listen(process.env.PORT || 80, () => {
  console.log('API listening on port 80!')
})

module.exports = app;
