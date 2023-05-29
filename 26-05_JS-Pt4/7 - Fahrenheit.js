/*
Escreva um programa de computador para ler uma temperatura em graus 
Fahrenheit, calcular e escrever o valor correspondente em graus Celsius. 
[Fórmula: C/5 = (F - 32)/9]

*Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida 
por 1,8. °C = (°F − 32) ÷ 1, 8.
*Para converter Celsius para Fahrenheit, basta multiplicar a temperatura 
em graus Celsius por 1,8 e somar 32.
*/
let io=require("./io")
let fahrenheit, celcius
console.log("Informe a temperatura(Fahrenheit):")
fahrenheit=io.readFloat()
/* celcius=5*((fahrenheit-32)/9) */
celcius=(fahrenheit-32)*(5/9)
console.log(celcius)
