// MODULES
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

//ERROR IMPORT
import misc from './misc';

const app = express();

// LOGGER
app.use(morgan('dev'));

//PARSE BODY TO JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

export default app;