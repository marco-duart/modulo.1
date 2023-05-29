/*
Faça um programa para receber do usuário as horas e os minutos escrever 
o ângulo entre os ponteiros do relógio. Não se esqueça que o ponteiro 
pequeno anda à medida que anda o ponteiro grande.
*/
let io=require("./io")
let horas, minutos, angulo
console.log("Informe as horas")
horas=io.readInt()
console.log("Informe os minutos")
minutos=io.readInt()
angulo=Math.abs((60*horas-11*minutos)/2)
if(angulo>180)
{
    angulo=360-angulo
}
console.log("O angulo entre os ponteiros é",angulo)