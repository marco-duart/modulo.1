/*
Faça um programa de computador que recebe do usuário 10 números e 
depois imprime os pares e depois os ímpares
*/
let io=require("./io")
let numeros = []
for(let i=0;i<10;i++)
{
    console.log("Digite um número:")
    numeros[i]=io.readFloat()
}
for(let i=0;i<10;i++)
{
    if(numeros[i]%2==0)
    {
        console.log(numeros[i])
    }
}
for(let i=0;i<10;i++)
{
    if(numeros[i]%2!=0)
    {
        console.log(numeros[i])
    }
}