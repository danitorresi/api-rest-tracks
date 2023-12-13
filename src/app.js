import express from 'express';
import cors from 'cors';

import indexRouter from './routes/index.routes.js';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { dbConnectMongo } from './config/mongo.js';
import { dbConnectMySql } from './config/mysql.js';
import dotenv from 'dotenv';

const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(join(__dirname, 'storage')));
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api', indexRouter);

(ENGINE_DB === "nosql") ? dbConnectMongo() : dbConnectMySql();

dotenv.config({path: ".env"});

export default app;