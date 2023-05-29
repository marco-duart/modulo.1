/*
30.	Faça um programa de computador para sortear números entre 1 e 20 
até sortear um número que o usuário tenha escolhido. Ou seja, 
o programa deve começar pedindo ao usuário um número no intervalo 
entre 1 e 20 e depois deve sortear números, apresentados para o 
usuário, até sortear o número fornecido.  Caso o usuário forneça 
um número fora do intervalo ele deve ser comunicado deste fato.
*/
let io=require("./io")
let numero, escolha
console.log("Digite um número entre 1 e 20:")
escolha=io.readInt()
while(escolha<1 || escolha>20)
{
    console.clear()
    console.log("Número inválido, digite novamente entre 1 e 20:")
    escolha=io.readInt()
}
numero=Math.floor(Math.random() * 20) + 1
while(numero!=escolha)
{
    numero=Math.floor(Math.random() * 20) + 1
    console.log(numero)
}
