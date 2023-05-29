/*
Faça um programa de computador para inverter um número. 
Suponha que o usuário digite 247 ele deverá mostrar 742. 
Suponha que o usuário vá digitar somente números inteiros de três dígitos.
*/
let io=require("./io")
let valor, invertido, resto
console.log("Digite o valor:")
valor=io.readInt()
//begin
invertido=Math.floor(valor/100)
resto=valor%100
invertido=invertido+(Math.floor(resto/10)*10)
resto=(resto%10)*100
invertido=invertido+resto
//end
console.log("O valor invertido é:",invertido)