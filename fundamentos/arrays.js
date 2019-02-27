const valores = [7.7, 8.9, 6.3, 9.5]
console.log(valores[2], valores[3])
console.log(valores[1], valores[5])

valores[5] = 10
console.log(valores[5]);
console.log(valores.length);

valores.push({id: 3}, !0 ,false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retornar e excluir o ultimo registro do array
console.log(valores)

delete valores[0] // Deleta o dado da posição 0
console.log(valores)

console.log(typeof valores)

console.log("-----------ATRIBUIÇÃO POR REFERENCIA--------");
const a = {name: 'Teste'}
console.log(a)

const b = a
b.name = 'Opa, alterado a constante b'
console.log("Variavel B");
console.log(b);
console.log("Variavel A");
console.log(a);

//Com valores primitivo é feito copia do valor
let c = 3
let d = c
d++
console.log(d, c);


