const notas = [7.7, 1.2, 5.3, 6.5, 9.6, 9.9, 7.3]

for(let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome:'Felipe',
    sobrenome: 'Urbanski',
    idade: 25
}

for(let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`);
}