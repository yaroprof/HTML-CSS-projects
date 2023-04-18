const container = document.querySelector('.container')
const button = document.querySelector('.toggle-sidebar')

button.addEventListener('click', () =>{
  container.classList.toggle('show-sidebar')
})
