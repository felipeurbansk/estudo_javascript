const imprimir = nota => {
    if(nota >= 7) {
        console.log('Aprovado!! Nota: '+nota);
    }else {
        console.log('Reprovado!! Nota: '+nota);
    }
}


imprimir(8)
imprimir(6)
imprimir('Epa!!')