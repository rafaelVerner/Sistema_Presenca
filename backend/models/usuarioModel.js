import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema(
    {
        login:{type: String, required: true, unique: true, trim: true},
        senha:{type: String, required: true},
        email: {type:String, trim: true},
        perfil: {type: String, enum: ["admin", "professor"], required: true},

    },{
        timestamps: true
    }
)

usuarioSchema.pre("save", async function(){
    if (!this.isModified("senha")) return;
    this.senha = await bcrypt.hash(this.senha, 10);
});

const usuarioModel = mongoose.model("Usuario", usuarioSchema);

export default usuarioModel;