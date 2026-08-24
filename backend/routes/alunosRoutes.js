import express from 'express';
import alunosController from '../controllers/alunosController.js';
const router = express.Router();


router.get("/alunos", alunosController.getAlunos);
router.get("/aluno/:id", alunosController.getAlunoById);
router.post("/aluno", alunosController.createAluno);
router.delete("/aluno/:id", alunosController.deleteAluno);
router.put("/aluno/:id", alunosController.updateAluno);


export default router;