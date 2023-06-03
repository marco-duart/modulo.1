/*
Faça uma função que recebe a idade de uma pessoa em anos, 
meses e dias e retorna essa idade expressa em dias. 
*/
let io=require("./io")
let anos, meses, dias, idade
function conversorIdade(d,m,a)
{
    let convert
    convert=d+(m*30)+(a*365)
    return convert
}
console.log("Digite a quantidade de anos:")
anos=io.readInt()
console.log("Digite a quantidade de anos:")
meses=io.readInt()
console.log("Digite a quantidade de anos:")
dias=io.readInt()
idade=conversorIdade(dias,meses,anos)
console.log("A quantidade total de dias é",idade)