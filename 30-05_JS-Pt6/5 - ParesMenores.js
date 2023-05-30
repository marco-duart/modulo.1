/*
Faça um programa para imprimir os números pares menores que um número fornecido pelo usuário.
*/
let io=require("./io")
let i, n
console.log("Digite até onde é para imprimir os números pares:")
n=io.readInt()
for(i=2;i<n;i=i+2)
{
    console.log(i)
}
