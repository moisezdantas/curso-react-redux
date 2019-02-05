const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone (objecto) {
    return { ...objecto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Big Azul'


console.log(produto, novoProduto)