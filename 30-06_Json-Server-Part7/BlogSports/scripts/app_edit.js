const formEdit = document.getElementById('form_edit')
let noticiaID

const searchNoticia = async (noticiaID) => {
    const response = await fetch(`http://localhost:3000/noticias/${noticiaID}`)
    const noticia = await response.json()
    return noticia
}

formEdit.addEventListener('submit', async element => {
    element.preventDefault()

    const title = formEdit.elements['title'].value
    const autor = formEdit.elements['autor'].value
    const image = formEdit.elements['image'].value
    const text = formEdit.elements['text'].value
    
    const autorObjet = await getAutor(autor)
    const noticia = {
        title,
        autor: {
            id: autorObjet.id,
            name: autorObjet.name,
            role: autorObjet.role
        },
        image,
        text
    }
    editNoticia(noticia)
})

const getAutores = async () => {
    const response = await fetch('http://localhost:3000/autores')
    const autores = await response.json()
    return autores
}

const getAutor = async (id) => {
    const resposta = await fetch(`http://localhost:3000/autores/${id}`)
    const autor = await resposta.json()
    return autor
}

const loadSelect = async () => {
    const selectAutor = document.getElementById('autor')
    const autores = await getAutores()

    autores.forEach(autor => {
        const opcao = new Option(autor.name, autor.id)
        selectAutor.options.add(opcao)
    })
}

const loadForm = async (noticia) => {
    autor = noticia.autor.id

    document.getElementById('title').value = noticia.title
    document.getElementById('autor').value = autor
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

loadSelect()