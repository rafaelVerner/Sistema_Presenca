import express from 'express';
import alunosController from '../controllers/alunosController.js';
const router = express.Router();


router.get("/alunos", alunosController.getAlunos);
router.post("/aluno", alunosController.createAluno);
router.delete("/aluno/:id", alunosController.deleteAluno);

export default router;