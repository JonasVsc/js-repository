function rand([min = 0, max = 1000]) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([500, 550]))
// console.log(rand()) ERRO, desestruturar elementos de algo que é nulo