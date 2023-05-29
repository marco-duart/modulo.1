/*
Fatorial de um número natural é a multiplic ação dos naturais menores ou 
igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um 
número n calcule seu fatorial
*/
let io=require("./io")
let fatorial, i
console.log("Vamos calcular o fatorial, digite o número:")
fatorial=io.readInt()
i=fatorial-1
while(i>0)
{
    fatorial=fatorial*i
    i++
}
console.log("O fatorial do número informado é",fatorial)