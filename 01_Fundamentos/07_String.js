const escola = "Cod3r"

console.log(escola.charAt(4)) //Escolhendo o espaço na string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Codigo relacionado a tabela unicode
console.log(escola.indexOf('3')) //Indice associado ao indice 3

console.log(escola.substring(1)) //limitador de string
console.log(escola.substring(0, 3)) // " " " "

console.log('Escola'.concat(escola).concat("!")) // Concatenar string
console.log('Escola '+ escola + "!")
console.log(escola.replace(3, 'e')) //substituição de caracteres

console.log('Ana,Maria,Pedro'.split(','))// quebrando a string por arry
