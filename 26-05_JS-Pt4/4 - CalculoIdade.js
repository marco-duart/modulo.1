/*
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
*/
let io=require("./io")
let anos, meses, dias
console.log("Vamos calcular os dias vividos!\nDigite os anos:")
anos=io.readInt()
console.log("Digite os meses:")
meses=io.readInt()
console.log("Digite os dias:")
dias=io.readInt()
console.log("A quantidade de dias vividos é ",(anos*365)+(meses*30)+dias)