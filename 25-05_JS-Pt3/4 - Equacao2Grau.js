/*
Desafio: Faça um programa de computador para calcular as raízes de uma equação 
do segundo -grau na forma ax^2 + bx + c = 0, sendo o valores de a.b e c 
fornecidos pelo usuário.
x = (-b ± √∆) / 2
∆ = b² – 4ac
*/
let io=require("../io")
let a, b, c, x1, x2, delta
console.log("Vamos calcular o valor de X na equação de 2° grau.\nDigite o valor de A:")
a=io.readFloat()
while(a==0)
{
    console.clear()
    console.log("O valor de A não pode ser 0, digite o valor de A:")
    a=io.readFloat()
}
console.log("Agora digite o valor de B:")
b=io.readFloat()
console.log("Agora digite o valor de C:")
c=io.readFloat()
delta=(b*b)-4*a*c
if(delta>0)
{
    console.log("A equação possui duas raizes reais e distintas")
    x1=(-b+(delta**(1/2)))/(2*a)
    x2=(-b-(delta**(1/2)))/(2*a)
    console.log("O valor de delta é:",delta)
    console.log("O valor de X1 é:",x1)
    console.log("O valor de X2 é:",x2)
}
else if(delta==0)
{
    console.log("A equação possui raizes reais e iguais")
    x1=(-b+(delta**(1/2)))/(2*a)
    console.log("O valor de delta é:",delta)
    console.log("O valor de X é:",x1)
}
else if(delta<0)
{
    console.log("A equação não possui raizes reais")
    console.log("O valor de delta é:",delta)
}