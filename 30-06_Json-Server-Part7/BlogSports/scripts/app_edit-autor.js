const formEdit = document.getElementById('form_edit')
let autorID = null

// Recupero o ID
const getIdUrl = () => {
    const paramString = window.location.search
    // URLSearchParams define metodos para buscar parametros da URL
    const pararms = new URLSearchParams(paramString)
    // params.get('o_nome_do_campo_que_esta_na_url)'
    // ou seja, ao utulizar o .get eu posso recuperar um determinado campo
    autorID = pararms.get('id')
}

const getAutor = async (autorID) => {
    const response = await fetch(`http://localhost:3000/autores/${autorID}`)
    const autor = await response.json()
    return autor
}

formEdit.addEventListener('submit', async element => {
    element.preventDefault()

    const name = formEdit.elements['name'].value
    const role = formEdit.elements['role'].value
    
    const autor = {
        name,
        role
    }
    editAutor(autor)
})


const loadForm = async (autor) => {
    document.getElementById('name').value = autor.name
    document.getElementById('role').value = autor.role
}

const editAutor = async (autor) => {
    // O endpoint foi alterado para receber o id que será editado
    // O metodo foi alterado de POST para PUT
    await fetch(`http://localhost:3000/autores/${autorID}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(autor)
    })
    // Redireciono o usuario para a tela de listagem
    window.location = 'html_autors.html'
}

const loadData = async () => {
    getIdUrl()
    const autor = await getAutor(autorID)
    loadForm(autor)
}

loadData()