/*
Faça um programa de computador que receba um número natural e acuse 
se é primo ou não. Números primos são os naturais maiores que 1 que 
que possui somente 2 divisores.
*/
let io=require("./io")
let numero, i
console.log("Número primo ou não? Vamos calcular, digite um número:")
numero=io.readInt()
while(numero<=1)
{
    console.clear()
    console.log("O número deve ser maior que 1, digite novamente:")
    numero=io.readInt()
}
for(i=numero-1;i>1;i--)
{
    if(numero%i==0)
    {
        console.log("Não é um número primo!")
        break
    }
}
if(i==1)
{
   console.log("É um número primo!")
}