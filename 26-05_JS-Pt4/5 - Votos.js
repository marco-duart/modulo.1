/*
Escreva um programa de computador para ler o número total de eleitores 
de um município, o número de votos brancos, nulos e válidos. Calcular e 
escrever o percentual que cada um representa em relação ao total de eleitores.
*/
let io=require("./io")
let eleitores, validos, brancos, nulos
console.log("Informe a quantidade de eleitores:")
eleitores=io.readInt()
console.log("Informe a quantidade de votos válidos:")
validos=io.readInt()
console.log("Informe a quantidade de votos em branco:")
brancos=io.readInt()
console.log("Informe a quantidade de votos nulos:")
nulos=io.readInt()
console.log("Quantidade de votos válidos:",(validos*100)/(eleitores),"%\nQuantidade de votos em branco:",(brancos*100)/(eleitores),"%\nQuantidade de votos nulos",(nulos*100)/(eleitores),"%")