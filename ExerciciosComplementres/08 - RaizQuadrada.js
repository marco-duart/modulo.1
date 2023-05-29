/*
Faça um programa que recebe do usuário um número e imprime 
sua raiz quadrada.
 */
 let io=require("./io")
 let numero
 console.log("Vamos calcular a raiz quadrada, digite um número:")
 numero=io.readFloat()
 console.log("Usando o SQRT, a raiz quadrada do número informado é",Math.sqrt(numero))
 console.log("Usando uma expressão, a raiz quadrada do número informado é",numero**(1/2))