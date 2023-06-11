/* Faça um programa para receber os dados de 10 alunos (nome, matrícula e nota) criando um objeto 
para cada aluno. Depois aumentar em 10% as notas dos alunos com matrícula maior que 1000 e mostrar 
a lista de alunos atualizada.*/

const io = require("./io")
const alunos = []

for (let i = 0; i < 10; i++) {
    id=i
    console.log("Digite o nome:")
    const nome = io.read()
    console.log("Digite a matricula:")
    const matricula = io.read()
    console.log("Digite a nota:")
    const nota = io.readFloat()

    const aluno = {
        id,
        nome,
        matricula,
        nota
    }
    alunos.push(aluno)
}

alunos.forEach((aluno) => {
    if(aluno.matricula>1000)
    {
        aluno.nota=aluno.nota+(aluno.nota*0.1)
    }
})

console.log(alunos)