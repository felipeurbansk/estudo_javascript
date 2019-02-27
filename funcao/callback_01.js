const fabricante = ["Merceses", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`);
}

fabricante.forEach(imprimir)

/* Primeiro parametro está o conteudo do array, 
segundo parametro está o indice e terceiro
parametro retorna todo o array
*/
fabricante.forEach(function(a,b, c, d){
    console.log(a, b, c);
})