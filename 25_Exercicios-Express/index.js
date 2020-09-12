const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('./usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Juvenal'))

app.use('/opa', (req, res, next) => {
    console.log('Sera que serei chamado?')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo =''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.use('/opa', (req, res) => {

    res.json({
        data: [
            {id:7, name: 'Ana', position: 1},
            {id:34, name: 'Bia', position: 2},
            {id:74, name: 'Carlos', position: 3},
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    // res.send('Estou bem!')
    
    // res.json({
    //     name: 'iPad 32Gb',
    //     prince: 1899,
    //     discount: 0.12
    // })
})

app.listen(3000, () => {
    console.log('Backend executando...')
})