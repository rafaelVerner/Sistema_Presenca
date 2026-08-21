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
    createAluno: function(req,res){
        const aluno = req.body;
        res.send({message:"Aluno cadastrado com sucesso", aluno, status: 201, body: req.body});
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


