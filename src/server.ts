import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import './database';
import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4040);