/*
Faça um programa que recebe do usuário um número inteiro n e 
uma frase e escreva esta frase n vezes.
*/
let io=require("./io")
let n, frase, i

console.log("Informe quantas vezes é para repetir a frase:")
n=io.readInt()
console.log("Qual frases replicar?")
frase=io.read()
console.clear()
for(i=1;i<=n;i++)
{
    console.log(frase)
}