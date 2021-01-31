import express from 'express'
import {studentModel} from '../models/studentModel.js';

const app = express();

// Create
app.post('/student', async (req, res) => {
    try {
        const student = new studentModel(req.body);

        await student.save();

        res.send(student);

    } catch (error) {
        res.status(500).send(error);
    }
});

// Retrieve
app.get('/student', async (req, res) => {
    try {
        const student = await (studentModel.find({}));
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update
app.patch('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Com o option {new: true} a atualização retornará o objeto atualizado.
        // studentModel.findByIdAndUpdate(id?,update?,option?)
        const student = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true,});

        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update com Put
app.put('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Com o option {new: true} a atualização retornará o objeto atualizado.
        // studentModel.findByIdAndUpdate(id?,update?,option?)
        const student = await studentModel.findOneAndUpdate({_id: id}, req.body, {new: true,});

        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Delete by Id
app.delete('/student/:id', async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete({_id: req.params.id});

        if (!student){
            res.status(404).send('Documento não encontrdo na coleção');
        } else {
            res.status(200).send();
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})

export {app as studentRouter};