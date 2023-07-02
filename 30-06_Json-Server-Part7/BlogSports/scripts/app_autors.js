const inputAutores = async (autores) => {
    const content = document.getElementById('main')
    autores.forEach(autor => {
        content.innerHTML = content.innerHTML + `
        <div class="autor__card">
            <div class="card__name">${autor.name}</div>
            <div class="card__btn">
                <div class="btn__delete"><button onclick="deleteAutor(${autor.id})">Excluir</button></div>
                <div class="btn__edit"><button onclick="editAutor(${autor.id})">Editar</button></div>
            </div>
        </div>
        `
    });
}

const getAutores = async () => {
    const response = await fetch('http://localhost:3000/autores')
    const autores = await response.json()
    inputAutores(autores)
}

const deleteAutor = async (id) => {
    await fetch(`http://localhost:3000/autores/${id}`, {
        method: 'DELETE'
    })
    window.location = 'html_autors.html'
}

const editAutor = (id) => {
    window.location = `html_edit-autor.html?id=${id}`
}

getAutores()