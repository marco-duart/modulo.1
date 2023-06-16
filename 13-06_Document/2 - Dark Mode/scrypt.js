function chanceClass()
{
    const elemento=document.getElementById("body")
    const button=document.getElementById("btn")
    if(elemento.classList.contains("darkMode"))
    {
        elemento.classList.remove("darkMode");
        elemento.classList.add("lightMode");
        button.classList.remove("btnBlack");
        button.classList.add("btnWhite");
    }
    else if(elemento.classList.contains("lightMode"))
    {
        elemento.classList.remove("lightMode");
        elemento.classList.add("darkMode");
        button.classList.remove("btnWhite");
        button.classList.add("btnBlack");
    }
}