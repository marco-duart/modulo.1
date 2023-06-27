const formEdit = document.getElementById('form_edit')
let noticiaID

const searchNoticia = async (noticiaID) => {
    const response = await fetch(`http://localhost:3000/noticias/${noticiaID}`)
    const noticia = await response.json()
    return noticia
}

formEdit.addEventListener('submit', (element) => {
    element.preventDefault()

    const title = formEdit.elements['title'].value
    const autor = formEdit.elements['autor'].value
    const image = formEdit.elements['image'].value
    const text = formEdit.elements['text'].value

    const noticia = {
        title,
        autor,
        image,
        text
    }
    editNoticia(noticia)
})

const loadForm = async (noticia) => {
    document.getElementById('title').value = noticia.title
    document.getElementById('autor').value = noticia.autor
    document.getElementById('image').value = noticia.image
    document.getElementById('text').value = noticia.text

    document.getElementById('modal').style.display = 'grid'
}

const editNoticia = async (noticia) => {
    // O endpoint foi alterado para receber o id que será editado
    // O metodo foi alterado de POST para PUT
    await fetch(`http://localhost:3000/noticias/${noticiaID}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)
    })
    // Redireciono o usuario para a tela de listagem
    document.getElementById('modal').style.display = 'none'
    window.location = 'index.html'
}

const loadData = async (id) => {
    noticiaID = id
    const noticia = await searchNoticia(noticiaID)
    loadForm(noticia)
}