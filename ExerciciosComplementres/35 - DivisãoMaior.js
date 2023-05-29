/*
Faça um programa de computador para receba dois números inteiros do 
usuário e imprima:
O módulo da diferença entre eles. Não use funções para cálculo do módulo
A divisão do maior pelo menor
O resto da divisão do maior pelo menor.
Obs: o usuário não digitará necessariamente o valor maior primeiro.
*/
let io=require("./io")
let numero1, numero2
console.log("Digite o primeiro valor:")
numero1=io.readInt()
console.log("Digite o segundo valor:")
numero2=io.readInt()
if(numero1-numero2>=0)
{
    console.log("O módulo da diferença entre o valores é:",numero1-numero2)
}
else
{
    console.log("O módulo da diferença entre o valores é:",-(numero1-numero2))
}
if(numero1>numero2)
{
    console.log("A divisão do maior pelo menor:",Math.floor(numero1/numero2))
    console.log("O resto do maior pelo menor:",numero1%numero2)
}
if(numero2>numero1)
{
    console.log("A divisão do maior pelo menor:",Math.floor(numero2/numero1))
    console.log("O resto do maior pelo menor:",numero2%numero1)
}