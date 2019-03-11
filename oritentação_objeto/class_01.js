class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorConsolidade = 0
        this.lancamento.forEach(l => {
            valorConsolidade += l.valor
        })
    }
}