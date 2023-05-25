/* Faça um programa de computador que receba do usuário dois números e imprima o resto da divisão do primeiro pelo segundo */
const io = require("./io")

let numero1, numero2
console.log("Vamos calcular a divisão de dois números!\nDigite o primeiro número:")
numero1 = io.readFloat()
console.log("Agora digite o segundo número:")
numero2 = io.readFloat()
console.log("A divisão entre os números informados é ",numero1/numero2)