/*
VARIAVEIS E CONSTANTES POSSUEM ESCOPO/CONTEXTO
saudacao são declarados em 2 contextos diferentes.

Objetos são grupos aninhados de pares nome/valor

*/

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'avenida',
        numero: 123
    }
}

console.log(saudacao)

console.log(exec())

console.log(cliente)