/*
function Pessoa (nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Seu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Felipe')
p1.falar()
*/

function Pessoa (nome){
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`);
    }   
}

const p2 = new Pessoa('Urbanski')
p2.falar()