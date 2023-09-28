// não aceita repetição/ não indexada
const time = new Set()
time.add('Vasco')
time.add('Vasco').add('Palmeiras').add('corinthians')
time.add('Flamengo')
time.add('Vasco')

console.log(time)
console.log(time.size)
console.log(time.has('vasco'))
console.log(time.has('Vasco'))
time.delete('Flamengo')
console.log(time.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
console.log(nomes)