/*
Faça um programa de computador que receba um número natural e acuse se é primo ou não. 
Números primos são os naturais maiores que 1 e que possuem somente 2 divisores.
*/
let io=require("./io")
let numero, i, div=0

console.log("Vamos verificar se é primo!\nDigite um número:")
numero=io.readInt()
for(i=numero;i>0;i--)
{
    if(numero%i==0)
    {
        div++
    }
}
if(div===2)
{
    console.log("É um número primo!")
}
else
{
    console.log("Não é um número primo!")
}