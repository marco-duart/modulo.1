/*
Faça um programa de computador para receber 10 números e depois imprimir 
os primos.
*/
let io=require("./io")
let numeros = []
let i, f, div
for(i=0;i<10;i++)
{
    console.log("Digite um número:")
    numeros[i]=io.readFloat()
}
for(i=0;i<10;i++)
{
    for(f=numeros[i], div=0;f>0;f--)
    {
        if(numeros[i]%f==0)
        {
            div++
        }
    }
    if(div===2)
    {
        console.log(numeros[i])
    }
}