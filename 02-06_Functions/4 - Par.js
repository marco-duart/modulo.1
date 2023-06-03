/*
Faça uma função que recebe um valor inteiro e verifica se o valor 
é par ou ímpar. A função deve retornar um valor booleano.
*/
let io=require("./io")
let numero, resposta
function imparPar(n)
{
    let resultado
    if(n%2==0)
    {
        resultado=true
    }
    else
    {
        resultado=false
    }
    return resultado
}
console.log("Digite um valor:")
numero=io.readInt()
resposta=imparPar(numero)
console.log("")
if(resposta==true)
{
    console.log("O valor é par!")
}
if(resposta==false)
{
    console.log("O valor não é par!")
}