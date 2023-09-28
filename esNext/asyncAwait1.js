function gerarNumeroEntre(min, max, numeorsProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numeorsProibidos.includes(aleatorio)) {
            reject('Número repetido!') 
                resolve(aleatorio)
            }
        })
    })
}   

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw "Não deu certo!"
        }
        gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

// gerarNumeroEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch  (console.log)