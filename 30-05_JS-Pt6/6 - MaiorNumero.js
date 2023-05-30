/*
Faça um programa de computador que receba 10 números inteiros e, 
após receber todos, acuse qual é o  maior número.
*/
let io=require("./io")
let numero, maiorNumero, i
for (i=1;i<=10;i++)
{
    console.log("Digite o "+i+"° numero")
    numero=io.readInt()
    if(i==1 || numero>maiorNumero)
    {
        maiorNumero=numero
    }
}
console.log("O maior número é:",maiorNumero)