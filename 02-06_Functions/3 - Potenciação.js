/*
Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e 
retorna Xz (X elevado à Z). (sem utilizar funções ou operadores de potência 
prontos)
*/
let io=require("./io")
let x, z, potencia
function potentiacao(n,e)
{
    let resultado=n
    for(let i=1;i<e;i++)
    {
        resultado=resultado*n
    }
    return resultado
}
console.log("Digite o valor de X:")
x=io.readFloat()
console.log("Digite o valor de Z:")
z=io.readFloat()
potencia=potentiacao(x,z)
console.log("O resultado é",potencia)