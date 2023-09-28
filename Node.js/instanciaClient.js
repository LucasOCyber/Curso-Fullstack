const contadorA = require('./instanciaNova')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')
const contadorD = require('./instanciaUnica')

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorD.inc()
console.log(contadorC.valor, contadorD.valor)

