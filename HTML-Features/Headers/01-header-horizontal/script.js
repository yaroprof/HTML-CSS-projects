const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('nav ul');

// burger-button menu
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navList.classList.toggle('active');
});

// togle change background color
const body = document.querySelector('body');
const toggleColor = document.querySelector('.btn-dark');
toggleColor.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
