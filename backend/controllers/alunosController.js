import alunoModel from '../models/alunoModel.js';

const alunosController = {
    getAlunos: function(req, res) {
        res.send({message:"Lista de alunos",
            listaAlunos:[
                { id: 1, nome:"Verner"},
                {id: 2, nome:"Anderson"}
            ]
        })
    },
    createAluno: async function(req,res){
        try{
            const aluno = req.body;
            const novoAluno = new alunoModel(aluno);
            await novoAluno.save();
            console.log("Aluno cadastrado com sucesso", novoAluno);
            res.status(201).send({message:"Aluno cadastrado com sucesso", aluno: novoAluno});
        }catch(error){
            res.status(500).send({message:"Erro ao cadastrar aluno", error: error.message});
        }
        
        
    },
    deleteAluno: function(req, res){
        const id = req.params.id;
        res.send({message:"Aluno deletado com sucesso", id, status: 200});
    },
    getAlunoById: function(req, res){
        const id = req.params.id;
        res.send({message: "Aluno encontrado com sucesso", id, status: 200, body: req.body});
    }, 
    updateAluno: function(req, res){
        const id = req.params.id;
        const aluno = req.body;
        res.send({message: "Aluno atualizado com sucesso", id, aluno, status: 200, body: req.body});
    }

}

export default alunosController;


