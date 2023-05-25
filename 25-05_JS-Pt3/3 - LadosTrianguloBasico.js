/*
Faça um programa de computador que receba do usuário três 
tamanhos de segmentos de reta e acuse se estes segmentos formam 
ou não os lados de um triângulo. Para formar um triângulo o maior 
segmento deve ser menor que a soma dos outros dois. Suponha que 
o maior lado será digitado primeiro.
*/
let io=require("../io")
let maiorLado, lado2, lado3
console.log("Digite o tamanho do maior lado:")
maiorLado=io.readFloat()
console.log("Digite o tamanho do 2° lado:")
lado2=io.readFloat()
console.log("Digite o tamanho do 3° lado:")
lado3=io.readFloat()
if(lado2+lado3>maiorLado)
{
    console.log("Estes seguimentos de reta formam um triângulo!")
}
else
{
    console.log("Estes seguimentos de reta não formam um triângulo!")
}