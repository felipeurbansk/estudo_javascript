let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// retorno implícito
dobro = a => 2 * a

console.log(dobro(Math.PI));

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui sim um parametro
console.log(ola());


const data_nasc = e => e

console.log(data_nasc(19101993)); 