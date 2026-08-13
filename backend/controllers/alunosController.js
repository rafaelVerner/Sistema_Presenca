
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
        res.send({message:"Aluno cadastrado com sucesso", aluno, status: 201});
    },
    deleteAluno: function(req, res){
        const id = req.params.id;
        res.send({message:"Aluno deletado com sucesso", id, status: 200});
    }

}

export default alunosController;


