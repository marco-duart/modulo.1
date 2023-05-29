/*
Faça um programa que leia a idade e altura de diversas pessoas. 
Calcule e imprima maior idade e a altura média
*/

let io=require("./io")
let count, altura, idade, maioridade=0, medialtura=0
console.log("Primeiro,quantas pessoas vão participar da pesquisa?")
count=io.readInt()
for(i=1;i<=count;i++)
{
    console.log("Informe a idade da "+i+"ª pessoa:")
    idade=io.readInt()
    console.log("Informe a altura da "+i+"ª pessoa:")
    altura=io.readFloat()
    medialtura=medialtura+altura
    if(idade>maioridade)
    {
        maioridade=idade
    }
}
console.log("A maior idade é:",maioridade,"\nA média de altura é:",(medialtura/count))