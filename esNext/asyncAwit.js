const resolve = require("path")

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promise...')
            resolve()
        }, tempo)
    })
}

// await esperarPor(2000)
//     .then(() => console.log('Executando Promise1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}


async function executar(){
    let valor = await retornarValorRapido()

    esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}   

executar().then(console.log)

async function executandoDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executandoDeVerdade()