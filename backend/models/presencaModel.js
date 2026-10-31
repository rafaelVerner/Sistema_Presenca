import mongoose from "mongoose";

const presencaSchema = new mongoose.Schema(
    {
        aluno: {type: mongoose.Schema.Types.ObjectId, ref: "Aluno", required: true},
        data: Date,
        presente: Boolean
    },
    {timestamps: true}
);

const presencaModel = mongoose.model("Presenca", presencaSchema)