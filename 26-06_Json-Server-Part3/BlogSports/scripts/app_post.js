const form = document.getElementById('form')

form.addEventListener('submit', element => {
    element.preventDefault()
    const title = form.elements['title'].value
    const autor = form.elements['autor'].value
    const image = form.elements['image'].value
    const text = form.elements['text'].value

    const noticia = {
        title,
        autor,
        image,
        text,
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