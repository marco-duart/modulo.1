/* Faça um programa que receba o nome, time e salário de 5 jogadores de futebol. Depois faça uma função que receberá a lista de jogadores 
e retornará somente os jogadores com salário maior que 100 mil reais.*/
const io = require("./io")
const jogadores = []
let jogadoresSalarios = []

function maioresSalarios (obj) {
    if(obj.salario>100000)
    {
        return obj
    }
}


for (let i = 0; i < 5; i++) {
    id=i
    console.log("Digite o nome:")
    const nome = io.read()
    console.log("Digite o time:")
    const time = io.read()
    console.log("Digite o salário:")
    const salario = io.readFloat()

    const jogador = {
        id,
        nome,
        time,
        salario
    }
    jogadores.push(jogador)
}

jogadoresSalarios=jogadores.filter((jogador) => {
    return maioresSalarios(jogador)
})

console.log(jogadoresSalarios)