/* Faça um programa de computador para escrever o produto de dois números que o usuário digitar */
const io = require("./io")

let numero1, numero2
console.log("Vamos calcular o produto de dois números!\nDigite o primeiro número:")
numero1 = io.readFloat()
console.log("Agora digite o segundo número:")
numero2 = io.readFloat()
if(numero1*numero2>10) {
    console.log("O produto entre os números informados é maior que 10!")
}
if(numero1*numero2<=10) {
    console.log("O produto entre os números informados não é maior que 10!")
}