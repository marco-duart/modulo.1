/*
Faça um programa para imprimir os múltiplos de 5 menores ou igual a n, 
sendo n fornecido pelos usuários.
*/
let io=require("./io")
let n, i
console.log("Vamos calcular os multiplos de 5! Informe o valor maximo:")
n=io.readInt()
for(i=1;i<=n;i++)
{
    if(i%5==0)
    {
        console.log(i,"\n")
    }
}