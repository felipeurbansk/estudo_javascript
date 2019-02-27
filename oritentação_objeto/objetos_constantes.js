// pessoa -> 123 -> {.....}
const pessoa = {nome: 'Felipe'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome);

/* pessoa -> 456 -> {.....}
pessoa = {nome: 'Ana'}
console.log(pessoa);*/

let pessoa2 = { nome: 'Felipe'}
pessoa2.nome = 'Ana'
console.log(pessoa2.nome);

Object.freeze(pessoa2)
pessoa2.nome = 'Felipe'
console.log(pessoa2.nome);

const constantePessoa = Object.freeze({ nome: 'Maria Anderlaine'})
console.log(constantePessoa);

constantePessoa.nome = 'Teste'
console.log(constantePessoa);