for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for (let i in assuntoEcma) {
    console.log(i)
}

for (let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordadro: true }],
    ['Set', { abordadro: true }],
    ['Promisse', { abordadro: false }]
])

for (let assunto of assuntoEcma) {
    console.log(assunto)
}

for (let chave of assuntoEcma.keys()) {
    console.log(chave)
}

for (let valor of assuntoEcma.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntoEcma.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}