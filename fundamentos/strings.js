const escola = "Udemy"

console.log(escola.charAt(3)) // Caracter no campo 3
console.log(escola.charCodeAt(1)) // Codigo do caracter 1
console.log(escola.indexOf('d')) // Retorna a posição do caracter d
console.log(escola.substring(1)) // Retorna a string a partir da posição 1
console.log(escola.substring(0,3)) // Retorna a string entre as posições 0 e 2 
console.log('Escola '.concat(escola).concat("!")) // Concatena texto a constante escola
console.log(escola.replace('U', 'E')) // Substitui a primeira Letra U encontrada na string pela letra E

console.log('Ana, Felipe, Pedro'.split(',')) // Transforma a string em array