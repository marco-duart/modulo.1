/*
Faça uma função que leia um número não determinado de valores positivos 
e retorna a média aritmética dos mesmos. (Utilize o número -1 como 
critério de parada da repetição).
*/
let io=require("./io")
let media
function mediaAritmetica()
{
    let i=0, resultado=0
    let numeros = []
    console.log("Digite um número:")
    numeros[i]=io.readInt()
    while(numeros[i]>=0)
    {
        resultado=resultado+numeros[i]
        i++
        console.log("Digite um número:")
        numeros[i]=io.readInt()
    }
    return resultado/i
}
media=mediaAritmetica()
console.log("A média é",media)
