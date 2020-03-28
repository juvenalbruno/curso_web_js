const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores4 = 10
console.log(valores)
console.log(valores.length) //quantos elementos tem no arry

valores.push({id: 3}, false, null, 'teste') //função que adiciona novos elementos no arrey
console.log(valores)

console.log(valores.pop()) //retorna o ultimo valor do arrey
delete valores[0] //deleta o valor do arrey
console.log(valores)

console.log(typeof valores)