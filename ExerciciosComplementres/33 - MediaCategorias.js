/*
Faça um programa de computador que receba do usuário preço de seis produtos 
separados em duas categorias, sendo três de limpeza e seis de alimentação. 
Ao final, o programa deve acusar qual categoria possui média de preço mais alta.
*/
let io=require("./io")
let limpezaMedia=0, limpeza, alimentacaoMedia=0, alimentacao, i
for(i=0;i<3;i++)
{
    console.log("Digite o valor do produto (limpeza):")
    limpeza=io.readFloat()
    limpezaMedia=limpezaMedia+limpeza
}
for(i=0;i<3;i++)
{
    console.log("Digite o valor do produto (alimentação)")
    alimentacao=io.readFloat()
    alimentacaoMedia=alimentacaoMedia+alimentacao
}
limpezaMedia=limpezaMedia/3
alimentacaoMedia=alimentacaoMedia/3
if(limpezaMedia>alimentacaoMedia)
{
    console.log("A maior média de preço é da limpeza!")
}
if(limpezaMedia<alimentacaoMedia)
{
    console.log("A maior média de preço é da alimentação!")
}