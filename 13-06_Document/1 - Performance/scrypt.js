/* Considere que o seu cliente quer fazer uma página simples, contendo um título e três parágrafos (arquivo index.html). Porém, ele quer que a página seja a mais performática possível, e por isso ele te pediu para fazer um arquivo de estilos, mas só aplicar os estilos quando a página inteira estivesse totalmente carregada. Quais estilos ele quer aplicar na página:

Fonte Poppins
Título com 24px, negrito e com margem inferior de 20px
Os dois primeiros parágrafos ficam lado a lado, com uma distância entre si de 10px, e o terceiro embaixo
Os parágrafos possuem fonte 14px e peso de 400
Todos os textos deverão ter a cor #2b2b2a */

function loadCSS()
{
    const title=document.getElementById("title")
    const firstParagraph=document.getElementById("firstParagraph")
    const secondParagraph=document.getElementById("secondParagraph")
    const thirdParagraph=document.getElementById("thirdParagraph")
    const section=document.getElementById("section")

    title.className="title"
    firstParagraph.className="firstParagraph"
    secondParagraph.className="secondParagraph"
    thirdParagraph.className="thirdParagraph"
    section.className="section"
}