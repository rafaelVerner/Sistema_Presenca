import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.get("/alunos", (req, res)=>{
    res.send({message:"Lista de alunos",
        listaAlunos:[
            { id: 1, nome:"Verner"},
            {id: 2, nome:"Anderson"}
        ]
    })
})

export default router;