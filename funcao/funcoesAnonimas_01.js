const soma = function (x, y) {
    return x + y
}

const sub = (x, y) => x - y

const mult = (x, y) => x * y

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b, sub));
}

imprimirResultado(4,2)
imprimirResultado(4,2,sub)
imprimirResultado(4,2,mult)
imprimirResultado(4,2, function(x, y){
    return x/y
})
imprimirResultado(4, 2, (x, y) => x * y)

const pessoa = {
    falar: function (){
        return 'Olá, estou falando'
    }
}


console.log(pessoa.falar());


const agenda = {
    nome: 'Casa',
    numero: '35325878',
    contatos:{
        nome:'Felipe',
        numero: '933000966'
    },
    ligar: function(numero){
        console.log(`Ligando de ${this.nome} (${this.numero}) para ${this.contatos.nome} (${this.contatos.numero})`);
    }
}

console.log(agenda.ligar());