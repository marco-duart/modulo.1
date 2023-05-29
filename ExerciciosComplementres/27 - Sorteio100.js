/*
28.	Faça um algoritmo para sortear 100 números e 
imprimir os 10 maiores.
*/
let io=require("./io")
let i, f, auxiliar
let numeros = Array(100)
for(i=0;i<100;i++)
{
    numeros[i]=0
}
for(i=0;i<100;i++)
{
    numeros[i]=Math.floor(Math.random() * 1000) + 1;
}
for(i=0;i<100;i++)
{
    for(f=i+1;f<100;f++)
    {
        if(numeros[i]>numeros[f])
        {
            auxiliar=numeros[i]
            numeros[i]=numeros[f]
            numeros[f]=auxiliar
        }
    }
}
for(i=90;i<100;i++)
{
    console.log(numeros[i])
}