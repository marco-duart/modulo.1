/*
15.	Faça um programa de computador que sorteie números até sortear um número primo.
*/
let io=require("./io")
let numero, primo=0, i
while(primo==0)
{
    numero=Math.floor(Math.random() * 1000) + 1
    console.log("Número:",numero)
    for(i=numero-1;i>1;i--)
    {
        if(numero%i==0)
        {
            break
        }
    }
    if(i==1)
    {
        primo=1
    }
}
