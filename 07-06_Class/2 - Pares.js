/* Implemente uma função que recebe um array de números e retorna um outro vetor que contém somente os números pares.*/

let io=require("./io")
let n, i
let numeros=[],resultado
function pares(numeros,n)
{
    let resultado=[], i, f=0
    for(i=0;i<n;i++)
    {
        if(numeros[i]%2==0)
        {
            resultado[f]=numeros[i]
            f++
        }
    }
    return resultado
}
console.log("Digite a quantidade de números:")
n=io.readInt()
for(i=0;i<n;i++)
{
    console.log("Digite um valor:")
    numeros[i]=io.readFloat()
}
resultado=pares(numeros,n)
console.log("Segue os números pares!")
for(i=0;i<resultado.length;i++)
{
    console.log(resultado[i])
}