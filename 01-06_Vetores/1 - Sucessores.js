/*
Faça um programa  de computador para receber 10 números inteiros e 
depois imprimir seus sucessores.
*/
let io=require("./io")
let numeros = []
for(let i=0;i<10;i++)
{
    console.log("Digite um número:")
    numeros[i]=io.readInt()
}
for(let i=0;i<10;i++)
{
    console.log(numeros[i]+1)
}