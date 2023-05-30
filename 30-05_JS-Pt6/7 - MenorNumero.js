/*
Faça um programa de computador que receba 10 números inteiros e, 
após receber todos, acuse qual é o  maior número.
*/
let io=require("./io")
let numero, menorNumero, i
for (i=1;i<=10;i++)
{
    console.log("Digite o "+i+"° numero")
    numero=io.readInt()
    if(i==1 || numero<menorNumero)
    {
        menorNumero=numero
    }
}
console.log("O menor número é:",menorNumero)