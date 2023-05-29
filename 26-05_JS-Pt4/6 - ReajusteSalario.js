/*
Escreva um programa de computador para ler o salário mensal atual de 
um funcionário e o percentual de reajuste. Calcular e escrever o valor 
do novo salário. 
*/
let io=require("./io")
let salario, reajuste
console.log("Informe o salário atual:")
salario=io.readFloat()
console.log("Informe a taxa de reajuste:")
reajuste=io.readFloat()
console.log("O novo salário é:",salario+(salario*(reajuste/100)))
