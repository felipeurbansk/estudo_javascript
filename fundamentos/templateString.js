const nome = "Felipe"
const concatenacao = 'Olá'+ nome + ' !'

const template = `
    Olá
    Tenstando varias linhas
    ${nome} e testando a variavel!
`
console.log(concatenacao, template)

//Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Função "arrow"
console.log(`Ei....${up('cuidado')}!`);
