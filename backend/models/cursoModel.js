import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema(
    {
        nome: String,
        duracao: Number,
    },
    {timestamps: true}
)

const cursoModel = mongoose.model("Curso", cursoSchema);
export default cursoModel;