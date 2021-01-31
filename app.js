// Imports
import express from 'express';
import mongoose from 'mongoose';

import {studentRouter} from './routes/studentRouter.js'

const app = express();

require('dotenv').config();

// Conexão com o Mongoose.
(async () => {
    try {
        await mongoose.connect(
            `mongodb+srv:// {$process.env.USERDB}
            ':'
            {process.env.PWDDB} @cluster0.8ugcv.mongodb.net/grades?retryWrites=true&w=majority`, 
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