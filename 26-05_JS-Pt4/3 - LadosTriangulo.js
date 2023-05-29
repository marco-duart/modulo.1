/*
Faça um programa de computador que receba do usuário três 
tamanhos de segmentos de reta e acuse se estes segmentos formam 
ou não os lados de um triângulo.
*/
let io=require("./io")
let lado1, lado2, lado3
console.log("Digite o tamanho do 1° lado:")
lado1=io.readFloat()
console.log("Digite o tamanho do 2° lado:")
lado2=io.readFloat()
console.log("Digite o tamanho do 3° lado:")
lado3=io.readFloat()
if(lado1+lado2>lado3 && lado1+lado3>lado2 && lado2+lado3>lado1)
{
    console.log("Estes seguimentos de reta formam um triângulo!")
}
else
{
    console.log("Estes seguimentos de reta não formam um triângulo!")
}