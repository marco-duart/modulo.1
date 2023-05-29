/*
Faça um programa para imprimir os números pares menores que um número fornecido pelo usuário.
*/
let io=require("./io")
let i=2
console.log("Números pares menores que 100")
n=io.readInt()
while(i<100)
{
    console.log(i)
    i=i+2
}
