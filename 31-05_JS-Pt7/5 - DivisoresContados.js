/*
Faça um programa de computador para contar e imprimir a quantidade de divisores que um número natural possui. 
Este número deverá ser fornecido pelo usuário.
*/
let io=require("./io")
let numero, i, divisores=0
console.log("Vamos calcular a quantidade de diviores, digite um número:")
numero=io.readInt()
for(i=numero;i>0;i--)
{
    if(numero%i==0)
    {
        divisores++
    }
}
console.log("A quantidade de divisores é ", divisores)