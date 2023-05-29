/*
Faça um programa para escrever seu nome n vezes, sendo n fornecido pelo usuário
*/
let io=require("./io")
let i=0, n, frase
console.log("Digite a frase:")
frase=io.read()
console.log("Digite quantas vezes é para repetir a frase:")
n=io.readInt()
while(i<n)
{
    console.log(frase)
    i++
}
