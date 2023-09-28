const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados =require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

/*app.get('/produtos', (req, res, next) => {
    console.log('middleware 1')
    next() //cuidado com next sem ele nn funciona
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: '123,12' }) //converte pra JSON
})*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProduto())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`servidor esta executando na porta${porta}`)
})