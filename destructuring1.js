// obs: ao desestruturar um dado aninhado, verificar se o caminho até o dado está correto
// caso contrário irá retornar um erro


//objeto
const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'avenida',
        numero: 15
    }
}
//operador destructuring
const { nome, idade } = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa

console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco: {logradouro, numero, cep} } = pessoa

console.log(logradouro, numero, cep)