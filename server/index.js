import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import router from './routes/route.js';

const app=express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const port=process.env.PORT||8080;

const url=process.env.DATABASE;

Connection(url);

app.use('/',router);

app.listen(port,()=>console.log(`http://localhost:${port}`))