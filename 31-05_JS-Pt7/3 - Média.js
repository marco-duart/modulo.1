/*
Faça um programa de computador que leia números reais maiores que zero. Quando for digitado o 
número zero, o programa deverá apresentar quantos números foram entrados e a média destes.
*/
let io=require("./io")
let i=0, media=0

console.log("Digite um número:")
numeros=io.readInt()
while(numeros>0)
{
    console.clear()
    media=media+numeros
    i++
    console.log("Digite um número:")
    numeros=io.readInt()
}
console.log("A média é",media/i)
