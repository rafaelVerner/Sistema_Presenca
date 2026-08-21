import express from 'express';
import alunosRoutes from './routes/alunosRoutes.js';
import connectDB from './config/database.js';

connectDB();

const app = express();

app.use(express.json());

app.use('/', alunosRoutes);

app.listen(3000,()=>{
  console.log("Server funcionando em http://localhost:3000");
})
