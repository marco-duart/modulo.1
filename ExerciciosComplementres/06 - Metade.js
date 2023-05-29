/* 
Faça um programa que recebe do usuário um número e mostra 
para o usuário a metade desse número. 
*/
let io=require("./io")
let valor
console.log("Calculando a metade! Digite o número:")
valor=io.readFloat()
console.log("A metade do valor informado é:",valor/2)