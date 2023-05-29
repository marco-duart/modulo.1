/* 
Crie um programa que recebe do usuário dois números naturais 
e imprime o resto da divisão do primeiro pelo segundo
*/
let io=require("./io")
let numero1, numero2
console.log("Vamos calcular o resto do número 1 pelo número 2.\nDigite o primeiro número:")
numero1=io.readInt()
console.log("Agora digite o segundo número:")
numero2=io.readInt()
console.log("O resto do número 1 pelo número 2 é:",numero1%numero2)
