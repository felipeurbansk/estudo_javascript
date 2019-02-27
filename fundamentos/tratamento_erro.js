
function tratarErro(e) {
    //throw new Error('Nosso suporte tecnico já foi chamado');
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: 'Error 4111',
        msg: '615656151'
    }
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!");
    }catch(e){
        tratarErro(e)
    }finally {
        console.log('Final');
    }
}

const obj = { nome:'Roberto'}

imprimirNome(obj)