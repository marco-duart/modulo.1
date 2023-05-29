/*
Faça um programa que leia um  número natural e acuse se ele é ou não número 
um número perfeito. Sabendo que números perfeitos são números que cuja soma 
de seus divisores, exceto ele mesmo, é igual a ele. Exemplo:  os divisores 
de 28 são: 1,2,4,7,14 e 28. Como 1 + 2+4+7+14=28,  temos que 28 é perfeito.
*/
let io=require("./io")
let numero, soma=0, i
console.log("Numero perfeito. Digite um número:")
numero=io.readInt()
for(i=numero-1;i>0;i--)
{
    if(numero%i==0)
    {
        soma=soma+i
    }
}
if(soma==numero)
{
    console.log("É um número perfeito!")
}
else
{
    console.log("Não é um número perfeito!")
}
