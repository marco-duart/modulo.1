/* Faça um programa que receba o nome e nota de 5 alunos e armazene em um array. Faça uma função que receberá a nota de cada aluno e 
acusará se ele está aprovado (nota a partir de 7) ou reprovado (nota menor 7). De acordo com o retorno desta função, acrescente no aluno a 
propriedade aprovado com o valor true ou false.
*/
const io = require("./io")
let alunos = [], i

function aprovadoReprovado(nota) {
    return nota>=7
}

for(i=1;i<=5;i++)
{
    const id=i
    console.log("Digite o nome do aluno(a)")
    const nome=io.read()
    console.log("Digite a nota do aluno(a)")
    const nota=io.readFloat()

    const aluno = {
        id,
        nome,
        nota
    }
    alunos.push(aluno)
}

alunos.forEach((aluno) => {
    aluno.aprovado=aprovadoReprovado(aluno.nota)
})

console.log(alunos)