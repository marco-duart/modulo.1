/*
Faça um programa para imprimir n linhas de 1 até n, sendo n fornecido 
pelo usuário. Veja a: 4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/
let io=require("./io")
let frases, n, i,f
console.log("Digite um número:")
n=io.readInt()
for(i=1;i<=n;i++)
{
    frases=1+" "
    for(f=2;f<=n;f++)
    {
        frases=frases+f+" ";
    }
    console.log(frases)
}