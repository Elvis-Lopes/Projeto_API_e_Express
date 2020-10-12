const PORTA = 3003
const EXPRESS = require('express')
const APP = EXPRESS()

APP.get('/produtos', (req, res, next) => {
   res.send({nome: 'Notebook', preco: 123.45}) 
})

APP.listen(PORTA, () =>{
    console.log(`Servidor executando na porta ${PORTA}`)
})