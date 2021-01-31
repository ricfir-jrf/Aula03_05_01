import express from 'express';
import mongoose from 'mongoose';

import {studentRouter} from './routes/studentRouter.js'

// Conexão com o mongoose.
(async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ricfir:ricfirMongo@cluster0.8ugcv.mongodb.net/grades?retryWrites=true&w=majority", 
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


const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log("API Iniciada."))