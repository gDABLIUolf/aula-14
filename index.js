const express = require('express')

const app = express()
app.use(express.json())

const Estudantes = [
    {
        nome: "Gabriel",
        materia: "Back-End",
        turma: "t - 42",
    }
]

app.get("/estudantes/:cpf", (req, res) => {
    const estudante = Estudantes.find(e => e.cpf == req.params.cpf)
    return res.json(estudante)
})
app.get('/estudantes', (req, res) => {
    return res.json(Estudantes)
})
app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.post('/estudantes', (req, res) => {
    const dados = req.body
    Estudantes.push(dados)
    return res.send('estudante criado')
})

app.listen(3000)