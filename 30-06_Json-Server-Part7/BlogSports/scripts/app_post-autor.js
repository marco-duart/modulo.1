const form = document.getElementById('form')

form.addEventListener('submit', async element => {
    element.preventDefault()
    const name = form.elements['name'].value
    const role = form.elements['role'].value

    const autor = {
        name,
        role
    }
    postAutor(autor)
})

const postAutor = async (autor) => {
    await fetch('http://localhost:3000/autores', {
        method: 'POST',
        headers: {
            "Accept": 'aplication/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(autor)
    })
    window.location = 'html_autors.html'
}