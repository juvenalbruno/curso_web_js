//Operador ... rest(juntar/espalhar)
//usar rest com parametro de função

//usar spread como objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread como array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)