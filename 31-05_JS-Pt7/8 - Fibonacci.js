/*
Desafio: A sequência de Fibonacci é a sequência de números naturais que 
começa onde os dois primeiros são 1 e o próximo é a soma dos dois 
anteriores. Faça um programa que imprime os 50 primeiros termos dessa sequência
*/
let io=require("./io")
let i, primeiro, segundo=1, terceiro=0
for(i=0;i<50;i++)
{
    console.log(segundo)
    primeiro=segundo+terceiro
    terceiro=segundo
    segundo=primeiro
}