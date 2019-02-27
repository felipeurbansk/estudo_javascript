// Função em JS é First-Class Object (Citizens)
// JS trata a função como dado

// Criar de forma literal
function fun1() {

}

// Armazenar função em uma variavel
const fun2 = function() {

}

// Armazenar função em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3));

const fun_array = [function(a, b){return a*b}]
console.log(fun_array[0](2,8));

// Armazenar função em um atributo de um objeto
const pessoa = {}
pessoa.falar = function() { return 'Olá visitante'}
console.log(pessoa.falar());

// Passar função como parametro
function fun3(fun) {
    fun()
}

fun3(function() {console.log('Executando......');})

// Retornar uma função e assim uma função pode exister dentro de outra função

function soma (a, b) {
    return function(c){
        console.log(a + b + c);
    }
}

soma(2, 2)(1)
const cincoMais = soma(2, 3)
cincoMais(4)