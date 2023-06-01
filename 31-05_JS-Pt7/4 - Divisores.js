/*
Programa que peça ao usuário um número natural e imprima seus divisores.
*/
let io=require("./io")
let numero, i
console.log("Vamos calcular os diviores, digite um número:")
numero=io.readInt()
for(i=numero;i>0;i--)
{
    if(numero%i==0)
    {
        console.log(i)
    }
}
