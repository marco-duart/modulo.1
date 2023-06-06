/* Escreva uma função que transforme todos os membros de um array qualquer em texto. 
Dica: todas as variáveis javascript possuem uma função .toString() */
const io = require("./io")
const qualquer = [1000, 40, 340, 501, 500, 1093, 245, 21]
let vetorString = []

vetorString = qualquer.map((elem) => {
    return elem.toString()
})

console.log(vetorString)