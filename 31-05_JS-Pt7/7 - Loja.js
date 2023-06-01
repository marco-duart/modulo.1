/* Uma loja utiliza o código V para transação à vista e P para transação a prazo. Faça um programa que 
receba código e valor de 15 transações usando laços de repetição. Calcule e mostre:  
O valor total das compras à vista
O valor total das compras à prazo   
O valor total das compras efetuadas */
let io=require("./io")
let compraV=0, compraP=0, comprasTotal=0, cod, valor

console.log("Vamos registrar as compras!")
for(i=0;i<15;i++)
{
    console.log("Digite o código de compra: ")
    cod=io.read()
    while(cod!="V" && cod!="v" && cod!="P" && cod!="p")
    {
        console.log("Código inválido, digite novamente: ")
        cod=io.read()
    }
    console.log("Digite o valor da compra: ")
    valor=io.readFloat()
    comprasTotal=comprasTotal+valor
    if(cod=="V" || cod=="v")
    {
        compraV=compraV+valor
    }
    else if(cod=="P" || cod=="p")
    {
        compraP=compraP+valor
    }
}
console.log("O valor total das compras à vista: R$",compraV)
console.log("O valor total das compras à prazo: R$",compraP)
console.log("O valor total das compras efetuadas: R$",comprasTotal)