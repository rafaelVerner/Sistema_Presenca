import mongoose from 'mongoose';

const alunoSchema = new mongoose.Schema(
    {
        nome: String,
        codigo: Number,
        idade: Number,
        responsavel: String,
        curso: String
    }
)


const alunoModel = mongoose.model("Aluno", alunoSchema);

export default alunoModel;