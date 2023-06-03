/*
Faça um programa que receba 5 números. Após digitar cada número, o usuário deve receber 
imediatamente a informação se o número é par ou ímpar. Faça uma função para receber este número e 
retornar true se for par e false se for ímpar.
*/
let io=require("./io")
let numero

function parImpar(n) {
    return n%2==0
}

console.log("Vamos verificar se o número é par ou impar! True se for par e false se for ímpar")
for(i=0;i<5;i++)
{
    console.log("Digite o ",i+1,"° número:")
    numero=io.readInt()
    console.log(parImpar(numero))
}
