criarProduto = (nome, preco) => {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Sabonete Dove', 3.5));
console.log(criarProduto('Desodorante', 9.3));
console.log(criarProduto('Shamppo', 7.8));
console.log(criarProduto('Detergente', 2.1));