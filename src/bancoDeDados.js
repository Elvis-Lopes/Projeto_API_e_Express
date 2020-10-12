const SEQUENCE = {
    _id: 1,
    get id() {return this._id++ }
}
const PRODUTOS = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = SEQUENCE.id
    PRODUTOS[produto.id] = produto
    return produto
} 

function getProduto(id){
    return produto(id) || {}
}

function getProdutos(){
    return Object.values(PRODUTOS)
}

module.exports = {salvarProduto, getProduto, getProdutos}