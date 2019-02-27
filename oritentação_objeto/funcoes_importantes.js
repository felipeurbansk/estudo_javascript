const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Traz apenas as chaves dos valores do objeto pessoa
console.log(Object.keys(pessoa));
// Traz apenas os valores do objeto pessoa
console.log(Object.values(pessoa));
// Lista em array das chaves e valores do objeto pessoa
console.log(Object.entries(pessoa));

// Usando o operador destructing para pegar chaves e valores de todos os arrays
Object.entries(pessoa).forEach(([chave, valor]) => {
    // Exibi cada chave e seu valor
    console.log(`${chave} : ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '19/10/1993'
})
pessoa.dataNascimento = '10/10/1998'
console.log(pessoa.dataNascimento);

console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj);