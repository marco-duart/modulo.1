const inputNoticias = async (noticias) => {
    const content = document.getElementById('main')
    noticias.forEach(noticia => {
        content.innerHTML = content.innerHTML + `
        <div class="main__card">
            <div class="card__img"><img src="${noticia.imagem}" alt=""></div>
            <div class="card__content">
                <div class="card__title">${noticia.titulo}</div>
                <div class="card__text">${noticia.texto}</div>
                <div class="card__btn"><button>Editar</button></div>
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

getNoticias()