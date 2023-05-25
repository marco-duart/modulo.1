/* Faça um programa de computador para escrever a raiz quadrada de um número que o usuário fornecer */

const io = require("./io")
let numero

console.log("Vamos calcular a raiz quadrada!\nDigite um número:")
numero = io.read()
console.log("A raiz quadrada do número informado é ",Math.sqrt(numero),"usando o comando.")
console.log("A raiz quadrada do número informado é ",numero**(1/2),"usando uma expressão.")