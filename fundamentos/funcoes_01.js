//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(1,22,4,5,6,7,8)

//Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(1,2));
console.log(soma(1));