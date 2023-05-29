/*
Em uma faculdade para que um aluno passe é necessário que ele tenha 
nota mínima de 60 pontos e 15 faltas em cada disciplina. Faça um programa 
de computador que peça ao usuário as notas e as faltas de duas disciplinas, 
Programação I e Cálculo I, e acuse se o aluno passou ou não em cada uma delas.
*/
let io=require("./io")
let notaProgramacao, faltaProgramacao, notaCalculo, faltaCalculo
console.log("Digite a nota do aluno em Programação I:")
notaProgramacao=io.readFloat()
console.log("Digite a quantidade de faltas do aluno:")
faltaProgramacao=io.readInt()
console.log("Digite a nota do aluno em Cálculo I:")
notaCalculo=io.readFloat()
console.log("Digite a quantidade de faltas do aluno:")
faltaCalculo=io.readInt()

if(notaProgramacao>=60 && faltaProgramacao<=15)
{
    console.log("O aluno foi aprovado em Programação I!")
}
else
{
    console.log("O aluno não foi aprovado em Programação I!")
}
if(notaCalculo>=60 && faltaCalculo<=15)
{
    console.log("O aluno foi aprovado em Cálculo I!")
}
else
{
    console.log("O aluno não foi aprovado em Cálculo I!")
}