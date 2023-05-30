/*
Fala um programa para escrever de 1 a n, sendo n fornecido pelo usuário
*/
let io=require("./io")
let i, n
console.log("Digite até onde é para imprimir:")
n=io.readInt()
for(i=1;i<=n;i++)
{
    console.log(i)
}
