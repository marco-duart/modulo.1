const inputNoticias = async (noticias) => {
    const content = document.getElementById('main')
    noticias.forEach(noticia => {
        content.innerHTML = content.innerHTML + `
        <div class="main__card">
            <div class="card__img"><img src="${noticia.image}" alt=""></div>
            <div class="card__content">
                <div class="card__title">${noticia.title}</div>
                <div class="card__text">${noticia.text}</div>
                <div class="card__btn"><button onclick="editNoticia(${noticia.id})">Editar</button></div>
            </div>
        </div>
        `
    });
}

const getNoticias = async () => {
    const response = await fetch('http://localhost:3000/noticias')
    const noticias = await response.json()
    inputNoticias(noticias)
}

const editNoticia = (id) => {
    window.location = `html_edit.html?id=${id}`
}

getNoticias()