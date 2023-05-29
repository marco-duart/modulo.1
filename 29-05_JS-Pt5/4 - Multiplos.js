/*
Faça um programa para imprimir os múltiplos de 5 menores ou igual a n, 
sendo n fornecido pelos usuários. Não use comando de decisão.
*/
let io=require("./io")
let i=5, n
console.log("Digite o valor de N:")
n=io.readInt()
while(i<n)
{
    console.log(i)
    i=i+5
}