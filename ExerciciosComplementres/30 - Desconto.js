/*
Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar 
suas vendas oferecendo descontos. Faça um programa de computador para o 
usuário entrar com o valor de um produto e receber o novo valor tendo em 
vista que o desconto foi de 9%. Além disso, imprima o valor do desconto.
*/
let io=require("./io")
let valor
console.log("Digite o valor do produto:")
valor=io.readFloat()
valor=valor-(valor*0,09)
console.log("O valor atualizado é:",valor)