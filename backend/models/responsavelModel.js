import mongoose from "mongoose";

const responsavelSchema = new mongoose.Schema(
    {
        nome: String,
        contato: String,
    },
    {timestamps: true}
);

const responsavelModel = mongoose.model("Responsavel", responsavelSchema);

export default responsavelModel;