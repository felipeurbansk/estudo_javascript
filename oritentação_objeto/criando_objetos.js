// Usando a notação literal
const obj1 = {}
console.log();

// Object em JS
console.log(typeof Object, typeof new Object);

const obj2 = new Object
console.log(obj2);

// Funções construtoras

function produto(nome, preco, desconto) {
    this.nome = nome,
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Lapis', 4.51, 0.10)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Felipe Urbanski', 2000, 3)
const f2 = criarFuncionario('Maria', 5000, 2)
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha.nome);

// Função famosa que retorna objeto

const fromJSON = JSON.parse('{"info": "Sou um json"}')
console.log(fromJSON.info);
