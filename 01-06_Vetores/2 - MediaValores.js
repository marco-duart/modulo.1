/*
Faça um programa de computador para receber preços de 10 produtos e 
depois imprimir os preços que estão acima da média.
*/
let io=require("./io")
let precos = []
let media=0
for(let i=0;i<10;i++)
{
    console.log("Digite o preço:")
    precos[i]=io.readFloat()
    media=media+precos[i]
}
media=media/10
for(let i=0;i<10;i++)
{
    if(precos[i]>media)
    {
        console.log(precos[i])
    }
}