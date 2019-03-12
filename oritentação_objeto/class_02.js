class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // Chama o construtor da classe Avo e passa o sobrenome por parametro
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(nome, profissao) {
        super(nome, profissao)
    }
}

const filho = new Filho('João', 'Motorista')

console.log(filho);