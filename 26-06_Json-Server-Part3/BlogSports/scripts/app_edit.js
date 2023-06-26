const form = document.getElementById('form')
let noticiaID = null

// Recupero o ID
const getIdUrl = () => {
    const paramString = window.location.search
    // URLSearchParams define metodos para buscar parametros da URL
    const pararms = new URLSearchParams(paramString)
    // params.get('o_nome_do_campo_que_esta_na_url)'
    // ou seja, ao utulizar o .get eu posso recuperar um determinado campo
    noticiaID = pararms.get('id')
}

const searchNoticia = async () => {
    const response = await fetch(`http://localhost:3000/noticias/${noticiaID}`)
    const noticia = await response.json()
    return noticia
}

form.addEventListener('submit', (element) => {
    element.preventDefault()

    const title = form.elements['title'].value
    const autor = form.elements['autor'].value
    const image = form.elements['image'].value
    const text = form.elements['text'].value

    const noticia = {
        title,
        autor,
        image,
        text
    }
    editNoticia(noticia)
})

const loadForm = async (livro) => {
    document.getElementById('title').value = livro.title
    document.getElementById('autor').value = livro.autor
    document.getElementById('image').value = livro.image
    document.getElementById('text').value = livro.text
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
    window.location = 'index.html'
}

const loadData = async () => {
    getIdUrl()
    console.log(noticiaID)
    const noticia = await searchNoticia()
    console.log(noticia)
    loadForm(noticia)
}

loadData()