/*
16.	Faça um programa de computador que peça ao usuário um número inteiro e 
descubra qual é o menor número inteiro positivo que possui o mais divisores 
que este número.
*/
let io=require("./io")
let numero1, numero2=0, i, divA=0, divB=0
console.log("Vamos descobrir um número com mais divisores que este:")
numero1=io.readInt()
for(i=numero1;i>0;i--)
{
    if(numero1%i==0)
    {
        divA++
    }
}
while(divA>=divB)
{
    divB=0
    numero2++
    for(i=numero2;i>0;i--)
    {
        if(numero2%i==0)
        {
            divB++
        }
    }
}
console.log("O número "+numero2+" possui mais divisores que o "+numero1)