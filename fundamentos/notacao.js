console.log(Math.ceil(6.2));

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1);

function Obj(nome) {
    this.nome = nome
    this.exec = () => {
        console.log("Exec......");
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec()
