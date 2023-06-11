/* Faça uma função que recebe do usuário um array  e retorna outro vetor com os valores em ordem invertida.*/
let io=require("./io")
let n, i
let numeros=[],resultado
function invertido(numeros,n)
{
    let resultado=[], i, f
    for(i=0, f=n-1;i<n;i++,f--)
    {
        resultado[i]=numeros[f]
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
resultado=invertido(numeros,n)
for(i=0;i<n;i++)
{
    console.log(resultado[i])
}