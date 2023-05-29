/*
27.	Faça um programa para sortear um número. Dica a = randomInt(5,10), 
a vai receber um número inteiro sorteado entre 5 e 10.
*/
let io=require("./io")
let numero
numero=Math.floor(Math.random() * 6) + 5
console.log(numero)