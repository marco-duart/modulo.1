/*
Faça um programa de computador para calcular o quanto gastou um fumante 
com seu vício. O usuário deverá informar o número de anos que fuma, o número 
de cigarros por dia e o preço do maço de cigarro.
Considere o maço com 20 unidades.
*/

let io=require("./io")
let anos, cigarros, precoMaco, valor
console.log("Faz quantos anos que você fuma?")
anos=io.readInt()
console.log("Quantos cigarros você fuma por dia?")
cigarros=io.readInt()
console.log("Qual o valor do maço do cigarro que você fuma?")
precoMaco=io.readFloat()
valor=((anos*365)*cigarros)*(precoMaco/20)
console.log("Você gastou com cigarro cerca de: R$",valor)