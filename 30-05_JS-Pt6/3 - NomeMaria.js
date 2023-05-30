/*
Faça um programa para pedir 10 nomes de pessoas ao usuário e acusar 
quantas se chamam “Maria”
*/
let io=require("./io")
let i, nome, maria=0

for(i=0;i<10;i++)
{
    console.log("Digite o nome:")
    nome=io.read()
    if(nome=="Maria")
    {
        maria++
    }
}
console.log("A quantidade de nomes Maria informado é:",maria)