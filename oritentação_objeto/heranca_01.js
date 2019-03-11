const ferrari = {
    modelo: 'F40',
    velocidadeMax: 324
}

const volto = {
    modelo: 'V40',
    velocidadeMax: 200
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volto.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);