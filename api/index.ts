import express, { Application } from 'express';
import morgan from 'morgan';
import { connectToDatabase } from './src/database/database';
import dotenv from "dotenv";

import routes from './src/routes/IndexRoutes';

dotenv.config();

const app: Application = express();

const port = process.env.PORT || 3000;
connectToDatabase();

app.use(express.json(), morgan('dev'));

app.use('/v1', routes)

app.listen(port);
