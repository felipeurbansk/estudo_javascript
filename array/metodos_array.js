const pilotos = ['Vettel', 'Alonso', 'Massa', 'Rubinho']

// Remove o ultimo elemento do array
pilotos.pop()
console.log(pilotos);

// Adiciona na ultima posição
pilotos.push('Verstappen')
console.log(pilotos);

// Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos);

// Adiciona um elemento no indicie 0
pilotos.unshift('Hamilton')
console.log(pilotos);

// Adicionar os elementos a partir do segundo elemento do array
pilotos.splice(2, 0, 'Bottas', 'Raikkonen')
console.log(pilotos);

// Remover a partir do indice 3 apenas 1 elemento
pilotos.splice(3, 1)
console.log(pilotos);

// Slice retorna um novo array a partir do indice informado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);

// Retorna um array com os elementos de indice 1 até 3
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);

