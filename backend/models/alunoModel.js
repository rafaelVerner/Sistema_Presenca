import mongoose from 'mongoose';

const alunoSchema = new mongoose.Schema(
    {
        nome: String,
        codigo: Number,
        login: String,
        senha: String,
        idade: Number,
        responsavel: String,
        curso: String
    }
)


const alunoModel = mongoose.model("Aluno", alunoSchema);

export default alunoModel;