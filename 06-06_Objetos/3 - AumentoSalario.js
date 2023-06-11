/* Faça um programa para receber nome e idade de 10 funcionários (nome, matrícula, cargo e salário). 
Depois faça um método que aumente o salário de cada um em 10%. Mostre a soma dos salários antes e 
depois do aumento (use o método de array .reduce() para somar).
*/
const io = require("./io")
const funcionarios = []
let depoisFuncionarios = []

function aumentarSalario (obj) {
    id=obj.id,nome=obj.nome,matricula=obj.matricula,cargo=obj.cargo,salario=obj.salario+(obj.salario*0.1)
    let objNovo = {
        id,
        nome,
        matricula,
        cargo,
        salario
    }
    return objNovo
}


for (let i = 0; i < 3; i++) {
    id=i
    console.log("Digite o nome:")
    const nome = io.read()
    console.log("Digite a matricula:")
    const matricula = io.read()
    console.log("Digite o cargo:")
    const cargo = io.read()
    console.log("Digite o salário:")
    const salario = io.readFloat()

    const funcionario = {
        id,
        nome,
        matricula,
        cargo,
        salario
    }
    funcionarios.push(funcionario)
}

depoisFuncionarios=funcionarios.map((funcionario) => {
    return aumentarSalario(funcionario)
})

let salarioAntigo=funcionarios.reduce((soma,funcionario) =>{
    soma=soma+funcionario.salario
    return soma
},0)

let salarioNovo=depoisFuncionarios.reduce((soma,funcionario) =>{
    soma=soma+funcionario.salario
    return soma
},0)

console.log(salarioAntigo,"\n",salarioNovo)