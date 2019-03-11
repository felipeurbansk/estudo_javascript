// Object.preventExtensions 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

const produto2  = {
    nome: 'Qualquer', preco: 2.99, tag: 'promoção'
}

console.log('Extensível: ', Object.isExtensible(produto));
console.log('Extensível: ', Object.isExtensible(produto2));

// Consegue alterar atributos já existente
produto.nome = 'Borracha'
//Não consegue adicionar um novo atributo
produto.descricao = 'Borracha escolar'
// Consegue excluir um atributo
delete produto.preco

// Permite tudo
produto2.nome = 'Borracha'
produto2.descricao = 'Borracha escolar'
delete produto2.preco

console.log(produto);
console.log(produto2);

// Object.seal, não deixa excluir nem adicionar novos atributos, mas permite alterar os já existentes

const pessoa = {nome: 'Felipe', idade: 25}
Object.seal(pessoa)
console.log(pessoa);

pessoa.sobrenome = 'Urbanski'
pessoa.idade = 26
delete pessoa.nome

console.log(pessoa);

// Object.freeze = seal + valores constantes

const animal = {nome: 'Bud', idade: 2}
Object.freeze(animal)

animal.raca = 'Vira-lata'
animal.idade = 2.2
delete animal.nome

console.log(animal);
