/*
Faça um programa que receba do usuário 20 números e imprima a 
média aritmética desses números.
*/
let io=require("./io")
let numero, media=0, i=0
while(i<20)
{
    console.log("Informe o",i+1,"° número:")
    numero=io.readInt()
    media=media+numero
    i++
}
console.log("A média dos números é:",media/20)