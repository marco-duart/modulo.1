/*
Faça um programa que leia a idade e a altura de 5 pessoas.  
Ao final, o programa deverá acusar a maior Idade e a média das alturas.
*/
let io=require("../io")
let i, idade, altura, media=0, maior=0
for (i=1;i<=5;i++)
{
    console.log("Digite a "+i+"° idade:")
    idade=io.readInt()
    console.log("Digite a "+i+"° altura:")
    altura=io.readFloat()
    media=media+altura
    if(maior<idade)
    {
        maior=idade
    }
}
media=media/5
console.log("A maior idade é",idade,"\nA média de altura é:",media)