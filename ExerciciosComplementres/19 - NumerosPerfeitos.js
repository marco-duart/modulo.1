/*
Faça um programa que descubra quais os perfeitos menos que 1000.
*/
let io=require("./io")
let numero, soma, i, f
console.log("Quais os números perfeitos até 1000?")

for(i=2;i<=1000;i++)
{
    soma=0
    for(f=i-1;f>0;f--)
    {
        if(i%f==0)
        {
            soma=soma+f
        }
    }
    if(soma==i)
    {
        console.log(soma,"é um número perfeito!")
    }
}