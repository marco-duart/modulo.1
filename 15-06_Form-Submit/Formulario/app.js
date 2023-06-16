const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  /* INICIANDO VARIAVEIS */
  const code = document.getElementById('code')
  const name = document.getElementById('name')
  const category = document.getElementById('category')
  const price = document.getElementById('price')
  const quantity = document.getElementById('quantity')
  /* VARIAVEL TAG CONTAINER */
  const container = document.getElementById('container')
  /* VARIAVEIS DE RETORNO MENSAGEM DE ERRO */
  const codeErro = document.getElementById('codeErro')
  const nameErro = document.getElementById('nameErro')
  const categoryErro = document.getElementById('categoryErro')
  const priceErro = document.getElementById('priceErro')
  const quantityErro = document.getElementById('quantityErro')




  if (code.value.trim() === '') {
    code.className='invalid'
    codeErro.className='show'
  }
  else {
    code.className='valid'
    codeErro.className='hide'
  }
  
  if (name.value.trim() === '') {
    name.className='invalid'
    nameErro.className='show'
  }
  else {
    name.className='valid'
    nameErro.className='hide'
  }

  if (category.value.trim() === 'Vazio') {
    category.className='invalid'
    categoryErro.className='show'
  }
  else {
    category.className='valid'
    categoryErro.className='hide'
  }

  if (price.value.trim() === '') {
    price.className='invalid'
    priceErro.className='show'
  }
  else {
    price.className='valid'
    priceErro.className='hide'
  }

  if (quantity.value.trim() === '') {
    quantity.className='invalid'
    quantityErro.className='show'
  }
  else {
    quantity.className='valid'
    quantityErro.className='hide'
  }

  if(code.value.trim() !== '' && name.value.trim() !== '' && category.value.trim() !== 'Vazio' && price.value.trim() !== '' && quantity.value.trim() !== '') {
    container.innerHTML=container.innerHTML + '<h2>#'+code.value+' - '+name.value+'</h2>'
    container.innerHTML=container.innerHTML + '<div>Categoria:<span>'+category.value+'</span></div>'
    container.innerHTML=container.innerHTML + '<div>Preço:<span>R$ '+price.value+'</span></div>'
    container.innerHTML=container.innerHTML + '<div>Quantidade:<span>'+quantity.value+'</span></div>'
    container.innerHTML=container.innerHTML + '<h5>R$ '+parseFloat(price.value)*parseFloat(quantity.value)+'</h5>'
  }
})