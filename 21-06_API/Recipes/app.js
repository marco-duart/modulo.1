const modal = document.getElementById('container-modal')
const content = document.getElementById('content')
const urlList = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f00b0c713fmsh6eeeda07de27e27p10f414jsn621ddf6cf1ec',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
}

const recipesListAPI = async () => {
  try {
    const response = await fetch(urlList, options)
    const result = await response.json()
    console.log(result)
    return result.results
  } catch (error) {
    console.error(error)
  }
}

const recipeAPI = async (id) => {
  try {
    const urlRecipe = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`
    const response = await fetch(urlRecipe, options)
    const result = await response.json()
    console.log(result)
    injectModal(result)
  } catch (error) {
    console.error(error)
  }
}

const injectModal = (element) => {
  const modalTitle = document.getElementById('modal-title')
  const modalContent = document.getElementById('modal-content')
  modalTitle.innerText = `${element.name}`
  modalContent.innerText = `${element.description}`
  openModal()
}

const injectCard = async () => {
  const recipes = await recipesListAPI()
  content.innerHTML = recipes.map(element => {
    return `
    <div class="card">
            <div class="title">${element.name}</div>
            <div class="img"><img src="${element.thumbnail_url}" alt=""></div>
            <div><button onclick="recipeAPI(${element.id})" class="submit">Ver descrição</button></div>
    </div>
    `
  })
}

const openModal = () => {
  modal.style.display = 'block'
}
const closeModal = () => {
  modal.style.display = 'none'
}

modal.addEventListener('click',(event) => {
  if(event.target===modal) {
      closeModal()
  }
})

injectCard()