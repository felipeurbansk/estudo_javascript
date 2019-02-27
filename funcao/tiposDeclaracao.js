console.log(soma(2,2));
// function expression não funciona, deve ser chamada a baixo de sua declaração
//console.log(mult(2,2));

// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(2,2));

// Named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(2,2));
