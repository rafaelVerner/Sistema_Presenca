import moongoose from "mongoose";

const presencaSchema = new moongoose.schema({
    id_aluno: {type: moongoose.Schema.Types.ObjectId, ref: "Aluno", required: true},
    data: Date,
    presente: Boolean

});

const presencaModel = mongoose.model("Presenca", presencaSchema)