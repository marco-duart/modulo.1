/* Escreva um programa de computador que solicite login e senha para um usuário. Caso o login e senha estejam 
corretos, exiba na tela a mensagem "Bem vindo ao sistema", caso contrário exiba a mensagem "Dados inválidos". 
Os valores de login e senha corretos devem ser definidos em variáveis pelo programador. */

const io = require("./io")
let senha="12345", login="m5151", readSenha, readLogin

console.log("Digite o seu login e senha\nLogin: ")
readLogin=io.read("")
console.log("Senha: ")
readSenha=io.read("")
while(readLogin!==login || readSenha!==senha)
{
    console.clear()
    console.log("Dados inválidos\nLogin: ")
    readLogin=io.read("")
    console.log("Senha: ")
    readSenha=io.read("")
}
console.log("Bem vindo ao sistema")