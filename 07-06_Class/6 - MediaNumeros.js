/* Faça uma função que recebe do usuário um array de números e retorna a média aritmética desses números.*/
let io=require("./io")
let n, i
let numeros=[]
function mediaValor(numeros,n)
{
    let resultado=0, i
    for(i=0;i<n;i++)
    {
        resultado=resultado+numeros[i]
    }
    return resultado/n
}
console.log("Digite a quantidade de números:")
n=io.readInt()
for(i=0;i<n;i++)
{
    console.log("Digite um valor:")
    numeros[i]=io.readFloat()
}
console.log("A média dos valores é",mediaValor(numeros,n))