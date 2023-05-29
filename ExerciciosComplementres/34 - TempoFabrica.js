/*
Faça um programa de computador que leia o tempo de duração de um evento 
em uma fábrica expressa em segundos e mostre-o expresso em horas, 
minutos e segundos.
*/
let io=require("./io")
let hora, minutos, segundos
console.log("Digite o tempo total em segundos:")
segundos=io.readInt()
hora=Math.floor(segundos/3600)
segundos=segundos%3600
minutos=Math.floor(segundos/60)
segundos=segundos%60
console.log("Horas:",hora,"\nMinutos:",minutos,"\nSegundos",segundos)
