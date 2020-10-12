const PORTA = 3003
const EXPRESS = require('express')
const APP = EXPRESS()
const BANCODEDADOS = require('./bancoDeDados')

APP.get('/produtos', (req, res, next) => {
   res.send(BANCODEDADOS.getProdutos()) 
})

APP.get('/produto/:id', (req, res, send) => {
    res.send(BANCODEDADOS.getProduto(req.params.id))
})

APP.post('/produtos', (req, res, next) =>{
    const PRODUTO = BANCODEDADOS.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(PRODUTO)
})

APP.listen(PORTA, () =>{
    console.log(`Servidor executando na porta ${PORTA}`)
})