// Coleção dinâmica de pares chave valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);

delete produto['marca do produto']

console.log(produto);


const carro  = {
    modelo: 'A4',
    valor: 49000,
    proprietario: {
        nome: 'Raul',
        idade: 52,
        endereco: {
            cep: '18460-000',
            rua: 'Pedro São Pedro'
        }
    },
    condutores: [{
        nome: 'Felipe',
        idade: 25
    }, {
        nome: 'Duda',
        idade: 23
    }],
    calcularValorSeguro: function (){
        console.log(`Os condutores ${this.condutores[0].nome} e ${this.condutores[1].nome} fizeram um seguro com o proprietario ${this.proprietario.nome}`);
    }
}
    
console.log(carro);
console.log(carro.calcularValorSeguro());