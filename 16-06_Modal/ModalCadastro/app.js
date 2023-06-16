const form = document.getElementById('form')
const modal = document.getElementById('modal')

const openModal=()=>{
    modal.style.display = 'block'
}
const closeModal=()=>{
    modal.style.display = 'none'
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  /* INICIANDO VARIAVEIS */
  const name = document.getElementById('name')
  const cpf = document.getElementById('cpf')
  const email = document.getElementById('email')
  const password = document.getElementById('password')

  if (name.value.trim() === '') {
    name.className='item invalid'
  }
  else {
    name.className='item valid'
  }
  
  if (cpf.value.trim() === '') {
    cpf.className='item invalid'
  }
  else {
    cpf.className='item valid'
  }

  if (email.value.trim() === '') {
    email.className='item invalid'
  }
  else {
    email.className='item valid'
  }

  if (password.value.trim() === '') {
    password.className='item invalid'
  }
  else {
    password.className='item valid'
  }

  if(name.value.trim() !== '' && cpf.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '') {
    const showName = document.getElementById('showName')
    const showEmail = document.getElementById('showEmail')
    showName.innerText = name.value
    showEmail.innerText = email.value
    openModal()
  }
})

modal.addEventListener('click',(event) => {
    if(event.target===modal) {
        closeModal()
    }
})