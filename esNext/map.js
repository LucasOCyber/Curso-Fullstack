const tecnologias = new Map()
tecnologias.set('react', { fremawork: false })
tecnologias.set('angular', { fremawork: false })

console.log(tecnologias.ract)
console.log(tecnologias.get('react').fremawork)

const chavesVariadas = new Map([
    [function() {}, 'Funçaõ'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'a')
console.log(chavesVariadas)
