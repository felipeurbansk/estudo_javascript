const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4883.22
prod1['desconto'] = 0.20

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    desconto: 0.20,
    cliente: {
        nome: 'João',
        sobrenome: 'Junior',
        ano_desc: '19/10/1993',
        endereco: {
            rua: 'São Pedro',
            numero: 21111,
            bairro: 'SEILA',
            cidade: {
                id: 5,
                nome: 'São José',
                cep: '18000-000',
                estado: {
                    id: 8,
                    nome: 'São Paulo',
                    uf: 'SP'
                }
            }
        }
    },
    frete: {
        empresa: 'Sedex',
        preco: 42.50
    }
}

console.log(prod2);

console.log(prod2.frete.empresa);

'{"nome": "Camisa Polo", "preco": 79.90, "desconto": 0.20}' //Json - Formato textual