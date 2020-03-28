// Coleção dinâmica de pares chave/valor
const produto = new Object 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco: {
            lougradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcaularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lougradouro'] = 'Av Gigate'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcaularValorSeguro
console.log(carro)