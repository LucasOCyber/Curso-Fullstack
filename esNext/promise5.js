function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando..', 0.9)
    .then(v => `valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp:${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`erro: ${err}`))