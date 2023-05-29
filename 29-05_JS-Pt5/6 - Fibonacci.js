/*
Desafio: A sequência de Fibonacci é a sequência de números naturais que 
começa onde os dois primeiros são 1 e o próximo é a soma dos dois 
anteriores. Faça um programa que imprime os 50 primeiros termos dessa sequência
*/
let io=require("./io")
let i=0, primeiro, segundo=1, terceiro=0
while(i<50)
{
    console.log(segundo)
    primeiro=segundo+terceiro
    terceiro=segundo
    segundo=primeiro
    i++
}