/*
Faça um programa para imprimir os números pares menores que 100
*/

let io=require("./io")
let i

console.log("Esses são os números pares menores que 100")
for(i=1;i<100;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}