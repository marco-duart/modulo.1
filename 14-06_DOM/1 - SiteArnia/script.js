/* Implemente uma página HTML de acordo com o figma abaixo:
https://www.figma.com/file/CTFxodlz6dIibLcyPxzmRW/FAQ?node-id=0%3A1

O conteúdo de cada pergunta deve estar oculto, ao clicar em expandir, mostre o conteúdo correspondente abaixo da pergunta.
Se ao clicar em expandir, o conteúdo já estiver à mostra, oculte o conteúdo*/

function trocarClasse(id,btn)
{
  const item=document.getElementById(id)
  const botao=document.getElementById(btn)

  if(item.classList.contains("expandir"))
  {
    item.classList.remove("expandir");
    item.classList.add("ocultar");
  }
  else if(item.classList.contains("ocultar"))
  {
    item.classList.remove("ocultar");
    item.classList.add("expandir");
  }
  
  if(botao.innerHTML=="Expandir")
  {
    botao.innerHTML="Ocultar"
  }
  else if(botao.innerHTML=="Ocultar")
  {
    botao.innerHTML="Expandir"
  }
}