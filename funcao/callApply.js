function getPreco(imposto = 0, moeda='R$') {
    return `${this.nome} ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

getPreco2 = (imposto = 0, moeda = 'R$') => `${moeda} ${this.preco * (1 - this.preco) * (1 + this.imposto)}`


const produto = {
    nome: 'Notebook Acer 315',
    preco: 4585,
    desc: 0.15,
    getPreco
}

global.nome = 'Notebook'
global.preco = 4585
global.desc = 0.5
console.log(getPreco());

// Função arrow não acessa variaveis globais
console.log(getPreco2());
 
console.log(produto.getPreco());

const carro = {
    nome: 'Fiat UNO 1.60',
    preco: 2000,
    desc: 0.21
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(produto));

console.log(getPreco.call(carro, 0.40, '$'));
console.log(getPreco.apply(carro,[0.5,'£'])); 