/* Faça um programa de computador que receba do usuário 2 números e acuse qual é o maior */
const io = require("./io")

let numero1, numero2

console.log("Vamos verificar qual é maior.\nDigite o primeiro número:")
numero1 = io.readInt()
console.log("Digite o segundo número:")
numero2 = io.readInt()
if(numero1>numero2) {
    console.log("O número ",numero1," é maior que o número ",numero2)
}
if(numero1<numero2) {
    console.log("O número ",numero2," é maior que o número ",numero1)
}
if(numero1==numero2) {
    console.log("O números são iguais!")
}