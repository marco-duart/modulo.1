/* Faça uma função que recebe dois números inteiros e retorna um array de duas posições, uma  com o quociente e a outra com o resto. 
Sabe-se que divisão é uma sequência de subtrações, portanto não use os operadores de divisão inteira do JS.
*/
const io = require("./io")
let numero1, numero2, numeros=[]

function calculo(n1,n2) {
    let numeros=[0,0], div=n1
    while(div>=n2)
    {
        div=div-n2
        numeros[0]++
    }
    numeros[1]=div
    return numeros
}

console.log("Digite o 1º numero:")
numero1 = io.readInt()
console.log("Digite o 2º numero:")
numero2 = io.readInt()

numeros=calculo(numero1,numero2)
console.log(numeros)