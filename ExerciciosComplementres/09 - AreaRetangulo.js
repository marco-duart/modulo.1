/*
Construa um programa de computador que recebe do 
usuário os lados de um retângulo e escreva sua área
*/
let io=require("./io")
let altura, base
console.log("Vamos calcular a área de um retângulo?\nInforme o valor da base do retângulo:")
base=io.readFloat()
console.log("Agora informe o valor da altura do retângulo")
altura=io.readFloat()
console.log("A área do retangulo informado é de:",base*altura)