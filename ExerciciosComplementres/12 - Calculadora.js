/*
Faça uma calculadora eletrônica que faz contas entre dois 
números. O usuário deverá digitar os números e escolher a operação 
entre o primeiro e o segundo, nesta ordem. Para escolher a soma o 
usuário deverá entrar como operador = +, -, *, /, ^, # 
(os dois últimos são potenciação e radiciação respectivamente).
*/
let io=require("./io")
let valor1, valor2, operador
console.log("Calculadora Básica\nDigite o primeiro valor:")
valor1=io.readFloat()
console.log("Agora informe a operação dentre essas:  +, -, *, /, ^, # ")
operador=io.read()
console.log("Agora digite o segundo valor:")
valor2=io.readFloat()
switch(operador)
{
    case "+": console.log("O resultado da soma é", valor1+valor1); break;
    case "-": console.log("O resultado da subtrção é", valor1-valor2); break;
    case "*": console.log("O produto da multiplicação é", valor1*valor2); break;
    case "/": console.log("O quociente da divisão é", valor1/valor2); break;
    case "^": console.log("O resultado da potenciação é", valor1**valor2); break;
    case "#": console.log("O resultado da radiciação é", valor1**(1/valor2)); break;
}