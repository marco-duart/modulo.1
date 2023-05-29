/*
Faça um programa análogo ao anterior, porém o usuário não deverá informar 
o número de alunos que fizeram a prova, simplesmente digitar uma nota 
negativa, sinal que acabaram as provas.
*/
let io=require("./io")
let nome, nota, mnome, mnota=0, i

console.log("Digite a nota do aluno(a)")
nota=io.readFloat()
while (nota>=0)
{
    console.log("Digite o nome do aluno(a)")
    nome=io.read()
    if(nota>mnota)
    {
        mnota=nota
        mnome=nome
    }
    console.log("Digite a nota do aluno(a)")
    nota=io.readFloat()
}
console.log("A maior nota foi do aluno(a):",mnome)