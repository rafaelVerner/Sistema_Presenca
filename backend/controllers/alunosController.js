import alunoModel from '../models/alunoModel.js';

const alunosController = {
    getAlunos: async function(req, res) {
        try{
            const alunos = await alunoModel.find();
            res.status(200).send({message:"Alunos encontrados com sucesso", alunos: alunos});
        }catch(error){
            res.status(500).send({messae:"Erro ao buscar alunos", error: error.message});
        }
    },
    createAluno: async function(req,res){
        try{
            const aluno = req.body;
            const novoAluno = new alunoModel(aluno);
            await novoAluno.save();
            res.status(201).send({message:"Aluno cadastrado com sucesso", aluno: novoAluno});
        }catch(error){
            res.status(500).send({message:"Erro ao cadastrar aluno", error: error.message});
        }
        
        
    },
    deleteAluno: async function(req, res){
        try{
            const id = req.params.id;
            await alunoModel.findByIdAndDelete(id);
            res.status(200).send({message: "Aluno deletado com sucesso", id});
        }catch (error){
            res.status(500).send({message: "Erro ao deletar aluno", error: error.message});
        }
    },
    getAlunoById: async function(req, res){
        try{
            const id = req.params.id;
            const aluno = await alunoModel.findById(id);
            res.status(200).send({message: "Aluno encontrado com sucesso", aluno});

        }catch(error){
            res.status(500).send({message:"Erro ao buscar aluno", error: error.message});
        }
    }, 
    updateAluno: async function(req, res){
        try{
            const id = req.params.id;
            const aluno = req.body;
            await alunoModel.findByIdAndUpdate(id, aluno);
            res.status(200).send({messae: "Aluno atualizado com sucesso", aluno});
        }catch(error){
            res.status(500).send({message: "Erro ao atualizar aluno", error: error.message});
        }
        
        
    }

}

export default alunosController;


