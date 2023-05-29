/*
Faça um programa de computador que receba três nomes de alunos com suas 
respectivas notas e faltas. Após receber estes valores, o programa deve 
escrever os nomes dos alunos que passaram. Sabe-se que a aprovação se dá 
quando a nota é maior ou igual a 70 e o número de faltas menor ou igual a 15.
*/
let io=require("./io")
let alunos=Array(3)
let notas=Array(3)
let faltas=Array(3)
let i

for(i=0;i<3;i++)
{
    console.log("Digite o nome do aluno:")
    alunos[i]=io.read()
    console.log("Digite a nota do aluno:")
    notas[i]=io.readFloat()
    console.log("Digite a quantidade de faltas do aluno:")
    faltas[i]=io.readInt()
}
for(i=0;i<3;i++)
{
    if(notas[i]>=70 && faltas[i]<=15)
    {
        console.log(alunos[i],"foi aprovado!")
    }
}