/*
Faça um programa de computador que receba do usuário um ano 
e acuse se este ano é ou não bissexto"
*/
let io=require("./io")
let ano
console.log("Informe o ano:")
ano=io.readInt()
if(ano%400==0 || ano%4==0 && ano%100!=0)
{
    console.log("Este ano é bissexto!")
}
else
{
    console.log("Este ano não é bissexto!")
}