/*
26.	Faça um programa de computador que receba do usuário o nome 
e notas dos alunos e imprima os nomes que estão acima da média 
aritmética da turma.
*/
let io=require("./io")
let nomes = Array(99)
let notas = Array(99)
let media=0, i, count
console.log("Quantos alunos realizaram a prova?")
count=io.readInt()
for (i=1;i<=count;i++)
{
    console.log("Digite o nome do "+i+"° aluno(a)")
    nomes[i-1]=io.read()
    console.log("Digite a nota do "+i+"° aluno(a)")
    notas[i-1]=io.readFloat()
    media=media+notas[i-1]
}
media=media/count
for (i=0;i<count;i++)
{
    if(notas[i]>media)
    {
        console.log(nomes[i])
    }
}