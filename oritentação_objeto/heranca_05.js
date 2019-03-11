console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverterString = function () {
    return this.split('').reverse().join('')
}

console.log('Felipe Urbanski'.reverterString());

Array.prototype.primeiroCaracter = function () {
    return this[0]
}

Array.prototype.terceiroCaracter = function () {
    return this[2]
}

console.log(['1', '2', '3', '4'].primeiroCaracter());
console.log(['1', '2', '3', '4'].terceiroCaracter());
console.log(['a', 'b', 'c', 'd'].primeiroCaracter());
console.log(['a', 'b', 'c', 'd'].terceiroCaracter());

// Nunca fazer isso !!!!
String.prototype.toString = function() {
    return 'Lascou!!!!'
}

console.log('Felipe Urbanski'.reverterString());