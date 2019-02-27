let comparaComThis = function(param) {
    console.log(this === param);
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
// Bind não vai apontar para obj, o this vai permanecer apontando para função que está sendo executada
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)