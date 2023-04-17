const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navList.classList.toggle('active');
});
