// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // Evitar esse tipo de atribuição
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'C -> PAI'}
const filho = {__proto__: pai, attr3: 'C', attr4: 'D'}

console.log(filho.attr1);
console.log(filho.attr0);
console.log(filho.attr);
console.log(filho.attr2);
console.log(filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `Está a ${this.velAtual}Km/h, esse modelo tem a veloxidade maxima de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F250',
    velMax: 355
}

const fusca = {
    modelo: '1500',
    status() {
        return `Fusca ${this.modelo} ${super.status()}`
    }
}
Object.setPrototypeOf(fusca, carro)

fusca.acelerarMais(210)
console.log(fusca.status());

Object.setPrototypeOf(ferrari, carro)

ferrari.acelerarMais(255)
console.log(ferrari.status());