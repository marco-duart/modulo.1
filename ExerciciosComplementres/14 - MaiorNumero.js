/*
Faça um programa de computador que receba 10 números inteiros e, 
após receber todos, acuse qual é o  maior número.
*/
let io=require("./io")
let numero, mnumero=0, i
for (i=1;i<=10;i++)
{
    console.log("Digite o "+i+"° numero")
    numero=io.readInt()
    if(numero>mnumero)
    {
        mnumero=numero
    }
}
console.log("O maior número é:",mnumero)