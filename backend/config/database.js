import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL)
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

export default connectDb;