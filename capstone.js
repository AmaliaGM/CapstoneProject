
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('#nav-menu');
const body = document.querySelector('body');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
});

hamburguer.addEventListener('click', () => {
  body.classList.toggle('stopscroll');
});

