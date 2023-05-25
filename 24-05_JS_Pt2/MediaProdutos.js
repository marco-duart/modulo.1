/* Faça um programa que receba o preço de dois produtos e imprima a média desses preços */
const io = require("./io")

let produto1, produto2
console.log("Vamos calcular a média de dois produtos!\nDigite o valor do 1º produto:")
numero1 = io.readFloat()
console.log("Agora digite o valor do 2º produto:")
numero2 = io.readFloat()
console.log("A média entre os produtos informados é ",(produto1+produto2)/2)