/* Faça um programa para receber dados de 10 pessoas (nome, idade e documento) criando um objeto 
para cada pessoa. Depois mostrar as que são maiores de idade (use o método de array .filter() para filtrar).
*/

const io = require("./io")
const pessoas = []
let maiores = []

for (let i = 0; i < 10; i++) {
    id=i
    console.log("Digite o nome:")
    const nome = io.read()
    console.log("Digite o ano de nascimento:")
    const anoNascimento = io.read()
    console.log("Digite a documento:")
    const documento = io.read()

    const pessoa = {
        id,
        nome,
        anoNascimento,
        documento
    }
    pessoas.push(pessoa)
}

maiores = pessoas.filter((pessoa) => {
    if(pessoa.anoNascimento<=2005)
    {
        return pessoa
    }
})

for(let i = 0; i<maiores.length;i++)
{
    console.log(maiores[i].nome)
}