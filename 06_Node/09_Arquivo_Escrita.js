const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 8.15
}

fs.writeFile(__dirname + '/09_Arquivo_Geradp.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})