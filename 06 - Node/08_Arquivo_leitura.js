const fs = require('fs')

const caminho = __dirname +'/08_Arquivo.json'

//sicrona...]
const conteudo =fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//Assicrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./08_Arquivo.json')
console.log(config.db)


fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})