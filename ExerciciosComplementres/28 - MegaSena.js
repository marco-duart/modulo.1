/*
29.	Faça um programa para simular a Mega Sena. Lembre-se que não 
poderá sortear o mesmo número duas vezes.
*/
let io=require("./io")
let numeros = Array(61)
let i, f
numero=Math.floor(Math.random() * 6) + 5
for(i=0;i<61;i++)
{
    numeros[i]=0;
}
i=0
while(i<6)
{
    f=Math.floor(Math.random() * 60) + 1
    if(numeros[f]==0)
    {
        console.log(f)
        numeros[f]++
        i++
    }
}