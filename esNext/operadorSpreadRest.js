//operador ... rest(juntar)/spread(espalhar)
//usar rest com paremetro de função

//usar spread como Objeto
const funcionario = { nome: 'maria', salario: 12123.15 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria'] 
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)