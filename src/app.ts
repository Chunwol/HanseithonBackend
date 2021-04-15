import "reflect-metadata";
  
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import { 
    rootRouter 
} from "./api/router"
const cors = require('cors');
const app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rootRouter);


export default app;
