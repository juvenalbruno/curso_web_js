let dobro = function(a) {
    return 1 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

//Função sem parametro na chamada
ola = () => 'Olá' 
ola = _ => 'Olá'

console.log(ola())