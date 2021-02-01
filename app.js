// Imports
import express from 'express';
import mongoose from 'mongoose';
// import { config } from 'dotenv';
import dotenv from 'dotenv'

import {studentRouter} from './routes/studentRouter.js'

const app = express();

// require('dotenv').config();
// const userDB = dotenv.config().parsed['USERDB'];
// const pswDB = config().parsed['PWDDB'];
// const porta = config().parsed['PORT'];

// const dotenv = require('dotenv')
const result = dotenv.config();

// console.log(process.env.USERDB);
// console.log(process.env.PWDDB);
// console.log(process.env.PORT);

// Conexão com o Mongoose.
(async () => {
    try {
        await mongoose.connect("mongodb+srv://" + process.env.USERDB + ":" + process.env.PWDDB + "@cluster0.8ugcv.mongodb.net/" + process.env.NAMEDB + "?retryWrites=true&w=majority",
             {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        );
        console.log("Conectado ao Mongo DB Atlas.");
    } catch (error) {
        console.log("Erro ao conectar no Mogo DB Atlas." + error);
    }
})();



app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log("API Iniciada."))