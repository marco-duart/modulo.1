/* Faça uma função que receba do usuário 3 segmentos de reta e retorne se esses segmentos podem ou não formar um triângulo.*/

let io=require("./io")
let a, b, c
function triangulo(a,b,c)
{
    let resultado
    if(a>=b+c || b>=a+c || c>=a+b)
    {
        resultado="Não pode formar um triangulo!"
    }
    else
    {
        resultado="Pode formar um triangulo!"
    }
    return resultado
}
console.log("Digite o tamanho do lado A:")
a=io.readInt()
console.log("Digite o tamanho do lado B:")
b=io.readInt()
console.log("Digite o tamanho do lado C:")
c=io.readInt()
console.log(triangulo(a,b,c))