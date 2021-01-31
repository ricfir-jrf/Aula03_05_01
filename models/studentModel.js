import mongoose from 'mongoose';

// Criação do modelo
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    value: {
        type: Number,
        require: true,
        // validade(value) {
        //     if (value < 0){
        //         throw new Error("Não é permitido Valor negativo para a nota.")
        //     }
        // }
        min: 0,
    },
    lastModified: {
        type: Date,
        default: Date.now()
    }
});

// Definindo o modelo da coleção
// Se não informar o coleção, e cria uma coleção com mesmo nome do modelo no plural.
// mongoose.model(nome,schema, coleção)
const studentModel = mongoose.model('student', studentSchema, 'student');

export {studentModel};