const form = document.getElementById('form')

form.addEventListener('submit', async element => {
    element.preventDefault()
    const title = form.elements['title'].value
    const autor = form.elements['autor'].value
    const image = form.elements['image'].value
    const text = form.elements['text'].value

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
    postNoticia(noticia)
})

const postNoticia = async (noticia) => {
    await fetch('http://localhost:3000/noticias', {
        method: 'POST',
        headers: {
            "Accept": 'aplication/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(noticia)
    })
    window.location = 'index.html'
}

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

    const voidOption = new Option('Selecione uma opção...')
    voidOption.selected = true
    voidOption.disabled = true
    selectAutor.options.add(voidOption)

    autores.forEach(autor => {
        const opcao = new Option(autor.name, autor.id)
        selectAutor.options.add(opcao)
    })
}

loadSelect()