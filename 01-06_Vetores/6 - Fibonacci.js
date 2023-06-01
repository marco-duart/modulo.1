/*
Desafio: faça um programa para imprimir em ordem inversa a sequência de 
Fibonacci. O número de elementos na sequência deverá ser informado pelo usuário.
*/
let io=require("./io")
let fibonacci=[]
let i, elementos
console.log("Digite o número de elementos para calcular:")
elementos=io.readInt()
for(i=2, fibonacci[0]=1, fibonacci[1]=1;i<elementos;i++)
{
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]
}
for(i=elementos;i>=0;i--)
{
    console.log(fibonacci[i])
}