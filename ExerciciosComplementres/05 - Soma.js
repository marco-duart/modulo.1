/* 
Construa um programa que recebe do usuário dois números 
e imprime a soma deles. 
*/
let io=require("./io")
let valor1, valor2
console.log("Vamos somar? Digite o primeiro valor: ")
valor1=io.readFloat()
console.log("Agora digite o segundo valor: ")
valor2=io.readFloat()
console.log("A soma dos valores é:",valor1+valor2)