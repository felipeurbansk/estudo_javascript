console.log(typeof Array, '-' , typeof new Array, '-', typeof []);


let aprovados = new Array('Ana', 'Maria', 'Joana')
console.log(aprovados);

aprovados = ['Joana', 'Maria', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

console.log('-------------');

aprovados[3] = 'Paulo'
console.log(aprovados[3]);

console.log('-------------');

aprovados.push('Bianca')
console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length);

console.log(aprovados);

console.log('-------------');

aprovados.sort()
console.log(aprovados);

console.log('-------------');

delete aprovados[2]

console.log(aprovados);

console.log('-------------');

aprovados = ['Ana', 'João', 'Carla']
// [Pesquisae mais] - Apaga os indices 1 até o indice 2 e adiciona dois novos elementos
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')
console.log(aprovados);