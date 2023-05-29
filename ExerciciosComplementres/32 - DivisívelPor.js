/*
Faça um programa de computador que peça ao usuário dois números a e b e 
depois o programa deve mostrar ao usuário se a é divisível por b, b+1 ou b+2.

*/
let io=require("./io")
let a, b
console.log("Digite o valor de A:")
a=io.readInt()
console.log("Digite o valor de B:")
b=io.readInt()
if(a%b==0)
{
    console.log("A é divisível por B!")
}
if(a%(b+1)==0)
{
    console.log("A é divisível por B+1!")
}
if(a%(b+2)==0)
{
    console.log("A é divisível por B+2!")
}
