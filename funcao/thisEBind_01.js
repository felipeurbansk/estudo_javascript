const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()  // Conflito entre paradigmas: funcional e OO

/* Bind é responsavel por sempre executar a função 
dentro do objeto que ela está inserida e não mais
apenas no contexto que ela se encontra
 */
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()