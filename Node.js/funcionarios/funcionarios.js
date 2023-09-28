const url = 'http://coder.com.br/curso-js/funcionarios.json'
const axios = require(axios)

const chinesses = f => f.pais === 'china'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.menorSalario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    //mulher chinesa com menor salario 
    const func = funcionarios
        .filter(chinesses)
        .filter(mulheres)
        .reduce(menorSalario)
        console.log(func)
})