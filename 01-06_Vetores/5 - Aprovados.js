/*
Faça um programa de computador para receber 10 nomes de alunos e 
suas repectivas notas e depois imprimir as notas e nomes daqueles que 
obtiveram notas maiores que 7
*/
let io=require("./io")
let nomes=[], notas=[]
let i
for(i=0;i<10;i++)
{
    console.log("Digite o nome do aluno:")
    nomes[i]=io.read()
    console.log("Digite a nota do aluno:")
    notas[i]=io.readFloat()
}
for(i=0;i<10;i++)
{
    if(notas[i]>7)
    {
        console.log("Nome:",nomes[i])
        console.log("Nota:",notas[i])
    }
}