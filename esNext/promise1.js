// let = 1
// console.log(a)

// let p = new Promise(function(resolve) {
//     resolve({
//         x: 3,
//         y: 4
//     })
// }) 
const primeiroElemento = array => array[1]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toUpperCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)