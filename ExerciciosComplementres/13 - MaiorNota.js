/*
Este não precisa de vetor - Crie um programa que peça os nomes e as 
notas dos alunos em uma prova onde compareceram 10 alunos e depois 
imprima o  nome do aluno que teve a maior nota. À medida que digita 
um nome o usuário deverá digitar sua nota.  
*/
let io=require("./io")
let nome, nota, mnome, mnota=0, i
for (i=1;i<=10;i++)
{
    console.log("Digite o nome do "+i+"° aluno(a)")
    nome=io.read()
    console.log("Digite a nota do "+i+"° aluno(a)")
    nota=io.readFloat()
    if(nota>mnota)
    {
        mnota=nota
        mnome=nome
    }
}
console.log("A maior nota foi do aluno(a):",mnome)