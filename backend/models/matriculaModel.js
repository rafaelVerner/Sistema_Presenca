import mongoose from "mongoose";

const matrucilaSchema = new mongoose.Schema(
    {
        aluno: {type: mongoose.Schema.Types.ObjectId, ref:"Aluno", required: true},
        curso: {type: mongoose.Schema.Types.ObjectId, ref: "Curso", required: true},
        dataMatricula: Date,
        status: {type: String, enum: ["ativa", "inativa"], default: "ativa"}

    },
    {timestamps: true}
)