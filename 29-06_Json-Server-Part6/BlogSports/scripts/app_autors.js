const inputAutores = async (autores) => {
    const content = document.getElementById('main')
    autores.forEach(autor => {
        content.innerHTML = content.innerHTML + `
        <div class="autor__card">${autor.name}</div>
        `
    });
}

const getAutores = async () => {
    const response = await fetch('http://localhost:3000/autores')
    const autores = await response.json()
    inputAutores(autores)
}

getAutores()