/*
Faça um programa que descubra qual o menor número inteiro positivo que 
dividido por 39 dá resto 16 e dividido por 37, dá resto 36.
while(i%39!=16 && i%37!=36)
*/
let io=require("./io")
let i=0
while(i%39!=16 || i%37!=36)
{
    i++
}
console.log("O valor que dividido por 39 dá resto 16 e dividido por 37, dá resto 36 é:",i)