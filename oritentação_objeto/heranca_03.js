const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(`${filha1.nome}, cabelo ${filha1.corCabelo} filha de ${pai.nome}`);

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true},
    idade: {value: 11, writable: false, enumerable: true}
})

console.log(`${filha2.nome}, ${filha2.idade} anos, cabelo ${filha2.corCabelo} filha de ${pai.nome}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log('--------------------------------------');
console.log('Filha 2');

for(let key in filha2) {
    // Verificar se o atributo é do objeto ou de seu prototipo
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}

console.log('--------------------------------------');
console.log('Filha 1');

for(let key in filha1) {
    // Verificar se o atributo é do objeto ou de seu prototipo
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}