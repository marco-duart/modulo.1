/*
Faça uma função que recebe a idade de um nadador por parâmetro e 
retorna a categoria desse nadador de acordo com a tabela abaixo:  
*/
let io=require("./io")
let idade, categoria
function nadador(valor)
{
    let resultado
    if(valor>=5 && valor<=7)
    {
        resultado="Infantil A"
    }
    if(valor>=8 && valor<=10)
    {
        resultado="Infantil B"
    }
    if(valor>=11 && valor<=13)
    {
        resultado="Juvenil A"
    }
    if(valor>=14 && valor<=17)
    {
        resultado="Juvenil B"
    }
    if(valor>=18)
    {
        resultado="Adulto"
    }
    return resultado
}
console.log("Digite a idade do nadador:")
idade=io.readInt()
categoria=nadador(idade)
console.log("A categoria do nadador informado é:",categoria)