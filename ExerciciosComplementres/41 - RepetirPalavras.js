/*
Faça um programa para escrever palavras em linhas. 
O usuário deverá digitar duas palavras e o número de linhas. A primeira palavra 
deverá ser escrita nas linhas ímpares e a segunda nas linhas pares. O número de 
palavras por linha deverá ser o número da linha que, por sua vez, 
também deverá ser impresso. Para exemplificar, suponhamos que o usuário 
escolha as palavras AAA e BBB e 5 para o número de linhas, a saída de dados 
deverá ser:
1 AAA
2 BBB BBB
3 AAA AAA AAA
4 BBB BBB BBB BBB
5 AAA AAA AAA AAA AAA
*/
let io=require("./io")
let frase, palavraImpar, palavraPar, n, i,f
console.log("Digite a palavra para linhas impares:")
palavraImpar=io.read()
console.log("Digite a palavra para linhas pares:")
palavraPar=io.read()
console.log("Digite o número de palavras por linha:")
n=io.readInt()
for(i=1;i<=n;i++)
{
    frase=i+" "
    for(f=1;f<=i;f++)
    {
        if(i%2==0)
        {
            frase=frase+palavraPar+" "
        }
        else
        {
            frase=frase+palavraImpar+" "
        }
    }
    console.log(frase)
}