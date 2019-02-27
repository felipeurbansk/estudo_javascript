const sequencia = {
    _valor: 1, // Convenção
    get valor() { return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }else{
            console.log('Número informado menor que o já atribuido');
        }   
    }
}

// Primeira sequencia
console.log(sequencia.valor, sequencia.valor);

// Adicionando valor 1000, esse valor será passado pelo set 
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);

// Tenta adicionar um valor menor e retorna um erro
sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor);

// Adiciona um valor menor diretamente na variavel "privada", não fazer isso com variaveis com _
sequencia._valor = 700
console.log(sequencia.valor, sequencia.valor);
