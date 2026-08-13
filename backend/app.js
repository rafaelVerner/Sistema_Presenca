import express from 'express';
import alunosRoutes from './routes/alunosRoutes.js';
const app = express();

app.use('/', alunosRoutes);

app.listen(3000,()=>{
  console.log("Server funcionando em http://localhost:3000");
})
