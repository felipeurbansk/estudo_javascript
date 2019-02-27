const notas = [7.7, 2.3, 4.5, 7.8, 8.7, 9.7, 10, 11]

// Sem usar callback
let notasBaixas = []

for( let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(`Com for: ${notasBaixas}`);

// Com callback

// Função anonima
notasBaixas = notas.filter(function(nota){
    return nota < 7
})
console.log(`Função anonima: ${notasBaixas}`);

// Função arrow
notasMenorQue7 = notas.filter(nota => nota < 7)
notasMaiorQue7 = notas.filter(nota => nota > 7)

console.log(`Função arrow menor: ${notasMenorQue7}`);
console.log(`Função arrow maior: ${notasMaiorQue7}`);

// Exemplos
const maiorQue7 = nota => nota > 7
console.log(notas.filter(maiorQue7));
