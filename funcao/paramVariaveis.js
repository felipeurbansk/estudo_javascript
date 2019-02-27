function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(2));
console.log(soma(1, 2, 10, 1, 6, 2.2));
console.log(soma(1, 2, 10, 1, 6, 2.2, "Teste"));
console.log(soma(" Testando"," Varios"," Parametros", " String"));