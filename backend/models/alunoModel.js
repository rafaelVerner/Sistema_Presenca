import mongoose from 'mongoose';

const alunoSchema = new mongoose.Schema(
    {
        nome: String,
        codigo: Number,
        login: String,
        senha: String,
        idade: Number,
        responsavel: {type: mongoose.Schema.Types.ObjectId, ref: "Responsavel"},
        curso: {type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true},
    },
    {timestamps: true}
)


const alunoModel = mongoose.model("Aluno", alunoSchema);

export default alunoModel;