// Pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa )

// pessoa <- 456 -> {...} 
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //congela o objeto, impedindo modificação nem excluir nem mexer

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)