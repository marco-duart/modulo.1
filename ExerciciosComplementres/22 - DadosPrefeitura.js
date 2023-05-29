/*
Faça um programa de computador que ajude a prefeitura de São Geraldo-MG, 
cidade polo de Minas Gerais, a fazer uma pesquisa entre seus habitantes, 
coletando dados sobre o salário e número de filhos de cada habitante. 
A prefeitura deseja saber:
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.
O final da leitura de dados se dará com a entrada de um salário negativo.
*/
let io=require("./io")
let mediaSalario=0, mediaFilho=0, maiorSalario=0, salario100=0, i=0
let salarios = Array(99)
let filhos = Array(99)

console.log("Informe o salário: ")
salarios[i]=io.readFloat()
while(salarios[i]>=0)
{
    console.log("Informe a quantidade de filhos: ")
    filhos[i]=io.readInt()
    mediaSalario=mediaSalario+salarios[i]
    mediaFilho=mediaFilho+filhos[i]
    if(salarios[i]>maiorSalario)
    {
        maiorSalario=salarios[i]
    }
    if(salarios[i]<=100.00)
    {
        salario100++
    }
    i++
    console.log("Informe o salário: ")
    salarios[i]=io.readFloat()
}
mediaSalario=mediaSalario/(i)
mediaFilho=mediaFilho/(i)
salario100=(salario100*100)/(i)
console.log("Média de salário:",mediaSalario,"\nMédia de número de filhos:",mediaFilho,"\nMaior salário:",maiorSalario,"\nSalário até 100,00:",salario100)