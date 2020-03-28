const contadorA = require('./04_Instancia_Unica')
const contadorB = require('./04_Instancia_Unica')

const contadorC = require('./04_Instancia_Nova')()
const contadorD = require('./04_Instancia_Nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)