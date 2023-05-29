/*
A área de um triângulo qualquer pode ser calculada através da fórmula:

Onde os valores de a, b, c correspondem aos lados do triângulo e o 
valor de p é o valor do semi perímetro (soma de todos os lados de um 
triângulo dividido por dois) 

Faça um programa de computador que peça ao usuário os lados de um triângulo 
e imprima sua área. O usuário deve ser informado caso os lados fornecidos 
não formem um triângulo. Propriedade: o comprimento de cada lado de um 
triângulo é menor do que a soma dos comprimentos dos outros dois lados.
*/
let io=require("./io")
let a, b, c, p, area
console.log("Informe o tamanho do lado A:")
a=io.readFloat()
console.log("Informe o tamanho do lado B:")
b=io.readFloat()
console.log("Informe o tamanho do lado C:")
c=io.readFloat()
while(a>=b+c || b>=a+c || c>=a+b)
{
    console.clear()
    console.log("Cada lado deve ser menor que a soma dos outros dois lados.\n")
    console.log("Informe o tamanho do lado A:")
    a=io.readFloat()
    console.log("Informe o tamanho do lado B:")
    b=io.readFloat()
    console.log("Informe o tamanho do lado C:")
    c=io.readFloat()
}
p=(a+b+c)/2
area=(p*(p-a)*(p-b)*(p-c))**(1/2)
console.log("A área do triangulo é:",area)