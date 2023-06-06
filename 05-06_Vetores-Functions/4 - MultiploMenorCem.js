/* Dado um array qualquer, escreva uma função que multiplica todos os números desse array por 3 
quando o número for ímpar e por 4 quando o número for par. E depois filtre deste array os números 
menores que 100.  */

const io = require("./io")
const numeros = [11,55,15,4,58,221,35,45,122,65,75,12,2,34,56,32,30,22,59,16]
let novosNumeros=[], menoresQueCem = []

novosNumeros = numeros.map((elem) => { 
    if(elem%2==0){ 
        return elem*4
    }
    else if(elem%2!=0){
        return elem*3
    }
})

menoresQueCem = novosNumeros.filter((elem) => {
    return elem<100
})

console.log("Originais: ",numeros)
console.log("Após multiplicação: ",novosNumeros)
console.log("Menores que cem: ",menoresQueCem)