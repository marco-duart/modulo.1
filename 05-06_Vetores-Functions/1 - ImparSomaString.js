/* Escreva uma função que recebe um array de números, dado este array, a função deverá
Deixar no array somente os números ímpares (utilize filter)
Somar todos os números restantes (utilize forEach)
Escrever a string	 "Javascript é muito bom" no console um número x de vezes, sendo x a 
soma dos números restantes do array (utilize o reduce e o while) */

const io = require("./io")
let numeros = [11,55,15,4,58,21,35,45,122,65,75,12,2,34,56,32,30,22,59,16], impar = [], soma=0, x, i=0

impar = numeros.filter((elem) => { 
    return elem%2!=0
})
console.log(impar)
impar.forEach((elem) => {
    soma=soma+elem
})
console.log(soma)
x = impar.reduce((soma, elem) => {
    return soma+elem
},0)

while(i<x)
{
    console.log("Javascript é muito bom")
    i++
}